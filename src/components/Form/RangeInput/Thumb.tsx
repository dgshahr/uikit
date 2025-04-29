import clsx from 'clsx';
import type { FC } from 'react';
import { humanize } from '@/src/utils/humanize';
import { THUMB_SIZE } from './constants';
import type { RangeInputProps, RangeValueType } from './types';

interface RangeThumbProps extends Pick<RangeInputProps<RangeValueType>, 'showTooltip'> {
  percent: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  value: number;
}
const RangeThumb: FC<RangeThumbProps> = (props) => {
  const { percent, disabled, icon, showTooltip, value } = props;
  return (
    <div
      className={clsx(
        'dgs-ui-kit-bg-primary-500 dgs-ui-kit-rounded-full dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-text-white dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center',
        disabled
          ? '!dgs-ui-kit-bg-gray-300'
          : 'group-hover:dgs-ui-kit-bg-primary-400 group-hover:dgs-ui-kit-ring-4 dgs-ui-kit-ring-gray-300 group-active:dgs-ui-kit-ring-0 group-active:dgs-ui-kit-bg-primary-600 dgs-ui-kit-transition-[background-color,box-shadow]', // state classes
      )}
      style={{
        right: `${percent}%`,
        width: THUMB_SIZE,
        height: THUMB_SIZE,
      }}
    >
      {icon}

      {showTooltip && (
        <div className="dgs-ui-kit-absolute dgs-ui-kit-bottom-full dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100 dgs-ui-kit-transition-opacity dgs-ui-kit-z-10 dgs-ui-kit-mb-2.5">
          <div className="dgs-ui-kit-flex dgs-ui-kit-py-3 dgs-ui-kit-px-4 dgs-ui-kit-rounded-lg dgs-ui-kit-bg-gray-700 dgs-ui-kit-shadow-md dgs-ui-kit-text-white dgs-ui-kit-font-p2-regular dgs-ui-kit-border dgs-ui-kit-border-gray-300 ss02">
            {humanize(value)}
          </div>
          <div className="dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br" />
        </div>
      )}
    </div>
  );
};

export default RangeThumb;
