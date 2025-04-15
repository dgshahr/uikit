import debounce from 'lodash.debounce';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

export type PopperPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface UseFlipPositionOptions {
  initialPosition: PopperPosition;
  onPositionChange?: (newPosition: PopperPosition) => void;
  padding?: number;
  debounceWait?: number;
  minVisible?: number;
}

function getOppositeVertical(position: PopperPosition): PopperPosition {
  return position.startsWith('top')
    ? (position.replace('top', 'bottom') as PopperPosition)
    : (position.replace('bottom', 'top') as PopperPosition);
}

function getOppositeHorizontal(position: PopperPosition): PopperPosition {
  if (position.endsWith('left')) return position.replace('left', 'right') as PopperPosition;
  if (position.endsWith('right')) return position.replace('right', 'left') as PopperPosition;
  return position;
}

function flipHorizontalFromCenter(
  position: PopperPosition,
  overflow: { left: boolean; right: boolean },
): PopperPosition {
  if (!position.endsWith('center')) return position;
  if (overflow.left && !overflow.right)
    return position.replace('center', 'right') as PopperPosition;
  if (overflow.right && !overflow.left) return position.replace('center', 'left') as PopperPosition;
  return position;
}

function setScaleInMatrixTransform(matrixStr: string, scaleValue: number): string {
  const match = RegExp(/matrix\(([^)]+)\)/).exec(matrixStr);
  if (!match) return `scale(${scaleValue})`;
  const parts = match[1]!.split(',').map((s) => parseFloat(s.trim()));
  if (parts.length !== 6) return `scale(${scaleValue})`;
  parts[0] = scaleValue;
  parts[3] = scaleValue;
  return `matrix(${parts.join(', ')})`;
}

function calculateAnchorPoint(position: PopperPosition, anchorRect: DOMRect) {
  let anchorX: number;
  switch (position) {
    case 'top-left':
    case 'bottom-left':
      anchorX = anchorRect.left;
      break;
    case 'top-center':
    case 'bottom-center':
      anchorX = anchorRect.left + anchorRect.width / 2;
      break;
    case 'top-right':
    case 'bottom-right':
      anchorX = anchorRect.right;
      break;
    default:
      anchorX = anchorRect.left + anchorRect.width / 2;
  }
  const anchorY = position.startsWith('top') ? anchorRect.top : anchorRect.bottom;
  return { anchorX, anchorY };
}

function calculatePopperCoords(
  position: PopperPosition,
  anchorX: number,
  anchorY: number,
  popperRect: DOMRect,
) {
  let left = 0;
  let top = 0;

  switch (position) {
    case 'top-left':
    case 'bottom-left':
      left = anchorX;
      break;
    case 'top-center':
    case 'bottom-center':
      left = anchorX - popperRect.width / 2;
      break;
    case 'top-right':
    case 'bottom-right':
      left = anchorX - popperRect.width;
      break;
  }

  switch (position) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      top = anchorY - popperRect.height;
      break;
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      top = anchorY;
      break;
  }

  return { top, left };
}

function calculateOverflow(
  top: number,
  left: number,
  popperRect: DOMRect,
  viewportWidth: number,
  viewportHeight: number,
  padding: number,
  minVisible?: number,
) {
  const overflowTop = top < padding;
  const overflowBottom = top + popperRect.height > viewportHeight - padding;
  const overflowLeft = left < padding;
  const overflowRight = left + popperRect.width > viewportWidth - padding;

  if (minVisible == null) {
    return {
      top: overflowTop,
      bottom: overflowBottom,
      left: overflowLeft,
      right: overflowRight,
    };
  }

  const visibleHeight = Math.min(popperRect.bottom, viewportHeight) - Math.max(top, 0);
  const visibleWidth = Math.min(popperRect.right, viewportWidth) - Math.max(left, 0);

  const verticalOverflow = (() => {
    if (overflowTop && overflowBottom) {
      if (visibleHeight >= minVisible) {
        return { top: false, bottom: false };
      }
      return visibleHeight < popperRect.height / 2
        ? { top: true, bottom: false }
        : { top: false, bottom: true };
    }
    if (overflowTop) {
      return { top: visibleHeight < minVisible, bottom: false };
    }
    if (overflowBottom) {
      return { top: false, bottom: visibleHeight < minVisible };
    }
    return { top: false, bottom: false };
  })();

  const horizontalOverflow = (() => {
    if (overflowLeft && overflowRight) {
      if (visibleWidth >= minVisible) {
        return { left: false, right: false };
      }
      return visibleWidth < popperRect.width / 2
        ? { left: true, right: false }
        : { left: false, right: true };
    }
    if (overflowLeft) {
      return { left: visibleWidth < minVisible, right: false };
    }
    if (overflowRight) {
      return { left: false, right: visibleWidth < minVisible };
    }
    return { left: false, right: false };
  })();

  return {
    top: verticalOverflow.top,
    bottom: verticalOverflow.bottom,
    left: horizontalOverflow.left,
    right: horizontalOverflow.right,
  };
}

