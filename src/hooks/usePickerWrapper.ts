import clsx from 'clsx';
import type { ElementType } from 'react';
import type { DatepickerProps } from '../components/Form/Datepicker/types';
import type { TimepickerProps } from '../components/Form/Timepicker/types';
import PickerWrapper from '../components/Form/Wrappers/PickerWrapper/PickerWrapper';
import type { PickerWrapperProps } from '../components/Form/Wrappers/PickerWrapper/type';

export type WithValue = { value?: unknown };

interface UsePickerWrapperOptions {
  props: TimepickerProps | DatepickerProps;
  standaloneMode: string;
  formatValue: (value: (TimepickerProps | DatepickerProps)['value']) => string;
}

interface UsePickerWrapperReturn {
  Wrapper: ElementType;
  wrapperProps: PickerWrapperProps | { className?: string };
}

export function usePickerWrapper({
  props,
  standaloneMode,
  formatValue,
}: UsePickerWrapperOptions): UsePickerWrapperReturn {
  const { value, wrapperClassName } = props;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = {
    ...props,
  };

  if (props?.mode !== standaloneMode) {
    if (wrapperProps.dropdownType === 'drawer') {
      wrapperProps.drawerProps = {
        ...wrapperProps.drawerProps,
        containerClassName: clsx('dgsuikit:!p-0', wrapperProps.drawerProps?.containerClassName),
      };
    } else {
      wrapperProps.popoverClassName = clsx(
        'dgsuikit:!p-0 dgsuikit:max-h-max',
        wrapperProps.popoverClassName,
      );
    }

    if (!wrapperProps.customInput) {
      wrapperProps.inputProps = {
        ...wrapperProps.inputProps,
        value: wrapperProps.inputProps?.value ?? formatValue(value),
      };
    }
  }

  const Wrapper = props?.mode === standaloneMode ? 'div' : PickerWrapper;
  const wrapperPropsToPass =
    props?.mode !== standaloneMode
      ? (wrapperProps as PickerWrapperProps)
      : { className: wrapperClassName };

  return {
    Wrapper,
    wrapperProps: wrapperPropsToPass,
  };
}
