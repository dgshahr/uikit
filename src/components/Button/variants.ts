import type { ButtonProps } from '.';

export const variantStyle: Record<
  Required<ButtonProps>['variant'],
  Record<Required<ButtonProps>['color'], string>
> = {
  primary: {
    primary:
      'dgs-ui-kit-bg-primary-500 active:dgs-ui-kit-bg-primary-600 hover:dgs-ui-kit-bg-primary-300 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    success:
      'dgs-ui-kit-bg-success-500 active:dgs-ui-kit-bg-success-600 hover:dgs-ui-kit-bg-success-300 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    error:
      'dgs-ui-kit-bg-error-500 active:dgs-ui-kit-bg-error-600 hover:dgs-ui-kit-bg-error-300 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    warning:
      'dgs-ui-kit-bg-warning-500 active:dgs-ui-kit-bg-warning-600 hover:dgs-ui-kit-bg-warning-300 dgs-ui-kit-text-gray-900 dgs-ui-kit-border-transparent',
    gray: 'dgs-ui-kit-bg-gray-500 active:dgs-ui-kit-bg-gray-600 hover:dgs-ui-kit-bg-gray-300 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
  },
  secondary: {
    primary:
      'dgs-ui-kit-text-primary-500 dgs-ui-kit-bg-gray-100 active:dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-50 disabled:dgs-ui-kit-bg-gray-100 dgs-ui-kit-border-transparent',
    success:
      'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-success-100 active:dgs-ui-kit-bg-success-200 hover:dgs-ui-kit-bg-success-50 disabled:dgs-ui-kit-bg-success-100 dgs-ui-kit-border-transparent',
    error:
      'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-error-100 active:dgs-ui-kit-bg-error-200 hover:dgs-ui-kit-bg-error-50 disabled:dgs-ui-kit-bg-error-100 dgs-ui-kit-border-transparent',
    warning:
      'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-warning-100 active:dgs-ui-kit-bg-warning-200 hover:dgs-ui-kit-bg-warning-50 disabled:dgs-ui-kit-bg-warning-100 dgs-ui-kit-border-transparent',
    gray: 'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-gray-100 active:dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-50 disabled:dgs-ui-kit-bg-gray-100 dgs-ui-kit-border-transparent',
  },
  outline: {
    primary:
      'dgs-ui-kit-text-primary-500 dgs-ui-kit-border-primary-300 hover:dgs-ui-kit-border-primary-200 active:dgs-ui-kit-border-primary-600 active:dgs-ui-kit-text-primary-600',
    success:
      'dgs-ui-kit-text-success-600 hover:dgs-ui-kit-text-success-400 dgs-ui-kit-border-success-500 hover:dgs-ui-kit-border-success-400 active:dgs-ui-kit-border-success-600 active:dgs-ui-kit-text-success-800',
    error:
      'dgs-ui-kit-text-error-600 hover:dgs-ui-kit-text-error-400 dgs-ui-kit-border-error-500 hover:dgs-ui-kit-border-error-400 active:dgs-ui-kit-border-error-600 active:dgs-ui-kit-text-error-800',
    warning:
      'dgs-ui-kit-text-warning-600 hover:dgs-ui-kit-text-warning-400 dgs-ui-kit-border-warning-500 hover:dgs-ui-kit-border-warning-400 active:dgs-ui-kit-border-warning-600 active:dgs-ui-kit-text-warning-800',
    gray: 'dgs-ui-kit-text-gray-600 hover:dgs-ui-kit-text-gray-400 dgs-ui-kit-border-gray-500 hover:dgs-ui-kit-border-gray-400 active:dgs-ui-kit-border-gray-600 active:dgs-ui-kit-text-gray-800',
  },
  text: {
    primary:
      'dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-text-primary-300 dgs-ui-kit-border-transparent active:dgs-ui-kit-text-primary-700',
    success:
      'dgs-ui-kit-text-success-700 hover:dgs-ui-kit-text-success-600 dgs-ui-kit-border-transparent active:dgs-ui-kit-text-success-800',
    error:
      'dgs-ui-kit-text-error-700 hover:dgs-ui-kit-text-error-600 dgs-ui-kit-border-transparent active:dgs-ui-kit-text-error-800',
    warning:
      'dgs-ui-kit-text-warning-700 hover:dgs-ui-kit-text-warning-600 dgs-ui-kit-border-transparent active:dgs-ui-kit-text-warning-800',
    gray: 'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 dgs-ui-kit-border-transparent active:dgs-ui-kit-text-gray-800',
  },
};

export const sizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon dgs-ui-kit-py-2.5 dgs-ui-kit-px-4 dgs-ui-kit-font-button-small',
  medium: 'button-medium-icon dgs-ui-kit-py-3 dgs-ui-kit-px-5 dgs-ui-kit-font-button-medium',
  large: 'button-large-icon dgs-ui-kit-py-3 dgs-ui-kit-px-6 dgs-ui-kit-font-button-large',
};

export const iconOnlyButtonSizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon dgs-ui-kit-p-[10px]',
  medium: 'button-medium-icon dgs-ui-kit-p-3',
  large: 'button-large-icon dgs-ui-kit-p-3',
};
