import { useRef } from 'react';
import { editableIndices } from './constants';
import { nextEditableIndex } from './utils';

export const useCaret = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setCaretToEditable = (pos: number, forward = true) => {
    const input = inputRef.current;
    if (!input) return;
    const target = editableIndices.includes(pos) ? pos : nextEditableIndex(pos, forward);
    if (typeof target === 'number') {
      input.setSelectionRange(target, target + 1);
    }
  };

  return { inputRef, setCaretToEditable };
};
