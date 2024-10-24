'use client';
import clsx from 'clsx';
import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type Dispatch,
  type ReactNode,
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
  wrapperClassName?: string;
  showMaxLength?: boolean;
}

interface TextFieldFunctionArgumants<T> {
  handleChangeField: (e: ChangeEvent<T>) => void;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string>>;
}

interface TextFieldWrapperProps<T> extends TextFieldBaseProps {
  onChange?: ChangeEventHandler<T>;
  required?: boolean;
  maxLength?: number;
  value?: string | number | readonly string[];
  children: (argumants: TextFieldFunctionArgumants<T>) => ReactNode;
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
    wrapperClassName,
    children,
    showMaxLength,
  } = props;

  const [value, setValue] = useState(initialValue?.toString() ?? '');

  useEffect(() => {
    if (typeof initialValue !== 'undefined' && initialValue !== null)
      setValue(initialValue?.toString());
  }, [initialValue]);

  const handleChangeField = (e: ChangeEvent<T>) => {
    setValue(e.currentTarget.value);
    if (onChange) {
      onChange(e);
    }
  };

  const showInfo = Boolean(errorMessage || hintMessage || (maxLength && showMaxLength));
  const showLabel = Boolean(labelContent || link?.href);
  const WrapperElement = showInfo || showLabel ? 'div' : React.Fragment;

  return (
    <WrapperElement
      {...(WrapperElement === 'div' && wrapperClassName ? { className: wrapperClassName } : {})}
    >
      {showLabel && (
        <FieldLabel
          labelContent={labelContent}
          link={link}
          required={required}
        />
      )}
      <div
        className={clsx(
          'dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent hover:dgs-ui-kit-ring-gray-50 has-[:focus]:dgs-ui-kit-bg-white',
          isError || errorMessage
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : 'dgs-ui-kit-border-transparent hover:dgs-ui-kit-border-gray-300 has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50',
          containerClassName,
        )}
      >
        {rightIcon && <div className="dgs-ui-kit-text-gray-600">{rightIcon}</div>}
        {children({ handleChangeField, setValue, value })}
      </div>
      {showInfo && (
        <FieldBottomInfo
          errorMessage={errorMessage}
          hintMessage={hintMessage}
          maxLength={showMaxLength ? maxLength : undefined}
          value={value}
        />
      )}
    </WrapperElement>
  );
};

export default TextFieldWrapper;
