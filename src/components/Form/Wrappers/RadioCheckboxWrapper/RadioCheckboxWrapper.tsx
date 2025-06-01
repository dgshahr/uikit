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
        'dgsuikit:flex dgsuikit:w-fit dgsuikit:justify-between dgsuikit:items-center dgsuikit:group dgsuikit:has-[:disabled]:opacity-40 dgsuikit:has-[:disabled]:cursor-not-allowed dgsuikit:transition',
        {
          'dgsuikit:p-3 dgsuikit:border dgsuikit:w-full dgsuikit:border-solid dgsuikit:rounded-xl dgsuikit:bg-white dgsuikit:has-[:checked]:bg-primary-50':
            variant === 'bordered',
          'dgsuikit:has-[:checked]:border-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:ring-4 dgsuikit:hover:ring-gray-100 has-[:focus]:ring dgsuikit:has-[:focus]:ring-primary-300 dgsuikit:has-[:focus]:ring-offset-1 dgsuikit:has-[:focus]:ring-offset-white':
            variant === 'bordered' && !showError,
          'dgsuikit:border-error-500 dgsuikit:hover:ring-4 dgsuikit:hover:ring-error-50 has-[:focus]:ring dgsuikit:has-[:focus]:ring-error-300 dgsuikit:has-[:focus]:ring-offset-1 dgsuikit:has-[:focus]:ring-offset-white':
            variant === 'bordered' && showError,
        },
        containerClassName,
      )}
    >
      <div className={clsx('dgsuikit:flex dgsuikit:items-start dgsuikit:space-x-2')}>
        <div
          className={clsx(
            'dgsuikit:relative dgsuikit:h-[18px] dgsuikit:w-[18px] dgsuikit:shrink-0',
            {
              'dgsuikit:mt-1': label,
            },
          )}
        >
          {children({
            inputClassName: clsx(
              'dgsuikit:peer dgsuikit:w-full dgsuikit:h-full dgsuikit:disabled:bg-gray-200 dgsuikit:appearance-none dgsuikit:border dgsuikit:border-gray-300 dgsuikit:group-hover:border-primary-500 dgsuikit:checked:bg-primary-500 dgsuikit:checked:border-transparent dgsuikit:transition-all',
              {
                'dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-gray-100 dgsuikit:focus:!ring dgsuikit:focus:!ring-primary-300 dgsuikit:focus:ring-offset-1 dgsuikit:focus:ring-offset-white':
                  variant !== 'bordered' && !showError,
                'dgsuikit:!border-error-500 dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-error-50 dgsuikit:focus:!ring dgsuikit:focus:!ring-error-300 dgsuikit:focus:ring-offset-1 dgsuikit:focus:ring-offset-white':
                  variant !== 'bordered' && showError,
              },
            ),
            checkedInputClassName:
              'dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:w-full dgsuikit:h-full dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:text-white dgsuikit:opacity-0 dgsuikit:peer-checked:opacity-100 dgsuikit:transition-opacity',
          })}
        </div>
        {Boolean(label) && (
          <div className="dgsuikit:space-y-1">
            <div className="dgsuikit:font-p2-medium dgsuikit:text-gray-700 dgsuikit:transition dgsuikit:group-hover:text-primary-500">
              {label}
            </div>
            {Boolean(errorMessage || helperMessage) && (
              <div
                className={clsx(
                  'dgsuikit:font-p3-regular',
                  errorMessage ? 'dgsuikit:text-error-500' : 'dgsuikit:text-gray-500',
                )}
              >
                {errorMessage || helperMessage}
              </div>
            )}
          </div>
        )}
      </div>
      {variant === 'bordered' && icon ? (
        <div className="dgsuikit:text-gray-600 dgsuikit:group-hover:text-primary-500 dgsuikit:group-checked:text-primary-500">
          {icon}
        </div>
      ) : null}
    </label>
  );
};

export default RadioCheckboxWrapper;
