import React, { useState, useEffect, type FC, type KeyboardEvent } from 'react';
import { editableIndices } from './constants';
import { useCaret } from './hooks/useCaret';
import type { TimeValue } from './types';
import { formatToMask, isValidDigit, maskToValue, nextEditableIndex } from './utils';
import Input, { type InputProps } from '../Input';

export interface ControlledTimeInputProps extends Omit<InputProps, 'onChange' | 'value'> {
  value: TimeValue;
  onChange: (value: TimeValue) => void;
}

const ControlledTimeInput: FC<ControlledTimeInputProps> = (props) => {
  const {
    value = { hour: null, minute: null },
    onChange,
    disabled = false,
    className,
    ...rest
  } = props;
  const { inputRef, setCaretToEditable } = useCaret();
  const [mask, setMask] = useState<string[]>(() => formatToMask(value));
  const lastExternalRef = React.useRef<TimeValue>(value);

  useEffect(() => {
    if (
      value.hour !== lastExternalRef.current.hour ||
      value.minute !== lastExternalRef.current.minute
    ) {
      lastExternalRef.current = value;
      setMask(formatToMask(value));
    }
  }, [value]);

  const handleFocus = (): void => {
    const input = inputRef.current;
    if (!input) return;
    const selectionStart = input.selectionStart ?? 0;
    if (!editableIndices.includes(selectionStart)) setCaretToEditable(selectionStart, true);
  };

  const handleArrowKeys = (key: string, selectionStart: number) => {
    const moveRight = key === 'ArrowRight';
    setCaretToEditable(nextEditableIndex(selectionStart, moveRight), moveRight);
  };

  const handleDeleteKeys = (key: string, selectionStart: number) => {
    const currantIndex = editableIndices.includes(selectionStart)
      ? selectionStart
      : nextEditableIndex(selectionStart, false);

    const newMask = [...mask];
    newMask[currantIndex] = '-';

    setMask(newMask);
    onChange(maskToValue(newMask));

    const nextPos =
      key === 'Backspace'
        ? nextEditableIndex(currantIndex, false)
        : nextEditableIndex(currantIndex, true);

    setTimeout(() => setCaretToEditable(nextPos, key !== 'Backspace'), 0);
  };

  const handleDigitInput = (key: string, selectionStart: number) => {
    const writePos = editableIndices.includes(selectionStart)
      ? selectionStart
      : nextEditableIndex(selectionStart, true);

    const newMask = [...mask];
    if (!isValidDigit(key, writePos, newMask)) return;

    newMask[writePos] = key;
    setMask(newMask);
    onChange(maskToValue(newMask));

    setTimeout(() => setCaretToEditable(nextEditableIndex(writePos, true), true), 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (disabled) return;

    const input = inputRef.current;
    if (!input) return;
    const selectionStart = input.selectionStart ?? 0;

    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
      handleArrowKeys(e.key, selectionStart);
      return;
    }

    if (['Backspace', 'Delete'].includes(e.key)) {
      handleDeleteKeys(e.key, selectionStart);
      return;
    }

    if (/^\d$/.test(e.key)) {
      handleDigitInput(e.key, selectionStart);
    }
  };

  return (
    <Input
      ref={inputRef}
      dir="ltr"
      className={className}
      value={mask.join('')}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      disabled={disabled}
      inputMode="numeric"
      pattern="[0-9:]*"
      {...rest}
    />
  );
};

export default ControlledTimeInput;
