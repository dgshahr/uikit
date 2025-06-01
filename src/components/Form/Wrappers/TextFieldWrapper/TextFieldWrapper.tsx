'use client';
import clsx from 'clsx';
import React, { type FC, type JSX, type ReactNode } from 'react';
import FieldBottomInfo, {
  type FieldBottomInfoProps,
} from '../../Common/FieldBottomInfo/FieldBottomInfo';
import FieldLabel, { type FieldLabelProps } from '../../Common/FieldLabel/FieldLabel';

import '@/src/styles.css';

export interface TextFieldBaseProps
  extends FieldLabelProps,
    Omit<FieldBottomInfoProps, 'extraHelper'> {
  containerClassName?: string;
  rightIcon?: JSX.Element;
  dir?: 'rtl' | 'ltr';
  placeholderDir?: 'rtl' | 'ltr';
  isError?: boolean;
  wrapperClassName?: string;
  showMaxLength?: boolean;
}

interface TextFieldWrapperProps extends TextFieldBaseProps {
  maxLength?: number;
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
          labelAddon={labelAddon}
        />
      )}
      <div
        onClick={handleFocusInputOnClick}
        className={clsx(
          `dgsuikit:relative dgsuikit:cursor-text dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-lg dgsuikit:ring-4 dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-x-3 dgsuikit:p-3 dgsuikit:bg-gray-100 dgsuikit:transition-all dgsuikit:ring-transparent dgsuikit:has-[:focus]:bg-white ${!disabled && 'dgsuikit:hover:ring-gray-50'}`,
          isError || errorMessage
            ? 'dgsuikit:border-error-500 dgsuikit:has-[:focus]:ring-error-50'
            : `dgsuikit:border-transparent dgsuikit:has-[:focus]:border-primary-500 dgsuikit:has-[:focus]:ring-primary-50 ${!disabled && 'dgsuikit:hover:border-gray-300'}`,
          containerClassName,
          {
            'dgsuikit:text-gray-400': disabled,
          },
        )}
      >
        {rightIcon && <div className="dgsuikit:text-gray-600">{rightIcon}</div>}
        {children}
      </div>
      {showInfo && (
        <FieldBottomInfo
          disabled={disabled}
          errorMessage={errorMessage}
          hintMessage={hintMessage}
          extraHelper={
            maxLength && (
              <span className="ss02">
                {value?.toString()?.length ?? 0}/{maxLength}
              </span>
            )
          }
        />
      )}
    </WrapperElement>
  );
};

export default TextFieldWrapper;
