import clsx from 'clsx';
import IconCloseSquare from '@/src/icons/IconCloseSquare';
import Options from './Options';
import type { SelectProps, SelectWithMultipleMode } from './types';
import Chip from '../../Chip';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

import '@/src/styles.css';

function findValue<T>(value: T | T[], options: SelectProps<T>['options']) {
  if (Array.isArray(value)) return;

  return options.find((option) => option.value === value)?.label ?? '';
}

const Select = <T,>(props: SelectProps<T>) => {
  const { searchable = true, value, options } = props;
  const hasMultipleValues = Array.isArray(value) && value.length > 0;

  function getInputPrefix() {
    if (props.inputProps?.prefix) return props.inputProps.prefix;
    else if (hasMultipleValues)
      return value.map((valueItem) => (
        <Chip
          key={valueItem as string}
          label={options.find((option) => option.value === valueItem)?.label}
          clickable
          leftIcon={<IconCloseSquare />}
          onClick={(e) => {
            e.stopPropagation();
            const newValue = value.filter((item) => item !== valueItem);
            (props.onChange as SelectWithMultipleMode<T>['onChange'])?.(newValue);
          }}
        />
      ));
    return null;
  }

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (wrapperProps.dropdownType === 'popover' && !searchable)
    wrapperProps.popoverClassName = clsx('dgsuikit:pt-3', wrapperProps.popoverClassName);
  if (wrapperProps.dropdownType === 'drawer')
    wrapperProps.drawerProps = {
      ...wrapperProps.drawerProps,
      containerClassName: clsx(
        searchable ? 'dgsuikit:!pt-0' : 'dgsuikit:!pt-3',
        wrapperProps.drawerProps?.containerClassName,
      ),
    };
  if (!wrapperProps.customInput)
    wrapperProps.inputProps = {
      ...wrapperProps.inputProps,
      value: findValue(value, options),
      prefix: getInputPrefix(),
      prefixClassName: hasMultipleValues
        ? clsx(
            'dgsuikit:flex dgsuikit:items-center flex dgsuikit:flex-wrap dgsuikit:gap-2 dgsuikit:w-full',
            wrapperProps.inputProps?.prefixClassName,
          )
        : wrapperProps.inputProps?.prefixClassName,
      className: hasMultipleValues ? 'dgsuikit:hidden' : wrapperProps.inputProps?.className,
      containerClassName: hasMultipleValues
        ? clsx('dgsuikit:items-baseline', wrapperProps.inputProps?.containerClassName)
        : wrapperProps.inputProps?.containerClassName,
    };

  return (
    <PickerWrapper {...(wrapperProps as PickerWrapperProps)}>
      <Options {...props} />
    </PickerWrapper>
  );
};

export default Select;
