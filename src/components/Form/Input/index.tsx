import clsx from 'clsx';
import { type ForwardedRef, type InputHTMLAttributes, forwardRef, useState } from 'react';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import TextFieldWrapper from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import CloseSquareIcon from '@/src/icons/CloseSquare';
import EyeIcon from '@/src/icons/Eye';
import HideIcon from '@/src/icons/Hide';

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

  return (
    <TextFieldWrapper
      {...props}
      containerClassName={clsx('items-center', containerClassName)}
    >
      {({ handleChangeField, value, setValue }) => (
        <>
          {prefix && <span className="font-p1-regular text-gray-500">{prefix}</span>}
          <input
            {...restProps}
            ref={ref}
            className={clsx(
              'bg-transparent focus:outline-none flex-1',
              dir === 'rtl' ? 'text-right' : '!text-left',
              placeholderDir === 'rtl' ? 'placeholder:text-right' : 'placeholder:text-left',
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
                className="text-gray-600"
                width={20}
                height={20}
              />
            </button>
          )}
          {postfix && <span className="font-p1-regular text-gray-500">{postfix}</span>}
          {leftIcon && <div className="text-gray-600">{leftIcon}</div>}
          {restProps.type === 'password' && (
            <button
              onClick={() => setType((prv) => (prv === 'text' ? 'password' : 'text'))}
              className="text-gray-600"
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
