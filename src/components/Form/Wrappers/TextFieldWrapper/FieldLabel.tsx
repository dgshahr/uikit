import clsx from 'clsx';
import type { TextFieldBaseProps } from './TextFieldWrapper';

interface FieldLabelProps extends Pick<TextFieldBaseProps, 'link' | 'labelContent'> {
  required?: boolean;
}

const FieldLabel = (props: FieldLabelProps) => {
  const { link, labelContent, required } = props;
  const showLabel = Boolean(labelContent || link?.href);

  if (showLabel)
    return (
      <div
        className={clsx('flex mb-2', {
          'justify-between': labelContent && link?.href,
          'justify-start': labelContent && !link?.href,
          'justify-end': !labelContent && link?.href,
        })}
      >
        {labelContent && (
          <label className="px-0 text-sm font-bold text-right md:mx-0">
            {labelContent}
            {required && <span className="ms-2 text-error-500">*</span>}
          </label>
        )}
        {link?.href && (
          <a
            href={link.href}
            className="font-button-small text-primary-400"
          >
            {link.cnotent}
          </a>
        )}
      </div>
    );

  return null;
};

export default FieldLabel;
