'use client';
import clsx from 'clsx';
import { useState, type FC, type ReactNode } from 'react';
import { useFlipPosition, type PopperPosition } from '@/src/hooks/useFlipPosition';

import '@/src/styles.css';

const TAIL_POSITION_CLASS_NAME: Record<PopperPosition, string> = {
  'bottom-right':
    'dgsuikit:left-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
  'bottom-center':
    'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
  'bottom-left':
    'dgsuikit:right-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
  'top-right':
    'dgsuikit:left-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
  'top-center':
    'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
  'top-left':
    'dgsuikit:right-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
};

const POSITION_CLASS_NAMES: Record<PopperPosition, string> = {
  'bottom-right': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'bottom-center':
    'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'bottom-left': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
  'top-right': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'top-center':
    'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'top-left': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
};

export interface TooltipProps {
  position?: PopperPosition;
  title?: string;
  icon?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    content,
    className,
    wrapperClassName,
    footer,
    icon,
    position = 'top-center',
    title,
  } = props;
  const [open, setOpen] = useState(false);
  const [innerPosition, setInnerPosition] = useState(position);
  const { anchorRef, popperRef } = useFlipPosition<HTMLDivElement, HTMLDivElement>({
    initialPosition: position,
    onPositionChange(newPosition) {
      setInnerPosition((prev) => (prev === newPosition ? prev : newPosition));
    },
  });

  function showTooltip() {
    setOpen(true);
  }

  function closeTooltip() {
    setOpen(false);
  }

  return (
    <div
      ref={anchorRef}
      className={clsx('dgsuikit:relative', wrapperClassName)}
      onMouseEnter={showTooltip}
      onTouchStart={showTooltip}
      onMouseLeave={closeTooltip}
      onTouchEnd={closeTooltip}
    >
      {children}
      <div
        ref={popperRef}
        className={clsx(
          className,
          'dgsuikit:absolute dgsuikit:p-4 dgsuikit:flex dgsuikit:gap-2 dgsuikit:max-w-[400px] dgsuikit:bg-gray-700 dgsuikit:text-white dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-300 dgsuikit:shadow-md dgsuikit:transition dgsuikit:duration-300 dgsuikit:w-max',
          open ? 'dgsuikit:opacity-100 dgsuikit:scale-100' : 'dgsuikit:opacity-0 dgsuikit:scale-0',
          POSITION_CLASS_NAMES[innerPosition],
        )}
      >
        {icon && (
          <span className="dgsuikit:shrink-0 dgsuikit:[&_svg]:size-5 dgsuikit:pt-1">{icon}</span>
        )}

        <div className="dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:font-p2-regular">
          {title && <div className="dgsuikit:font-h5-bold">{title}</div>}
          {content}
          {footer}
        </div>
        <div
          className={clsx(
            'dgsuikit:w-4 dgsuikit:h-4 dgsuikit:bg-gray-700 dgsuikit:border-gray-300 dgsuikit:absolute dgsuikit:rotate-45',
            TAIL_POSITION_CLASS_NAME[innerPosition],
          )}
        />
      </div>
    </div>
  );
};

export default Tooltip;
