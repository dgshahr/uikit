import clsx from 'clsx';
import type { TextFieldBaseProps } from './TextFieldWrapper';

interface FieldLabelProps extends Pick<TextFieldBaseProps, 'link' | 'labelContent'> {
  required?: boolean;
}

const FieldLabel = (props: FieldLabelProps) => {
  const { link, labelContent, required } = props;

  return (
    <div
      className={clsx('dgs-ui-kit-flex dgs-ui-kit-mb-2', {
        'dgs-ui-kit-justify-between': labelContent && link?.href,
        'dgs-ui-kit-justify-start': labelContent && !link?.href,
        'dgs-ui-kit-justify-end': !labelContent && link?.href,
      })}
    >
      {labelContent && (
        <label className="dgs-ui-kit-px-0 dgs-ui-kit-text-sm dgs-ui-kit-font-bold dgs-ui-kit-text-right md:dgs-ui-kit-mx-0">
          {labelContent}
          {required && <span className="dgs-ui-kit-ms-2 dgs-ui-kit-text-error-500">*</span>}
        </label>
      )}
      {link?.href && (
        <a
          href={link.href}
          className="dgs-ui-kit-font-button-small dgs-ui-kit-text-primary-400"
        >
          {link.cnotent}
        </a>
      )}
    </div>
  );
};

export default FieldLabel;
