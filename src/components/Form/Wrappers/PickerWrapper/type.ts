import type { ReactNode } from 'react';
import type { DrawerProps } from '@/src/components/Drawer';
import type { InputProps } from '../../Input';

export type PopperPosition =
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface PickerWrapperPropsBase {
  isLoading?: boolean;
  disabled?: boolean;
  wrapperClassName?: string;
}

interface PickerWrapperWithCustomInput {
  customInput?: (isOpen: boolean) => ReactNode;
  inputProps?: never;
}

interface PickerWrapperWithoutCustomInput {
  inputProps?: Omit<InputProps, 'leftIcon'>;
  customInput?: never;
}

interface PickerWrapperWithDrawerContainer {
  dropdownType: 'drawer';
  drawerProps?: Omit<DrawerProps, 'children' | 'onClose' | 'open'>;
  popoverClassName?: never;
  popoverPosition?: never;
}

interface PickerWrapperWithPopoverContainer {
  dropdownType?: 'popover';
  popoverClassName?: string;
  drawerProps?: never;
  popoverPosition?: PopperPosition;
}

export type PickerWrapperProps = PickerWrapperPropsBase &
  (PickerWrapperWithCustomInput | PickerWrapperWithoutCustomInput) &
  (PickerWrapperWithDrawerContainer | PickerWrapperWithPopoverContainer);
