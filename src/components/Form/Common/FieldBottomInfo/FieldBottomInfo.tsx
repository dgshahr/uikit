import clsx from 'clsx';
import type { ReactNode } from 'react';
import IconInfoCircleOutline from '@/src/icons/IconInfoCircleOutline';

export interface FieldBottomInfoProps {
  disabled?: boolean;
  errorMessage?: string;
  hintMessage?: string;
  extraHelper?: ReactNode;
  className?: string;
}

const FieldBottomInfo = (props: FieldBottomInfoProps) => {
  const { errorMessage, hintMessage, extraHelper, disabled, className } = props;
  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
        {
          'dgs-ui-kit-justify-between': (errorMessage ?? hintMessage) && extraHelper,
          'dgs-ui-kit-justify-start': (errorMessage ?? hintMessage) && !extraHelper,
          'dgs-ui-kit-justify-end': !(errorMessage ?? hintMessage) && extraHelper,
          'dgs-ui-kit-text-gray-400': disabled,
        },
        errorMessage ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
        className,
      )}
    >
      {(errorMessage || hintMessage) && (
        <div
          className={clsx(
            'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-font-light',
            {
              'dgs-ui-kit-text-gray-400': disabled,
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
