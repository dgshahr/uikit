import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import '@/src/styles.css';

interface RadioCheckboxBaseProps {
  label?: string | ReactNode;
  isError?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  containerClassName?: string;
}

interface RadioCheckboxBordered extends RadioCheckboxBaseProps {
  variant: 'bordered';
  icon?: ReactNode;
}

interface RadioCheckboxDefault extends RadioCheckboxBaseProps {
  variant?: 'default';
  icon?: never;
}

export type RadioCheckboxBaseUnionProps = RadioCheckboxBordered | RadioCheckboxDefault;

type RadioCheckboxWrapperProps = RadioCheckboxBaseUnionProps & {
  children: (classNames: { inputClassName: string; checkedInputClassName: string }) => ReactNode;
};

const RadioCheckboxWrapper: FC<RadioCheckboxWrapperProps> = (props) => {
  const {
    children,
    containerClassName,
    errorMessage,
    helperMessage,
    isError,
    label,
    variant = 'default',
  } = props;

  const icon = (props as RadioCheckboxBordered).icon;
  const showError = isError || Boolean(errorMessage);

  return (
    <label
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-w-fit dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-group has-[:disabled]:dgs-ui-kit-opacity-40 has-[:disabled]:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-transition',
        {
          'dgs-ui-kit-p-3 dgs-ui-kit-border dgs-ui-kit-w-full dgs-ui-kit-border-solid dgs-ui-kit-rounded-xl dgs-ui-kit-bg-white has-[:checked]:dgs-ui-kit-bg-primary-50':
            variant === 'bordered',
          'has-[:checked]:dgs-ui-kit-border-primary-500 dgs-ui-kit-border-gray-200 hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-gray-100 has-[:focus]:ring has-[:focus]:dgs-ui-kit-ring-primary-300 has-[:focus]:dgs-ui-kit-ring-offset-1 has-[:focus]:dgs-ui-kit-ring-offset-white':
            variant === 'bordered' && !showError,
          'dgs-ui-kit-border-error-500 hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-error-50 has-[:focus]:ring has-[:focus]:dgs-ui-kit-ring-error-300 has-[:focus]:dgs-ui-kit-ring-offset-1 has-[:focus]:dgs-ui-kit-ring-offset-white':
            variant === 'bordered' && showError,
        },
        containerClassName,
      )}
    >
      <div
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-items-start dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse',
        )}
      >
        <div
          className={clsx(
            'dgs-ui-kit-relative dgs-ui-kit-h-[18px] dgs-ui-kit-w-[18px] dgs-ui-kit-shrink-0',
            {
              'dgs-ui-kit-mt-1': label,
            },
          )}
        >
          {children({
            inputClassName: clsx(
              'dgs-ui-kit-peer dgs-ui-kit-w-full dgs-ui-kit-h-full disabled:dgs-ui-kit-bg-gray-200 dgs-ui-kit-appearance-none dgs-ui-kit-border dgs-ui-kit-border-gray-300 group-hover:dgs-ui-kit-border-primary-500 checked:dgs-ui-kit-bg-primary-500 checked:dgs-ui-kit-border-transparent dgs-ui-kit-transition-all',
              {
                'group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-gray-100 focus:!dgs-ui-kit-ring focus:!dgs-ui-kit-ring-primary-300 focus:dgs-ui-kit-ring-offset-1 focus:dgs-ui-kit-ring-offset-white':
                  variant !== 'bordered' && !showError,
                '!dgs-ui-kit-border-error-500 group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-error-50 focus:!dgs-ui-kit-ring focus:!dgs-ui-kit-ring-error-300 focus:dgs-ui-kit-ring-offset-1 focus:dgs-ui-kit-ring-offset-white':
                  variant !== 'bordered' && showError,
              },
            ),
            checkedInputClassName:
              'dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-w-full dgs-ui-kit-h-full dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-text-white dgs-ui-kit-opacity-0 peer-checked:dgs-ui-kit-opacity-100 dgs-ui-kit-transition-opacity',
          })}
        </div>
        {Boolean(label) && (
          <div className="dgs-ui-kit-space-y-1">
            <div className="dgs-ui-kit-font-p2-medium dgs-ui-kit-text-gray-700 dgs-ui-kit-transition group-hover:dgs-ui-kit-text-primary-500">
              {label}
            </div>
            {Boolean(errorMessage || helperMessage) && (
              <div
                className={clsx(
                  'dgs-ui-kit-font-p3-regular',
                  errorMessage ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
                )}
              >
                {errorMessage || helperMessage}
              </div>
            )}
          </div>
        )}
      </div>
      {variant === 'bordered' && icon ? (
        <div className="dgs-ui-kit-text-gray-600 group-hover:dgs-ui-kit-text-primary-500 group-checked:dgs-ui-kit-text-primary-500">
          {icon}
        </div>
      ) : null}
    </label>
  );
};

export default RadioCheckboxWrapper;
