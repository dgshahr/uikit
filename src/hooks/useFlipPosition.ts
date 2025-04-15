import debounce from 'lodash.debounce';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface UseFlipPositionOptions {
  initialPosition: Position;
  onPositionChange?: (newPosition: Position) => void;
  padding?: number;
  debounceWait?: number;
}

function getOppositeVertical(position: Position): Position {
  return position.startsWith('top')
    ? (position.replace('top', 'bottom') as Position)
    : (position.replace('bottom', 'top') as Position);
}

function getOppositeHorizontal(position: Position): Position {
  if (position.endsWith('left')) return position.replace('left', 'right') as Position;
  if (position.endsWith('right')) return position.replace('right', 'left') as Position;
  return position;
}

function flipHorizontalFromCenter(
  position: Position,
  overflow: { left: boolean; right: boolean },
): Position {
  if (!position.endsWith('center')) return position;
  if (overflow.left && !overflow.right) return position.replace('center', 'right') as Position;
  if (overflow.right && !overflow.left) return position.replace('center', 'left') as Position;
  return position;
}

function setScaleInMatrixTransform(matrixStr: string, scaleValue: number): string {
  const match = RegExp(/matrix\(([^)]+)\)/).exec(matrixStr);
  if (!match) return `scale(${scaleValue})`;
  const parts = match[1]!.split(',').map((s) => parseFloat(s.trim()));
  if (parts.length !== 6) return `scale(${scaleValue})`;
  parts[0] = scaleValue; // scaleX
  parts[3] = scaleValue; // scaleY
  return `matrix(${parts.join(', ')})`;
}

function calculateAnchorPoint(position: Position, anchorRect: DOMRect) {
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
  position: Position,
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

function checkOverflow(
  top: number,
  left: number,
  popperRect: DOMRect,
  viewportWidth: number,
  viewportHeight: number,
  padding: number,
) {
  return {
    top: top < padding,
    bottom: top + popperRect.height > viewportHeight - padding,
    left: left < padding,
    right: left + popperRect.width > viewportWidth - padding,
  };
}

export function useFlipPosition<T extends HTMLElement, K extends HTMLElement>({
  initialPosition,
  onPositionChange,
  padding = 8,
  debounceWait = 50,
}: UseFlipPositionOptions) {
  const anchorRef = useRef<T>(null);
  const popperRef = useRef<K>(null);
  const [position, setPosition] = useState<Position>(initialPosition);

  const initialPositionRef = useRef<Position>(initialPosition);
  useEffect(() => {
    initialPositionRef.current = initialPosition;
  }, [initialPosition]);

  const positionRef = useRef<Position>(position);
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
    popperEl.offsetHeight; // force reflow

    const popperRect = popperEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const { top, left } = calculatePopperCoords(basePosition, anchorX, anchorY, popperRect);

    const overflow = checkOverflow(top, left, popperRect, viewportWidth, viewportHeight, padding);

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
