import clsx from 'clsx';
import type { FC } from 'react';
import { humanize } from '@/src/utils/humanize';
import { THUMB_SIZE } from './constants';
import type { RangeInputProps, RangeValueType } from './types';

interface RangeThumbProps extends Pick<RangeInputProps<RangeValueType>, 'showTooltip' | 'color'> {
  percent: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  value: number;
}
function getThumbColor(
  color: RangeInputProps<RangeValueType>['color'],
  disabled: RangeThumbProps['disabled'],
) {
  if (disabled) {
    return 'dgsuikit:bg-gray-300';
  }
  return color === 'primary'
    ? 'dgsuikit:bg-primary-500 dgsuikit:group-hover:bg-primary-400 dgsuikit:group-active:bg-primary-600'
    : 'dgsuikit:bg-secondary-600 dgsuikit:group-hover:bg-secondary-500 dgsuikit:group-active:bg-secondary-700';
}
const RangeThumb: FC<RangeThumbProps> = (props) => {
  const { percent, disabled, icon, showTooltip, value, color } = props;

  return (
    <div
      className={clsx(
        'dgsuikit:rounded-full dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:text-white dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
        getThumbColor(color, disabled),
        disabled &&
          'dgsuikit:group-hover:ring-4 dgsuikit:ring-gray-300 dgsuikit:group-active:ring-0 dgsuikit:transition-[background-color,box-shadow]', // state classes
      )}
      style={{
        right: `${percent}%`,
        width: THUMB_SIZE,
        height: THUMB_SIZE,
      }}
    >
      {icon}

      {showTooltip && (
        <div className="dgsuikit:absolute dgsuikit:bottom-full dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity dgsuikit:z-10 dgsuikit:mb-2.5">
          <div className="dgsuikit:flex dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:bg-gray-700 dgsuikit:shadow-md dgsuikit:text-white dgsuikit:font-p2-regular dgsuikit:border dgsuikit:border-gray-300 dgsuikit:ss02">
            {humanize(value)}
          </div>
          <div className="dgsuikit:w-4 dgsuikit:h-4 dgsuikit:bg-gray-700 dgsuikit:border-gray-300 dgsuikit:absolute dgsuikit:rotate-45 dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br" />
        </div>
      )}
    </div>
  );
};

export default RangeThumb;
