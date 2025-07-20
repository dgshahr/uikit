import clsx from 'clsx';
import { type FC, type RefObject } from 'react';
import type { PopperPosition } from '@/src/hooks/useFlipPosition';
import type { TooltipProps } from '.';

interface TooltipContentProps
  extends Pick<TooltipProps, 'content' | 'footer' | 'title' | 'icon' | 'className' | 'position'> {
  open: boolean;
  ref: RefObject<HTMLDivElement | null>;
}

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

const TooltipContent: FC<TooltipContentProps> = (props) => {
  const { content, footer, title, icon, className, position = 'top-center', open, ref } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        'dgsuikit:absolute dgsuikit:p-4 dgsuikit:flex dgsuikit:gap-2 dgsuikit:max-w-[400px] dgsuikit:bg-gray-700 dgsuikit:text-white dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-300 dgsuikit:shadow-md dgsuikit:transition dgsuikit:duration-300 dgsuikit:w-max dgsuikit:z-50',
        open ? 'dgsuikit:opacity-100 dgsuikit:scale-100' : 'dgsuikit:opacity-0 dgsuikit:scale-0',
        POSITION_CLASS_NAMES[position],
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
          TAIL_POSITION_CLASS_NAME[position],
        )}
      />
    </div>
  );
};

export default TooltipContent;
