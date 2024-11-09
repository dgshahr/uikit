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
  labelAddon?: React.ReactNode;
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
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  labelAddon?: React.ReactNode;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<T>;
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
    labelAddon,
    maxLength,
    disabled,
    value: initialValue,
    wrapperClassName,
    showMaxLength,
    onChange,
    children,
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

  const handleFocusInputOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const divElement = e.currentTarget;
    const inputElement = divElement.querySelector('textarea, input') as
      | HTMLTextAreaElement
      | HTMLInputElement
      | null;
    if (inputElement) inputElement.focus();
  };

  return (
    <WrapperElement
      {...(WrapperElement === 'div' && wrapperClassName ? { className: wrapperClassName } : {})}
    >
      {showLabel && (
        <FieldLabel
          disabled={disabled}
          labelContent={labelContent}
          link={link}
          required={required}
        >
          {labelAddon}
        </FieldLabel>
      )}
      <div
        onClick={handleFocusInputOnClick}
        className={clsx(
          'dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent hover:dgs-ui-kit-ring-gray-50 has-[:focus]:dgs-ui-kit-bg-white ',
          isError || errorMessage
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : 'dgs-ui-kit-border-transparent hover:dgs-ui-kit-border-gray-300 has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50',
          containerClassName,
          {
            'dgs-ui-kit-text-gray-400': disabled,
          },
        )}
      >
        {rightIcon && <div className="dgs-ui-kit-text-gray-600">{rightIcon}</div>}
        {children({ handleChangeField, setValue, value })}
      </div>
      {showInfo && (
        <FieldBottomInfo
          disabled={disabled}
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
