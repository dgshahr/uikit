'use client';
import clsx from 'clsx';
import { useEffect, useRef, type ChangeEvent, type FC, type KeyboardEvent } from 'react';
import { persianToEnglish } from '@/src/utils/convertNumbers';
import { isBrowser } from '@/src/utils/isBrowser';
import FieldBottomInfo from '../Common/FieldBottomInfo/FieldBottomInfo';
import FieldLabel from '../Common/FieldLabel/FieldLabel';
import Input, { type InputProps } from '../Input';
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
    if (!isBrowser()) return;
    const input = document?.getElementById(`dgsuikit:otp-input-${index}`) as HTMLInputElement;
    input?.focus();
  }

  function handleInputKeyUp(e: KeyboardEvent<HTMLInputElement>, index: number) {
    const key = [e.code, e.key];

    // Move forward if current input and key have the same value
    // because it doesn't tregger onChange in this situation
    if (value[index] && key.includes(value[index])) {
      focusOnInput(index + 1);
      return;
    }

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
    <div className={clsx('dgsuikit:space-y-2', className)}>
      {labelContent ? <FieldLabel labelContent={labelContent} /> : null}
      <div
        className={clsx(
          'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:[direction:ltr]',
          inputsContainerClassName,
        )}
      >
        {Array.from(Array(inputsNumber).keys()).map((item, index) => (
          <Input
            key={item}
            containerClassName="dgsuikit:w-12 dgsuikit:h-12 dgsuikit:p-0"
            className="dgsuikit:w-full dgsuikit:h-full dgsuikit:!text-center dgsuikit:placeholder:!text-center"
            placeholder="-"
            autoFocus={index === 0}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleInputKeyUp(e, index)}
            onFocus={(e) => e.currentTarget.select()}
            id={`dgsuikit:otp-input-${index}`}
            value={value[index] || ''}
            showMaxLength={false}
            isError={Boolean(errorMessage) || isError}
            autoComplete="off"
            //remove maxLength for first input at first (because of chrome autofill)
            maxLength={index === 0 && !Number(value.split('')[0]) ? inputsNumber : 1}
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
