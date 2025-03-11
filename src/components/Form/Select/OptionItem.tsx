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
        'dgs-ui-kit-w-full dgs-ui-kit-text-start dgs-ui-kit-px-3 disabled:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-py-3 dgs-ui-kit-font-p1-regular disabled:dgs-ui-kit-bg-gray-50 dgs-ui-kit-transition',
        isOptionActive()
          ? 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500'
          : 'dgs-ui-kit-text-gray-700 disabled:dgs-ui-kit-text-gray-400',
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
