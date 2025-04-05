import clsx from 'clsx';
import { type ForwardedRef, type InputHTMLAttributes, type JSX, forwardRef, useState } from 'react';
import IconCloseSquare from '@/src/icons/IconCloseSquare';
import IconEye from '@/src/icons/IconEye';
import IconHide from '@/src/icons/IconHide';
import omitObject from '@/src/utils/omitObjects';
import TextFieldWrapper from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'dir'>,
    TextFieldBaseProps {
  leftIcon?: JSX.Element;
  prefix?: string;
  postfix?: string;
  onClear?: () => void;
  // return true in onInput to stop rest of the function from execution
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void | boolean;
}

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    dir = 'rtl',
    placeholderDir = dir,
    containerClassName,
    leftIcon,
    prefix,
    postfix,
    onClear,
    value,
    ...restProps
  } = props;
  const inputProps = omitObject(restProps, [
    'labelAddon',
    'labelContent',
    'link',
    'rightIcon',
    'isError',
    'errorMessage',
    'hintMessage',
    'wrapperClassName',
    'showMaxLength',
  ]);

  const [type, setType] = useState(restProps.type);

  function renderClearButton() {
    return (
      <button
        onClick={() => {
          if (typeof onClear === 'function') onClear();
        }}
      >
        <IconCloseSquare
          className="dgs-ui-kit-text-gray-600"
          width={20}
          height={20}
        />
      </button>
    );
  }

  return (
    <TextFieldWrapper
      {...props}
      containerClassName={clsx('dgs-ui-kit-items-center', containerClassName)}
      value={value}
    >
      {prefix && (
        <span className="dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500">{prefix}</span>
      )}
      {typeof onClear === 'function' && value && dir === 'ltr' && renderClearButton()}
      <input
        {...inputProps}
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
        type={type}
        onInput={(e) => {
          if (typeof restProps.onInput === 'function') {
            const stopExecution = restProps.onInput(e);
            if (stopExecution) return;
          }
          if (type !== 'number') return;
          const element = e.currentTarget;
          if (element.value.length > element.maxLength)
            element.value = element.value.slice(0, element.maxLength);
        }}
      />
      {typeof onClear === 'function' && value && dir === 'rtl' && renderClearButton()}
      {postfix && (
        <span className="dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500">{postfix}</span>
      )}
      {leftIcon && <div className="dgs-ui-kit-text-gray-600">{leftIcon}</div>}
      {restProps.type === 'password' && (
        <button
          type="button"
          onClick={() => setType((prv) => (prv === 'text' ? 'password' : 'text'))}
          className="dgs-ui-kit-text-gray-600"
        >
          {type === 'password' ? (
            <IconEye
              width={20}
              height={20}
            />
          ) : (
            <IconHide
              width={20}
              height={20}
            />
          )}
        </button>
      )}
    </TextFieldWrapper>
  );
});
export default Input;
