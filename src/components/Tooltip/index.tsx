'use client';
import clsx from 'clsx';
import { useState, type FC, type ReactNode } from 'react';
import { useFlipPosition, type PopperPosition } from '@/src/hooks/useFlipPosition';

import '@/src/styles.css';

const TAIL_POSITION_CLASS_NAME: Record<PopperPosition, string> = {
  'bottom-right':
    'dgs-ui-kit-left-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'bottom-center':
    'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'bottom-left':
    'dgs-ui-kit-right-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'top-right':
    'dgs-ui-kit-left-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  'top-center':
    'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  'top-left':
    'dgs-ui-kit-right-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
};

const POSITION_CLASS_NAMES: Record<PopperPosition, string> = {
  'bottom-right': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
  'bottom-center':
    'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
  'bottom-left': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
  'top-right': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
  'top-center':
    'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
  'top-left': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
};

export interface TooltipProps {
  position?: PopperPosition;
  title?: string;
  icon?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { children, content, className, footer, icon, position = 'top-center', title } = props;
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
      className="dgs-ui-kit-relative"
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
          'dgs-ui-kit-absolute dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-max-w-[400px] dgs-ui-kit-bg-gray-700 dgs-ui-kit-text-white dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-shadow-md dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-w-max',
          open
            ? 'dgs-ui-kit-opacity-100 dgs-ui-kit-scale-100'
            : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-0',
          POSITION_CLASS_NAMES[innerPosition],
        )}
      >
        {icon && (
          <span className="dgs-ui-kit-shrink-0 [&_svg]:dgs-ui-kit-size-5 dgs-ui-kit-pt-1">
            {icon}
          </span>
        )}

        <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-font-p2-regular">
          {title && <div className="dgs-ui-kit-font-h5-bold">{title}</div>}
          {content}
          {footer}
        </div>
        <div
          className={clsx(
            'dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45',
            TAIL_POSITION_CLASS_NAME[innerPosition],
          )}
        />
      </div>
    </div>
  );
};

export default Tooltip;
