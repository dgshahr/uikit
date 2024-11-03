import type { ButtonProps } from '.';

export const variantStyle: Record<
  Required<ButtonProps>['variant'],
  Record<Required<ButtonProps>['color'], string>
> = {
  primary: {
    primary:
      'dgs-ui-kit-bg-primary-500 active:dgs-ui-kit-bg-primary-600 hover:dgs-ui-kit-bg-primary-300 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    success:
      'dgs-ui-kit-bg-success-600 active:dgs-ui-kit-bg-success-700 hover:dgs-ui-kit-bg-success-500 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    error:
      'dgs-ui-kit-bg-error-500 active:dgs-ui-kit-bg-error-600 hover:dgs-ui-kit-bg-error-400 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
    warning:
      'dgs-ui-kit-bg-warning-500 active:dgs-ui-kit-bg-warning-600 hover:dgs-ui-kit-bg-warning-300 dgs-ui-kit-text-gray-900 dgs-ui-kit-border-transparent',
    gray: 'dgs-ui-kit-bg-gray-600 active:dgs-ui-kit-bg-gray-700 hover:dgs-ui-kit-bg-gray-500 dgs-ui-kit-text-white dgs-ui-kit-border-transparent',
  },
  secondary: {
    primary:
      'dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-text-primary-400 active:dgs-ui-kit-text-primary-700 dgs-ui-kit-bg-gray-100 active:dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-transparent',
    success:
      'dgs-ui-kit-text-success-600 hover:dgs-ui-kit-text-success-500 active:dgs-ui-kit-text-success-700 dgs-ui-kit-bg-success-50 active:dgs-ui-kit-bg-success-100 hover:dgs-ui-kit-bg-success-50 dgs-ui-kit-border-transparent',
    error:
      'dgs-ui-kit-text-error-500 hover:dgs-ui-kit-text-error-400 active:dgs-ui-kit-text-error-700 dgs-ui-kit-bg-error-50 active:dgs-ui-kit-bg-error-100 hover:dgs-ui-kit-bg-error-50 dgs-ui-kit-border-transparent',
    warning:
      'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-gray-600 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-warning-50 active:dgs-ui-kit-bg-warning-100 hover:dgs-ui-kit-bg-warning-50 dgs-ui-kit-border-transparent',
    gray: 'dgs-ui-kit-text-gray-600 hover:dgs-ui-kit-text-gray-500 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-gray-100 active:dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-100 dgs-ui-kit-border-transparent',
  },
  outline: {
    primary:
      'dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-text-primary-400 active:dgs-ui-kit-text-primary-700 dgs-ui-kit-border-primary-300 hover:dgs-ui-kit-border-primary-200 active:dgs-ui-kit-border-primary-600',
    success:
      'dgs-ui-kit-text-success-600 hover:dgs-ui-kit-text-success-500 active:dgs-ui-kit-text-success-700 dgs-ui-kit-border-success-500 hover:dgs-ui-kit-border-success-400 active:dgs-ui-kit-border-success-700 disabled:active:dgs-ui-kit-border-success-600',
    error:
      'dgs-ui-kit-text-error-500 hover:dgs-ui-kit-text-error-400 active:dgs-ui-kit-text-error-700 dgs-ui-kit-border-error-300 hover:dgs-ui-kit-border-error-200 active:dgs-ui-kit-border-error-600 disabled:dgs-ui-kit-border-error-500',
    warning:
      'dgs-ui-kit-text-warning-700 hover:dgs-ui-kit-text-warning-600 active:dgs-ui-kit-text-warning-800 dgs-ui-kit-border-warning-500 hover:dgs-ui-kit-border-warning-400 active:dgs-ui-kit-border-warning-600',
    gray: 'dgs-ui-kit-text-gray-600 hover:dgs-ui-kit-text-gray-500 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-border-gray-400 hover:dgs-ui-kit-border-gray-300 active:dgs-ui-kit-border-gray-700 disabled:dgs-ui-kit-border-gray-600',
  },
  text: {
    primary:
      'dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-text-primary-400 active:dgs-ui-kit-text-primary-700 dgs-ui-kit-border-transparent',
    success:
      'dgs-ui-kit-text-success-600 hover:dgs-ui-kit-text-success-500 active:dgs-ui-kit-text-success-700 dgs-ui-kit-border-transparent',
    error:
      'dgs-ui-kit-text-error-500 hover:dgs-ui-kit-text-error-400 active:dgs-ui-kit-text-error-700 dgs-ui-kit-border-transparent',
    warning:
      'dgs-ui-kit-text-warning-700 hover:dgs-ui-kit-text-warning-600 active:dgs-ui-kit-text-warning-800 dgs-ui-kit-border-transparent',
    gray: 'dgs-ui-kit-text-gray-600 hover:dgs-ui-kit-text-gray-500 active:dgs-ui-kit-text-gray-800 dgs-ui-kit-border-transparent',
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
