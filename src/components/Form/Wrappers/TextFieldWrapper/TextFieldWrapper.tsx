'use client';
import clsx from 'clsx';
import React, { type FC, type ReactNode } from 'react';
import FieldBottomInfo from '../../Common/FieldBottomInfo/FieldBottomInfo';

import '@/src/styles.css';
import FieldLabel from '../../Common/FieldLabel/FieldLabel';

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

interface TextFieldWrapperProps extends TextFieldBaseProps {
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  labelAddon?: React.ReactNode;
  value?: string | number | readonly string[];
  children: ReactNode;
}

const TextFieldWrapper: FC<TextFieldWrapperProps> = (props) => {
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
    value,
    wrapperClassName,
    showMaxLength,
    children,
  } = props;

  const showInfo = Boolean(errorMessage || hintMessage || (maxLength && showMaxLength));
  const showLabel = Boolean(labelContent || link?.href);
  const WrapperElement = showInfo || showLabel || wrapperClassName ? 'div' : React.Fragment;

  const handleFocusInputOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const divElement = e.currentTarget;
    const inputElement = divElement.querySelector('textarea, input') as
      | HTMLTextAreaElement
      | HTMLInputElement
      | null;
    if (inputElement) inputElement.focus();
  };

  return (
    <WrapperElement {...(wrapperClassName ? { className: wrapperClassName } : {})}>
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
          `dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-bg-white ${!disabled && 'hover:dgs-ui-kit-ring-gray-50'}`,
          isError || errorMessage
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : `dgs-ui-kit-border-transparent has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50 ${!disabled && 'hover:dgs-ui-kit-border-gray-300'}`,
          containerClassName,
          {
            'dgs-ui-kit-text-gray-400': disabled,
          },
        )}
      >
        {rightIcon && <div className="dgs-ui-kit-text-gray-600">{rightIcon}</div>}
        {children}
      </div>
      {showInfo && (
        <FieldBottomInfo
          disabled={disabled}
          errorMessage={errorMessage}
          hintMessage={hintMessage}
          maxLength={showMaxLength ? maxLength : undefined}
          value={value?.toString()}
        />
      )}
    </WrapperElement>
  );
};

export default TextFieldWrapper;