export function useFlipPosition<T extends HTMLElement, K extends HTMLElement>({
  initialPosition,
  onPositionChange,
  padding = 8,
  debounceWait = 50,
  minVisible,
}: UseFlipPositionOptions) {
  const anchorRef = useRef<T>(null);
  const popperRef = useRef<K>(null);
  const [position, setPosition] = useState<PopperPosition>(initialPosition);

  const initialPositionRef = useRef<PopperPosition>(initialPosition);
  useEffect(() => {
    initialPositionRef.current = initialPosition;
  }, [initialPosition]);

  const positionRef = useRef<PopperPosition>(position);
  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  const updatePosition = useCallback(() => {
    const anchorEl = anchorRef.current;
    const popperEl = popperRef.current;
    if (!anchorEl || !popperEl) return;

    const basePosition = initialPositionRef.current;
    const anchorRect = anchorEl.getBoundingClientRect();
    const { anchorX, anchorY } = calculateAnchorPoint(basePosition, anchorRect);

    const computedStyle = window.getComputedStyle(popperEl);
    const computedTransform = computedStyle.transform || 'none';
    const transformWithScaleOne = setScaleInMatrixTransform(computedTransform, 1);

    popperEl.style.setProperty('opacity', '0', 'important');
    popperEl.style.setProperty('transform', transformWithScaleOne, 'important');
    popperEl.style.setProperty('visibility', 'hidden', 'important');
    popperEl.style.setProperty('position', 'absolute', 'important');
    popperEl.style.setProperty('transition', 'none', 'important');

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    popperEl.offsetHeight;

    const popperRect = popperEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const { top, left } = calculatePopperCoords(basePosition, anchorX, anchorY, popperRect);

    const overflow = calculateOverflow(
      top,
      left,
      popperRect,
      viewportWidth,
      viewportHeight,
      padding,
      minVisible,
    );

    let newPosition = basePosition;

    if (
      (basePosition.startsWith('top') && overflow.top) ||
      (basePosition.startsWith('bottom') && overflow.bottom)
    ) {
      newPosition = getOppositeVertical(newPosition);
    }

    if (
      (newPosition.endsWith('left') && overflow.left) ||
      (newPosition.endsWith('right') && overflow.right)
    ) {
      newPosition = getOppositeHorizontal(newPosition);
    }

    if (newPosition.endsWith('center')) {
      newPosition = flipHorizontalFromCenter(newPosition, overflow);
    }

    popperEl.style.removeProperty('opacity');
    popperEl.style.removeProperty('transform');
    popperEl.style.removeProperty('visibility');
    popperEl.style.removeProperty('position');
    popperEl.style.removeProperty('transition');

    if (newPosition !== positionRef.current) {
      setPosition(newPosition);
      if (onPositionChange) onPositionChange(newPosition);
    }
  }, [onPositionChange, padding]);

  const debouncedUpdatePosition = useMemo(
    () => debounce(updatePosition, debounceWait),
    [updatePosition, debounceWait],
  );

  useEffect(() => {
    debouncedUpdatePosition();

    window.addEventListener('resize', debouncedUpdatePosition);
    window.addEventListener('scroll', debouncedUpdatePosition);

    return () => {
      window.removeEventListener('resize', debouncedUpdatePosition);
      window.removeEventListener('scroll', debouncedUpdatePosition);
      debouncedUpdatePosition.cancel();
    };
  }, [debouncedUpdatePosition]);

  return { anchorRef, popperRef, position };
}
