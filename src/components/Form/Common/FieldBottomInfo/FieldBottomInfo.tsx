import clsx from 'clsx';
import type { ReactNode } from 'react';
import IconInfoCircleOutline from '@/src/icons/IconInfoCircleOutline';

export interface FieldBottomInfoProps {
  disabled?: boolean;
  errorMessage?: ReactNode;
  hintMessage?: ReactNode;
  extraHelper?: ReactNode;
  className?: string;
}

const FieldBottomInfo = (props: FieldBottomInfoProps) => {
  const { errorMessage, hintMessage, extraHelper, disabled, className } = props;
  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:font-p3-regular',
        {
          'dgsuikit:justify-between': (errorMessage ?? hintMessage) && extraHelper,
          'dgsuikit:justify-start': (errorMessage ?? hintMessage) && !extraHelper,
          'dgsuikit:justify-end': !(errorMessage ?? hintMessage) && extraHelper,
          'dgsuikit:text-gray-400': disabled,
        },
        errorMessage ? 'dgsuikit:text-error-500' : 'dgsuikit:text-primary-500',
        className,
      )}
    >
      {(errorMessage || hintMessage) && (
        <div
          className={clsx(
            'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:font-light',
            {
              'dgsuikit:text-gray-400': disabled,
            },
          )}
        >
          <IconInfoCircleOutline
            width={16}
            height={16}
          />
          <span>{errorMessage ?? hintMessage}</span>
        </div>
      )}
      {extraHelper}
    </div>
  );
};

export default FieldBottomInfo;
