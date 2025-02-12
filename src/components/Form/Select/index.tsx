import clsx from 'clsx';
import Options from './Options';
import type { SelectProps } from './types';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

import '@/src/styles.css';

function findValue<T>(value: T | T[], options: SelectProps<T>['options']) {
  if (Array.isArray(value))
    return options
      .filter((option) => value.includes(option.value))
      .map((option) => option.label)
      .join(', ');

  return options.find((option) => option.value === value)?.label ?? '';
}

const Select = <T,>(props: SelectProps<T>) => {
  const { searchable = true, value, options } = props;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (wrapperProps.dropdownType === 'popover' && !searchable)
    wrapperProps.popoverClassName = clsx('dgs-ui-kit-pt-3', wrapperProps.popoverClassName);
  if (wrapperProps.dropdownType === 'drawer')
    wrapperProps.drawerProps = {
      ...wrapperProps.drawerProps,
      containerClassName: clsx(
        searchable ? '!dgs-ui-kit-pt-0' : '!dgs-ui-kit-pt-3',
        wrapperProps.drawerProps?.containerClassName,
      ),
    };
  if (!wrapperProps.customInput)
    wrapperProps.inputProps = { ...wrapperProps.inputProps, value: findValue(value, options) };

  return (
    <PickerWrapper {...(wrapperProps as PickerWrapperProps)}>
      <Options {...props} />
    </PickerWrapper>
  );
};

export default Select;
