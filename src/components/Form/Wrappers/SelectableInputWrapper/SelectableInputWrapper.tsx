import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import '@/src/styles.css';

interface SelectableInputBaseProps {
  label?: string | ReactNode;
  isError?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  containerClassName?: string;
}

interface SelectableInputBordered extends SelectableInputBaseProps {
  variant: 'bordered';
  icon?: ReactNode;
}

interface SelectableInputDefault extends SelectableInputBaseProps {
  variant?: 'default';
  icon?: never;
}

export type SelectableInputBaseUnionProps = SelectableInputBordered | SelectableInputDefault;

type SelectableInputWrapperProps = SelectableInputBaseUnionProps & {
  children: (classNames: { inputClassName: string; checkedInputClassName: string }) => ReactNode;
};

const SelectableInputWrapper: FC<SelectableInputWrapperProps> = (props) => {
  const {
    children,
    containerClassName,
    errorMessage,
    helperMessage,
    isError,
    label,
    variant = 'default',
  } = props;

  const icon = (props as SelectableInputBordered).icon;

  return (
    <label
      className={clsx(
        'flex w-fit justify-between items-center group has-[:disabled]:opacity-40 has-[:disabled]:cursor-not-allowed transition',
        {
          'p-3 border w-full border-solid rounded-xl bg-white has-[:checked]:bg-primary-50':
            variant === 'bordered',
          'has-[:checked]:border-primary-500 border-gray-200 hover:ring-4 hover:ring-gray-100 has-[:focus]:ring has-[:focus]:ring-primary-300 has-[:focus]:ring-offset-1 has-[:focus]:ring-offset-white':
            variant === 'bordered' && !isError,
          'border-error-500 hover:ring-4 hover:ring-error-50 has-[:focus]:ring has-[:focus]:ring-error-300 has-[:focus]:ring-offset-1 has-[:focus]:ring-offset-white':
            variant === 'bordered' && isError,
        },
        containerClassName,
      )}
    >
      <div
        className={clsx(
          'flex space-x-2 space-x-reverse',
          (errorMessage ?? helperMessage) ? 'items-start' : 'items-center',
        )}
      >
        <div className={clsx('relative h-[18px] w-[18px]', { 'mt-1': label })}>
          {children({
            inputClassName: clsx(
              'peer w-full h-full disabled:bg-gray-200 appearance-none border border-gray-300 group-hover:border-primary-500 checked:bg-primary-500 checked:border-transparent transition-all',
              {
                'group-hover:ring-4 group-hover:ring-gray-100 focus:!ring focus:!ring-primary-300 focus:ring-offset-1 focus:ring-offset-white':
                  variant !== 'bordered' && !isError,
                '!border-error-500 group-hover:ring-4 group-hover:ring-error-50 focus:!ring focus:!ring-error-300 focus:ring-offset-1 focus:ring-offset-white':
                  variant !== 'bordered' && isError,
              },
            ),
            checkedInputClassName:
              'absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity',
          })}
        </div>
        {Boolean(label) && (
          <div className="space-y-1">
            <div className="font-p2-medium text-gray-700 transition group-hover:text-primary-500">
              {label}
            </div>
            {Boolean(errorMessage ?? helperMessage) && (
              <div
                className={clsx(
                  'font-p3-regular',
                  errorMessage && isError ? 'text-error-500' : 'text-gray-500',
                )}
              >
                {isError && errorMessage ? errorMessage : helperMessage}
              </div>
            )}
          </div>
        )}
      </div>
      {variant === 'bordered' && icon ? (
        <div className="text-gray-600 group-hover:text-primary-500 group-checked:text-primary-500">
          {icon}
        </div>
      ) : null}
    </label>
  );
};

export default SelectableInputWrapper;
