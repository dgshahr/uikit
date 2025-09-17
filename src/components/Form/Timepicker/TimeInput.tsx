import React, {
  useState,
  useEffect,
  type FC,
  type KeyboardEvent,
  type ClipboardEvent,
} from 'react';
import { useCaret } from './useCaret';
import {
  type TimeValue,
  editableIndices,
  formatToMask,
  maskToValue,
  nextEditableIndex,
} from './utils';
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
    className = '',
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
    const selStart = input.selectionStart ?? 0;
    if (!editableIndices.includes(selStart)) setCaretToEditable(selStart, true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (disabled) return;
    const input = inputRef.current;
    if (!input) return;
    const selStart = input.selectionStart ?? 0;

    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      setCaretToEditable(
        e.key === 'ArrowLeft'
          ? nextEditableIndex(selStart, false)
          : nextEditableIndex(selStart, true),
        e.key === 'ArrowRight',
      );
      return;
    }

    if (['Backspace', 'Delete'].includes(e.key)) {
      e.preventDefault();
      const curIndex = editableIndices.includes(selStart)
        ? selStart
        : nextEditableIndex(selStart, false);
      const newMask = [...mask];
      newMask[curIndex] = '-';
      setMask(newMask);
      onChange?.(maskToValue(newMask));
      const nextPos =
        e.key === 'Backspace'
          ? nextEditableIndex(curIndex, false)
          : nextEditableIndex(curIndex, true);
      window.setTimeout(() => setCaretToEditable(nextPos, e.key !== 'Backspace'), 0);
      return;
    }

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const writePos = editableIndices.includes(selStart)
      ? selStart
      : nextEditableIndex(selStart, true);
    const newMask = [...mask];
    newMask[writePos] = e.key;

    if (writePos === 0 && !/[0-2]/.test(e.key)) return;
    if (writePos === 1) {
      const h0 = newMask[0] === '-' ? '0' : newMask[0];
      if (Number(`${h0}${newMask[1]}`) > 23) return;
    }
    if (writePos === 3 && !/[0-5]/.test(e.key)) return;

    setMask(newMask);
    onChange?.(maskToValue(newMask));
    window.setTimeout(() => setCaretToEditable(nextEditableIndex(writePos, true), true), 0);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
    if (disabled) return;
    e.preventDefault();
    const txt = e.clipboardData.getData('text').trim();
    const m = /^([0-2]?\d)[:.]?([0-5]?\d)$/.exec(txt);
    if (!m) return;
    const hh = (m[1] ?? '').padStart(2, '0');
    const mm = (m[2] ?? '').padStart(2, '0');
    if (hh.length !== 2 || mm.length !== 2) return;
    const newMask: string[] = [hh.charAt(0), hh.charAt(1), ':', mm.charAt(0), mm.charAt(1)];
    setMask(newMask);
    onChange?.(maskToValue(newMask));
    const lastEditableIndex = editableIndices[editableIndices.length - 1];
    if (typeof lastEditableIndex === 'number') {
      window.setTimeout(() => setCaretToEditable(lastEditableIndex, false), 0);
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
      onPaste={handlePaste}
      disabled={disabled}
      inputMode="numeric"
      pattern="[0-9:]*"
      {...rest}
    />
  );
};

export default ControlledTimeInput;
