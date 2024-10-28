import clsx from 'clsx';
import { type ForwardedRef, type InputHTMLAttributes, forwardRef, useState } from 'react';
import CloseSquareIcon from '@/src/icons/CloseSquare';
import EyeIcon from '@/src/icons/Eye';
import HideIcon from '@/src/icons/Hide';
import TextFieldWrapper from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'dir'>,
    TextFieldBaseProps {
  leftIcon?: JSX.Element;
  prefix?: string;
  postfix?: string;
  isClearOption?: boolean;
  onClear?: () => void;
}

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    dir = 'rtl',
    placeholderDir = dir,
    containerClassName,
    leftIcon,
    prefix,
    postfix,
    isClearOption,
    onClear,
    ...restProps
  } = props;

  const [type, setType] = useState(restProps.type);

  const handleFocusInput = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const divElement = e.currentTarget;
    const inputElement = divElement.querySelector('input') as HTMLInputElement | null;
    if (inputElement) inputElement.focus();
  };

  return (
    <TextFieldWrapper
      {...props}
      containerClassName={clsx('dgs-ui-kit-items-center', containerClassName)}
      onClick={handleFocusInput}
    >
      {({ handleChangeField, value, setValue }) => (
        <>
          {prefix && (
            <span className="dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500">{prefix}</span>
          )}
          <input
            {...restProps}
            ref={ref}
            className={clsx(
              'dgs-ui-kit-bg-transparent focus:dgs-ui-kit-outline-none dgs-ui-kit-flex-1',
              dir === 'rtl' ? 'dgs-ui-kit-text-right' : '!dgs-ui-kit-text-left',
              placeholderDir === 'rtl'
                ? 'placeholder:dgs-ui-kit-text-right'
                : 'placeholder:dgs-ui-kit-text-left',
              {
                ss02: restProps.type != 'password',
              },
              props.className,
            )}
            {...(dir === 'ltr' ? { style: { direction: 'ltr' } } : {})}
            value={value}
            onChange={handleChangeField}
            type={type}
          />
          {isClearOption && value && value.length > 0 && (
            <button
              onClick={() => {
                setValue('');
                if (typeof onClear === 'function') onClear();
              }}
            >
              <CloseSquareIcon
                className="dgs-ui-kit-text-gray-600"
                width={20}
                height={20}
              />
            </button>
          )}
          {postfix && (
            <span className="dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500">{postfix}</span>
          )}
          {leftIcon && <div className="dgs-ui-kit-text-gray-600">{leftIcon}</div>}
          {restProps.type === 'password' && (
            <button
              onClick={() => setType((prv) => (prv === 'text' ? 'password' : 'text'))}
              className="dgs-ui-kit-text-gray-600"
            >
              {type === 'password' ? (
                <EyeIcon
                  width={20}
                  height={20}
                />
              ) : (
                <HideIcon
                  width={20}
                  height={20}
                />
              )}
            </button>
          )}
        </>
      )}
    </TextFieldWrapper>
  );
});
export default Input;
