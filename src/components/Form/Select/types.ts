import type { ReactNode } from 'react';
import type { DrawerProps } from '../../Drawer';
import type { InputProps } from '../Input';

export type Option<T> = {
  value: T;
  label: string;
  disabled?: boolean;
};
type SelectPropsBase<T> = {
  options: Option<T>[];
  optionsContainer?: 'drawer' | 'popover';
  searchable?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  optionCell?: (option: Option<T>, isActive: boolean) => ReactNode;
  optionCellClassName?: string;
  className?: string;
  beforOptions?: ReactNode;
  afterOptions?: ReactNode;
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

type SelectWithCustomInput = {
  customInput?: (isShowOptions: boolean) => ReactNode;
  inputProps?: never;
};

type SelectWithoutCustomInput = {
  inputProps?: Omit<InputProps, 'leftIcon'>;
  customInput?: never;
};

type SelectWithDrawerContainer = {
  optionsContainer: 'drawer';
  drawerProps?: Omit<DrawerProps, 'children' | 'onClose' | 'open'>;
  popoverClassName?: never;
};

type SelectWithPopoverContainer = {
  optionsContainer?: 'popover';
  popoverClassName?: string;
  drawerProps?: never;
};

export type SelectProps<T> = SelectPropsBase<T> &
  (SelectWithSingleMode<T> | SelectWithMultipleMode<T>) &
  (SelectWithoutCustomInput | SelectWithCustomInput) &
  (SelectWithDrawerContainer | SelectWithPopoverContainer);
