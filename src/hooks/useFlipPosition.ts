import { useRef, useEffect, useState, useCallback } from 'react';

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
}

function getOppositeVertical(position: Position): Position {
  if (position.startsWith('top')) {
    return position.replace('top', 'bottom') as Position;
  } else {
    return position.replace('bottom', 'top') as Position;
  }
}

function getOppositeHorizontal(position: Position): Position {
  if (position.endsWith('left')) {
    return position.replace('left', 'right') as Position;
  } else if (position.endsWith('right')) {
    return position.replace('right', 'left') as Position;
  }
  // For center, handled separately
  return position;
}

function flipHorizontalFromCenter(
  position: Position,
  overflow: { left: boolean; right: boolean },
): Position {
  if (!position.endsWith('center')) return position;

  if (overflow.left && !overflow.right) {
    // Overflow on left only → flip center to right
    return position.replace('center', 'right') as Position;
  } else if (overflow.right && !overflow.left) {
    // Overflow on right only → flip center to left
    return position.replace('center', 'left') as Position;
  }
  // If both sides overflow or none, keep center
  return position;
}

function setScaleInMatrixTransform(matrixStr: string, scaleValue: number): string {
  // matrixStr expected format: "matrix(a, b, c, d, tx, ty)"
  const match = matrixStr.match(/matrix\(([^)]+)\)/);
  if (!match) {
    // If no matrix found, just return scale transform
    return `scale(${scaleValue})`;
  }

  const parts = match[1]!.split(',').map((s) => parseFloat(s.trim()));
  if (parts.length !== 6) {
    // Unexpected format, fallback
    return `scale(${scaleValue})`;
  }

  // parts = [a, b, c, d, tx, ty]
  // Replace scaleX (a) and scaleY (d) with scaleValue
  parts[0] = scaleValue; // a = scaleX
  parts[3] = scaleValue; // d = scaleY

  return `matrix(${parts.join(', ')})`;
}

export function useFlipPosition<T extends HTMLElement, K extends HTMLElement>({
  initialPosition,
  onPositionChange,
  padding = 8,
}: UseFlipPositionOptions) {
  const anchorRef = useRef<T>(null);
  const popperRef = useRef<K>(null);
  const [position, setPosition] = useState<Position>(initialPosition);

  // Keep initialPosition in a ref to avoid stale closure
  const initialPositionRef = useRef<Position>(initialPosition);
  useEffect(() => {
    initialPositionRef.current = initialPosition;
  }, [initialPosition]);

  // Track current position in a ref to avoid stale closure in updatePosition
  const positionRef = useRef<Position>(position);
  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  const updatePosition = useCallback(() => {
    const anchorEl = anchorRef.current;
    const popperEl = popperRef.current;
    if (!anchorEl || !popperEl) return;

    // Use initialPosition as base for calculations
    const basePosition = initialPositionRef.current;

    const anchorRect = anchorEl.getBoundingClientRect();

    // Calculate anchorX and anchorY based on basePosition
    let anchorX: number;
    switch (basePosition) {
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

    let anchorY: number;
    if (basePosition.startsWith('top')) {
      anchorY = anchorRect.top;
    } else {
      anchorY = anchorRect.bottom;
    }

    const computedStyle = window.getComputedStyle(popperEl);
    const computedTransform = computedStyle.transform || 'none';
    const transformWithScaleOne = setScaleInMatrixTransform(computedTransform, 1);

    // Temporarily override styles to measure
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

    // Calculate popper top and left based on basePosition
    let top = 0;
    let left = 0;

    switch (basePosition) {
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

    switch (basePosition) {
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

    // Check overflow
    const overflow = {
      top: top < padding,
      bottom: top + popperRect.height > viewportHeight - padding,
      left: left < padding,
      right: left + popperRect.width > viewportWidth - padding,
    };

    // Start with basePosition as newPosition
    let newPosition = basePosition;

    // Flip vertically if needed
    if (
      (basePosition.startsWith('top') && overflow.top) ||
      (basePosition.startsWith('bottom') && overflow.bottom)
    ) {
      newPosition = getOppositeVertical(newPosition);
    }

    // Flip horizontally if needed
    if (
      (newPosition.endsWith('left') && overflow.left) ||
      (newPosition.endsWith('right') && overflow.right)
    ) {
      newPosition = getOppositeHorizontal(newPosition);
    }

    // Horizontal flip for center positions based on overflow side
    if (newPosition.endsWith('center')) {
      newPosition = flipHorizontalFromCenter(newPosition, overflow);
    }

    // Restore original inline styles
    popperEl.style.removeProperty('opacity');
    popperEl.style.removeProperty('transform');
    popperEl.style.removeProperty('visibility');
    popperEl.style.removeProperty('position');
    popperEl.style.removeProperty('transition');

    // Update state only if changed
    if (newPosition !== positionRef.current) {
      setPosition(newPosition);
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    }
    // No else branch to reset position — it naturally stays at initialPosition if no flip
  }, [onPositionChange, padding]);

  useEffect(() => {
    updatePosition();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [updatePosition]);

  return { anchorRef, popperRef, position };
}
