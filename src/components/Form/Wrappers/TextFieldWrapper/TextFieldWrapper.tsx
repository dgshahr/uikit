import clsx from 'clsx';
import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
} from 'react';
import FieldBottomInfo from './FieldBottomInfo';
import FieldLabel from './FieldLabel';

import '@/src/styles.css';

export interface TextFieldBaseProps {
  labelContent?: string;
  link?: {
    cnotent: string;
    href: string;
  };
  containerClassName?: string;
  rightIcon?: JSX.Element;
  dir?: 'rtl' | 'ltr';
  placeholderDir?: 'rtl' | 'ltr';
  isError?: boolean;
  errorMessage?: string;
  hintMessage?: string;
}

interface TextFieldFunctionArgumants<T> {
  handleChangeField: (e: ChangeEvent<T>) => void;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
}

interface TextFieldWrapperProps<T> extends TextFieldBaseProps {
  onChange?: ChangeEventHandler<T>;
  required?: boolean;
  maxLength?: number;
  value?: string | number | readonly string[];
  children: (argumants: TextFieldFunctionArgumants<T>) => React.JSX.Element;
}

const TextFieldWrapper = <T extends HTMLTextAreaElement | HTMLInputElement>(
  props: TextFieldWrapperProps<T>,
) => {
  const {
    labelContent,
    link,
    containerClassName,
    rightIcon,
    isError,
    errorMessage,
    hintMessage,
    required,
    maxLength,
    value: initialValue,
    onChange,
    children,
  } = props;

  const [value, setValue] = useState(initialValue?.toString());

  useEffect(() => {
    setValue(initialValue?.toString());
  }, [initialValue]);

  const handleChangeField = (e: ChangeEvent<T>) => {
    setValue(e.currentTarget.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <FieldLabel
        labelContent={labelContent}
        link={link}
        required={required}
      />
      <div
        className={clsx(
          'relative cursor-text border border-solid rounded-lg ring-4 flex justify-between gap-x-3 p-3 bg-gray-100 transition-all ring-transparent hover:ring-gray-50 has-[:focus]:bg-white',
          isError || errorMessage
            ? 'border-error-500 has-[:focus]:ring-error-50'
            : 'border-transparent hover:border-gray-300 has-[:focus]:border-primary-500 has-[:focus]:ring-primary-50',
          containerClassName,
        )}
      >
        {rightIcon && <div className="text-gray-600">{rightIcon}</div>}
        {children({ handleChangeField, setValue, value })}
      </div>
      <FieldBottomInfo
        errorMessage={errorMessage}
        hintMessage={hintMessage}
        maxLength={maxLength}
        value={value}
      />
    </>
  );
};

export default TextFieldWrapper;
