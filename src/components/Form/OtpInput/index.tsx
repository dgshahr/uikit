'use client';
import clsx from 'clsx';
import { useEffect, useRef, type ChangeEvent, type FC, type KeyboardEvent } from 'react';
import { persianToEnglish } from '@/src/utils/convertNumbers';
import Input, { type InputProps } from '../Input';
import FieldBottomInfo from '../Wrappers/TextFieldWrapper/FieldBottomInfo';
import FieldLabel from '../Wrappers/TextFieldWrapper/FieldLabel';
import '@/src/styles.css';

export interface OtpInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  inputsNumber?: number;
  onChange: (value: string) => void;
  onEnd?: (value: string) => void;
  className?: string;
  inputsContainerClassName?: string;
  value: string;
}

const OtpInput: FC<OtpInputProps> = (props) => {
  const {
    inputsNumber = 4,
    onChange,
    onEnd,
    className,
    inputsContainerClassName,
    labelContent,
    hintMessage,
    errorMessage,
    isError,
    value,
    ...rest
  } = props;

  const canTriggerOnEnd = useRef(false);

  function focusOnInput(index: number) {
    const input = document.getElementById(`dgs-ui-kit-otp-input-${index}`) as HTMLInputElement;
    input?.focus();
  }

  function handleInputKeyUp(e: KeyboardEvent<HTMLInputElement>, index: number) {
    const key = [e.code, e.key];
    if (key.includes('Backspace') || key.includes('Delete')) {
      const newValues = value.split('');
      newValues[index] = '';
      if (index !== 0) {
        focusOnInput(index - 1);
      }
      onChange(newValues.join(''));
    } else if (key.includes('ArrowLeft')) {
      focusOnInput(index - 1);
    } else if (key.includes('ArrowRight')) {
      focusOnInput(index + 1);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const currentValue = persianToEnglish(e.currentTarget.value);
    const newValues = value.split('');

    if (currentValue.length > 1) {
      currentValue.split('').forEach((char, currentIndex) => {
        if (currentIndex < inputsNumber) {
          newValues[currentIndex] = char;
        }
      });
    } else {
      newValues[index] = currentValue;
    }

    onChange(newValues.join(''));

    if (index + 1 !== inputsNumber && currentValue) {
      focusOnInput(index + 1);
    }
  }

  useEffect(() => {
    if (value.length === inputsNumber && canTriggerOnEnd.current) {
      canTriggerOnEnd.current = false;
      if (typeof onEnd === 'function') {
        onEnd(value);
      }
    } else if (value.length < inputsNumber) {
      canTriggerOnEnd.current = true;
    }
  }, [value]);

  return (
    <div className={clsx('dgs-ui-kit-space-y-2', className)}>
      {labelContent ? <FieldLabel labelContent={labelContent} /> : null}
      <div
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 [direction:ltr]',
          inputsContainerClassName,
        )}
      >
        {Array.from(Array(inputsNumber).keys()).map((item, index) => (
          <Input
            key={item}
            containerClassName="dgs-ui-kit-w-12 dgs-ui-kit-h-12 dgs-ui-kit-p-0"
            className="dgs-ui-kit-w-full dgs-ui-kit-h-full !dgs-ui-kit-text-center placeholder:!dgs-ui-kit-text-center"
            placeholder="-"
            autoFocus={index === 0}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleInputKeyUp(e, index)}
            onFocus={(e) => e.currentTarget.select()}
            id={`dgs-ui-kit-otp-input-${index}`}
            value={value[index] || ''}
            showMaxLength={false}
            isError={Boolean(errorMessage) || isError}
            autoComplete="off"
            maxLength={1}
            onPaste={(e) => {
              const pastedText = e.clipboardData.getData('text');
              if (Number(pastedText)) onChange(pastedText);
            }}
            onInput={(e) => {
              const element = e.currentTarget;
              if (Number(element.value) && element.value.length > 1) return true;
              return false;
            }}
            {...rest}
          />
        ))}
      </div>
      {errorMessage || hintMessage ? (
        <FieldBottomInfo
          errorMessage={errorMessage}
          hintMessage={hintMessage}
        />
      ) : null}
    </div>
  );
};

export default OtpInput;
