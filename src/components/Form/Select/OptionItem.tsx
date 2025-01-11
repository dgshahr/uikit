import clsx from 'clsx';
import type { Option, SelectProps } from './types';
import Checkbox from '../Checkbox';

type OptionItemProps<T> = Partial<SelectProps<T>> & {
  onClick: () => void;
  option: Option<T>;
};

function renderDefaultOptionItem(label: string, isMultiple: boolean, isActive: boolean) {
  if (!isMultiple) return label;

  return (
    <Checkbox
      checked={isActive}
      label={label}
      readOnly
    />
  );
}

const OptionItem = <T,>(props: OptionItemProps<T>) => {
  const {
    option,
    onClick,
    value,
    searchable,
    beforOptions,
    mode,
    separateSelectedOptions,
    afterOptions,
    optionCellClassName,
    optionCell,
  } = props;

  function isOptionActive() {
    if (Array.isArray(value)) return value.includes(option.value);
    return option.value === value;
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        'dgs-ui-kit-w-full dgs-ui-kit-text-start dgs-ui-kit-px-3 dgs-ui-kit-border-t disabled:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-border-solid dgs-ui-kit-border-gray-100 dgs-ui-kit-py-3 dgs-ui-kit-font-p1-regular disabled:dgs-ui-kit-bg-gray-50 dgs-ui-kit-transition',
        isOptionActive()
          ? 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500'
          : 'dgs-ui-kit-text-gray-700 disabled:dgs-ui-kit-text-gray-400',
        ((!searchable && !beforOptions) || (mode === 'multiple' && separateSelectedOptions)) &&
          'first-of-type:dgs-ui-kit-border-t-0',
        Boolean(afterOptions) && 'last-of-type:dgs-ui-kit-border-b',
        optionCellClassName,
      )}
      disabled={option.disabled}
    >
      {optionCell
        ? optionCell(option)
        : renderDefaultOptionItem(option.label, mode === 'multiple', isOptionActive())}
    </button>
  );
};

export default OptionItem;
