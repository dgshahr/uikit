import clsx from 'clsx';
import { memo } from 'react';
import type { Option, SelectProps } from './types';
import Checkbox from '../Checkbox';

type OptionItemProps<T> = Partial<SelectProps<T>> & {
  onClick: () => void;
  option: Option<T>;
};

function renderDefaultOptionItem({
  label,
  isMultiple,
  isActive,
  disabled,
}: {
  label: string;
  isMultiple: boolean;
  isActive: boolean;
  disabled: boolean;
}) {
  if (!isMultiple) return label;

  return (
    <Checkbox
      checked={isActive}
      label={label}
      readOnly
      disabled={disabled}
    />
  );
}

const OptionItem = <T,>(props: OptionItemProps<T>) => {
  const { option, onClick, value, mode, optionCellClassName, optionCell } = props;

  function isOptionActive() {
    if (Array.isArray(value)) return value.includes(option.value);
    return option.value === value;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'dgsuikit:w-full dgsuikit:text-start dgsuikit:px-3 dgsuikit:disabled:cursor-not-allowed dgsuikit:py-3 dgsuikit:font-p1-regular dgsuikit:disabled:bg-gray-50 dgsuikit:transition',
        isOptionActive()
          ? 'dgsuikit:bg-primary-50 dgsuikit:text-primary-500'
          : 'dgsuikit:text-gray-700 dgsuikit:disabled:text-gray-400',
        optionCellClassName,
      )}
      disabled={option.disabled}
    >
      {optionCell
        ? optionCell(option, isOptionActive())
        : renderDefaultOptionItem({
            label: option.label,
            isMultiple: mode === 'multiple',
            isActive: isOptionActive(),
            disabled: option.disabled ?? false,
          })}
    </button>
  );
};

export default memo(OptionItem) as typeof OptionItem;
