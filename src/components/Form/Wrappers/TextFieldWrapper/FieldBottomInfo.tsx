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
          'flex font-p3-regular',
          {
            'justify-between': (errorMessage || hintMessage) && maxLength,
            'justify-start': (errorMessage || hintMessage) && !maxLength,
            'justify-end': !(errorMessage || hintMessage) && maxLength,
          },
          errorMessage ? 'text-error-500' : 'text-gray-500',
        )}
      >
        {(errorMessage || hintMessage) && (
          <div className="flex items-center gap-2">
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
