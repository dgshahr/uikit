import clsx from 'clsx';
import type { PickerWrapperProps } from '../components/Form/Wrappers/PickerWrapper/type';

interface UsePickerWrapperOptions<T, V> {
  props: T;
  mode: string | undefined;
  standaloneMode: string;
  formatValue: (value: V) => string;
}

interface UsePickerWrapperReturn {
  Wrapper: 'div' | 'PickerWrapper';
  wrapperProps: PickerWrapperProps | { className?: string | undefined };
}

export function usePickerWrapper<T, V>({
  props,
  mode,
  standaloneMode,
  formatValue,
}: UsePickerWrapperOptions<T, V>): UsePickerWrapperReturn {
  const { value, wrapperClassName } = props as Record<string, unknown>;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = {
    ...(props as Record<string, unknown>),
  };

  if (mode !== standaloneMode) {
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
        value: wrapperProps.inputProps?.value ?? formatValue(value as V),
      };
    }
  }

  const Wrapper = mode === standaloneMode ? 'div' : 'PickerWrapper';
  const wrapperPropsToPass =
    mode !== standaloneMode
      ? (wrapperProps as PickerWrapperProps)
      : { className: wrapperClassName as string | undefined };

  return {
    Wrapper,
    wrapperProps: wrapperPropsToPass,
  };
}
