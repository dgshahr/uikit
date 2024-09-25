import type { ButtonProps } from '.';

export const variantStyle: Record<
  Required<ButtonProps>['variant'],
  Record<Required<ButtonProps>['color'], string>
> = {
  primary: {
    primary:
      'bg-primary-500 active:bg-primary-600 hover:bg-primary-300 text-white border-transparent',
    success:
      'bg-success-500 active:bg-success-600 hover:bg-success-300 text-white border-transparent',
    error: 'bg-error-500 active:bg-error-600 hover:bg-error-300 text-white border-transparent',
    warning:
      'bg-warning-500 active:bg-warning-600 hover:bg-warning-300 text-gray-900 border-transparent',
    gray: 'bg-gray-500 active:bg-gray-600 hover:bg-gray-300 text-white border-transparent',
  },
  secondary: {
    primary:
      'text-primary-500 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 disabled:bg-gray-100 border-transparent',
    success:
      'text-gray-700 hover:text-gray-600 active:text-gray-800 bg-success-100 active:bg-success-200 hover:bg-success-50 disabled:bg-success-100 border-transparent',
    error:
      'text-gray-700 hover:text-gray-600 active:text-gray-800 bg-error-100 active:bg-error-200 hover:bg-error-50 disabled:bg-error-100 border-transparent',
    warning:
      'text-gray-700 hover:text-gray-600 active:text-gray-800 bg-warning-100 active:bg-warning-200 hover:bg-warning-50 disabled:bg-warning-100 border-transparent',
    gray: 'text-gray-700 hover:text-gray-600 active:text-gray-800 bg-gray-100 active:bg-gray-200 hover:bg-gray-50 disabled:bg-gray-100 border-transparent',
  },
  outline: {
    primary:
      'text-primary-500 border-primary-300 hover:border-primary-200 active:border-primary-600 active:text-primary-600',
    success:
      'text-success-600 hover:text-success-400 border-success-500 hover:border-success-400 active:border-success-600 active:text-success-800',
    error:
      'text-error-600 hover:text-error-400 border-error-500 hover:border-error-400 active:border-error-600 active:text-error-800',
    warning:
      'text-warning-600 hover:text-warning-400 border-warning-500 hover:border-warning-400 active:border-warning-600 active:text-warning-800',
    gray: 'text-gray-600 hover:text-gray-400 border-gray-500 hover:border-gray-400 active:border-gray-600 active:text-gray-800',
  },
  text: {
    primary: 'text-primary-500 hover:text-primary-300 border-transparent active:text-primary-700',
    success: 'text-success-700 hover:text-success-600 border-transparent active:text-success-800',
    error: 'text-error-700 hover:text-error-600 border-transparent active:text-error-800',
    warning: 'text-warning-700 hover:text-warning-600 border-transparent active:text-warning-800',
    gray: 'text-gray-700 hover:text-gray-600 border-transparent active:text-gray-800',
  },
};

export const sizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon py-2.5 px-4 font-button-small',
  medium: 'button-medium-icon py-3 px-5 font-button-medium',
  large: 'button-large-icon py-3 px-6 font-button-large',
};

export const iconOnlyButtonSizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon p-[10px]',
  medium: 'button-medium-icon p-3',
  large: 'button-large-icon p-3',
};
