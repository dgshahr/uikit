'use client';
import clsx from 'clsx';
import { useState, type FC, type ReactNode } from 'react';

import '@/src/styles.css';

const TAIL_POSITION_CLASS_NAME = {
  'top-left':
    'dgs-ui-kit-left-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'top-center':
    'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'top-right':
    'dgs-ui-kit-right-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
  'bottom-left':
    'dgs-ui-kit-left-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  'bottom-center':
    'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  'bottom-right':
    'dgs-ui-kit-right-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
};

const POSITION_CLASS_NAMES: Record<keyof typeof TAIL_POSITION_CLASS_NAME, string> = {
  'top-left': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
  'top-center':
    'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
  'top-right': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
  'bottom-left': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
  'bottom-center':
    'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
  'bottom-right': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
};

export interface TooltipProps {
  tailPosition?: keyof typeof TAIL_POSITION_CLASS_NAME;
  title?: string;
  icon?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    content,
    className,
    footer,
    icon,
    tailPosition = 'bottom-center',
    title,
  } = props;
  const [open, setOpen] = useState(false);

  function showTooltip() {
    setOpen(true);
  }

  function closeTooltip() {
    setOpen(false);
  }

  return (
    <div
      className="dgs-ui-kit-relative"
      onMouseEnter={showTooltip}
      onTouchStart={showTooltip}
      onMouseLeave={closeTooltip}
      onTouchEnd={closeTooltip}
    >
      {children}
      <div
        className={clsx(
          className,
          'dgs-ui-kit-absolute dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-max-w-[400px] dgs-ui-kit-bg-gray-700 dgs-ui-kit-text-white dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-shadow-md dgs-ui-kit-transition dgs-ui-kit-w-max',
          open
            ? 'dgs-ui-kit-opacity-100 dgs-ui-kit-scale-100'
            : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-0',
          POSITION_CLASS_NAMES[tailPosition],
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
            TAIL_POSITION_CLASS_NAME[tailPosition],
          )}
        />
      </div>
    </div>
  );
};

export default Tooltip;
