import clsx from 'clsx';
import InfoCircleOutlineIcon from '@/src/icons/InfoCircleOutline';

export interface FieldBottomInfoProps {
  maxLength?: number;
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  hintMessage?: string;
}

const FieldBottomInfo = (props: FieldBottomInfoProps) => {
  const { errorMessage, hintMessage, maxLength, value, disabled } = props;
  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
        {
          'dgs-ui-kit-justify-between': (errorMessage ?? hintMessage) && maxLength,
          'dgs-ui-kit-justify-start': (errorMessage ?? hintMessage) && !maxLength,
          'dgs-ui-kit-justify-end': !(errorMessage ?? hintMessage) && maxLength,
          'dgs-ui-kit-text-gray-400': disabled,
        },
        errorMessage ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
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
          <InfoCircleOutlineIcon
            width={16}
            height={16}
          />
          <span>{errorMessage ?? hintMessage}</span>
        </div>
      )}
      {maxLength && (
        <span className="ss02">
          {value?.length ?? 0}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default FieldBottomInfo;
