import type { ReactNode } from 'react';
import type { InputProps } from '../Input';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export type Option<T> = {
  value: T;
  label: string;
  disabled?: boolean;
};
type SelectPropsBase<T> = {
  options: Option<T>[];
  optionsContainer?: 'drawer' | 'popover';
  searchable?: boolean | Omit<InputProps, 'onChange'>;
  optionCell?: (option: Option<T>, isActive: boolean) => ReactNode;
  optionCellClassName?: string;
  beforOptions?: ReactNode;
  afterOptions?: ReactNode;
  emptyContent?: ReactNode;
  showClearButtonOnEmpty?: boolean;
};

export type SelectWithSingleMode<T> = {
  mode?: 'single';
  value: T;
  onChange: (value: T) => void;
  optionsTitle?: never;
  separateSelectedOptions?: never;
};

export type SelectWithMultipleMode<T> = {
  mode: 'multiple';
  value: T[];
  onChange: (value: T[]) => void;
  optionsTitle?: string;
  separateSelectedOptions?: boolean;
};

export type SelectProps<T> = SelectPropsBase<T> &
  PickerWrapperProps &
  (SelectWithSingleMode<T> | SelectWithMultipleMode<T>);
