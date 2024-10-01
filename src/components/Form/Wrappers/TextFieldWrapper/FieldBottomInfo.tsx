import clsx from 'clsx';
import InfoCircleOutlineIcon from '@/src/icons/InfoCircleOutline';
import type { TextFieldBaseProps } from './TextFieldWrapper';

interface FieldBottomInfoProps extends Pick<TextFieldBaseProps, 'errorMessage' | 'hintMessage'> {
  maxLength?: number;
  value?: string;
}

const FieldBottomInfo = (props: FieldBottomInfoProps) => {
  const { errorMessage, hintMessage, maxLength, value } = props;
  const showInfo = Boolean(errorMessage || hintMessage || maxLength);
  if (showInfo)
    return (
      <div
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
          {
            'dgs-ui-kit-justify-between': (errorMessage || hintMessage) && maxLength,
            'dgs-ui-kit-justify-start': (errorMessage || hintMessage) && !maxLength,
            'dgs-ui-kit-justify-end': !(errorMessage || hintMessage) && maxLength,
          },
          errorMessage ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
        )}
      >
        {(errorMessage || hintMessage) && (
          <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2">
            <InfoCircleOutlineIcon
              width={16}
              height={16}
            />
            <span>{errorMessage || hintMessage}</span>
          </div>
        )}
        {maxLength && (
          <span className="ss02">
            {value?.length ?? 0}/{maxLength}
          </span>
        )}
      </div>
    );
  return null;
};

export default FieldBottomInfo;
