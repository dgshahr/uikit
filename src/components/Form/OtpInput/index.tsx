'use client';
import clsx from 'clsx';
import { useEffect, useState, type ChangeEvent, type FC, type KeyboardEvent } from 'react';
import Input from '../Input';
import FieldBottomInfo from '../Wrappers/TextFieldWrapper/FieldBottomInfo';
import FieldLabel from '../Wrappers/TextFieldWrapper/FieldLabel';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import '@/src/styles.css';

interface OtpInputProps
  extends Pick<TextFieldBaseProps, 'labelContent' | 'errorMessage' | 'isError' | 'hintMessage'> {
  inputsNumber?: number;
  onChange?: (value: string) => void;
  onEnd?: (value: string) => void;
  className?: string;
  inputsContainerClassName?: string;
  value?: string;
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
    value: propsValue,
  } = props;
  const [values, setValues] = useState<string[]>([]);

  function focusOnInput(index: number) {
    const input = document.getElementById(`dgs-ui-kit-otp-input-${index}`) as HTMLInputElement;
    input?.focus();
    input?.select();
  }

  function handleInputKeyUp(e: KeyboardEvent<HTMLInputElement>, index: number) {
    const key = [e.code, e.key];
    if (key.includes('Backspace') || key.includes('Delete')) {
      const newValues = [...values];
      newValues[index] = '';
      if (index !== 0) {
        newValues[index - 1] = '';
        focusOnInput(index - 1);
      }
      setValues(newValues);
    } else if (key.includes('ArrowLeft')) focusOnInput(index + 1);
    else if (key.includes('ArrowRight')) focusOnInput(index - 1);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const currentValue = e.currentTarget.value;
    const newValues = [...values];
    newValues[index] = currentValue;

    if (index + 1 !== inputsNumber && currentValue) focusOnInput(index + 1);

    setValues(newValues);

    if (typeof onChange === 'function') onChange(newValues.join(''));
  }

  useEffect(() => {
    if (propsValue) {
      const initialValue = propsValue.split('');
      setValues(initialValue);
      const didFillTheWholeInput = inputsNumber === propsValue.length;
      if (didFillTheWholeInput && typeof onEnd === 'function') onEnd(propsValue);
    }
  }, [propsValue]);

  return (
    <div className={clsx('dgs-ui-kit-space-y-2', className)}>
      {labelContent ? <FieldLabel labelContent={labelContent} /> : null}
      <div
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
          inputsContainerClassName,
        )}
      >
        {Array.from(Array(inputsNumber).keys()).map((item, index) => (
          <Input
            key={item}
            containerClassName="dgs-ui-kit-w-12 dgs-ui-kit-h-12 dgs-ui-kit-p-0"
            className="dgs-ui-kit-w-full dgs-ui-kit-h-full !dgs-ui-kit-text-center placeholder:!dgs-ui-kit-text-center"
            placeholder="-"
            type="tel"
            autoFocus={index === 0}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleInputKeyUp(e, index)}
            id={`dgs-ui-kit-otp-input-${index}`}
            maxLength={1}
            value={values[index]}
            showMaxLength={false}
            isError={Boolean(errorMessage) || isError}
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
