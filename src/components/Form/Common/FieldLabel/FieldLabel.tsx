import clsx from 'clsx';
import type { FC } from 'react';

export interface FieldLabelProps {
  required?: boolean;
  disabled?: boolean;
  labelContent?: string;
  labelAddon?: React.ReactNode;
  link?: {
    cnotent: string;
    href: string;
  };
}

const FieldLabel: FC<FieldLabelProps> = (props) => {
  const { link, labelContent, required, disabled, labelAddon } = props;

  return (
    <>
      <div
        className={clsx('dgsuikit:flex', {
          'dgsuikit:justify-between': labelContent && link?.href,
          'dgsuikit:mb-2': !labelAddon,
          'dgsuikit:justify-start': labelContent && !link?.href,
          'dgsuikit:justify-end': !labelContent && link?.href,
          'dgsuikit:text-gray-400': disabled,
        })}
      >
        {labelContent && (
          <label className="dgsuikit:px-0 dgsuikit:font-p2-medium dgsuikit:md:mx-0">
            {labelContent}
            {required && <span className="dgsuikit:ms-2 dgsuikit:text-error-500">*</span>}
          </label>
        )}
        {link?.href && (
          <a
            href={link.href}
            className="dgsuikit:font-button-small dgsuikit:text-primary-400"
          >
            {link.cnotent}
          </a>
        )}
      </div>
      {labelAddon}
    </>
  );
};

export default FieldLabel;
