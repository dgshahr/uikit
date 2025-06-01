import type { ButtonProps } from '.';

export const variantStyle: Record<
  Required<ButtonProps>['variant'],
  Record<Required<ButtonProps>['color'], string>
> = {
  primary: {
    primary:
      'dgsuikit:bg-primary-500 dgsuikit:active:bg-primary-600 dgsuikit:hover:bg-primary-300 dgsuikit:text-white dgsuikit:border-transparent',
    success:
      'dgsuikit:bg-success-600 dgsuikit:active:bg-success-700 dgsuikit:hover:bg-success-500 dgsuikit:text-white dgsuikit:border-transparent',
    error:
      'dgsuikit:bg-error-500 dgsuikit:active:bg-error-600 dgsuikit:hover:bg-error-400 dgsuikit:text-white dgsuikit:border-transparent',
    warning:
      'dgsuikit:bg-warning-500 dgsuikit:active:bg-warning-600 dgsuikit:hover:bg-warning-300 dgsuikit:text-gray-900 dgsuikit:border-transparent',
    gray: 'dgsuikit:bg-gray-600 dgsuikit:active:bg-gray-700 dgsuikit:hover:bg-gray-500 dgsuikit:text-white dgsuikit:border-transparent',
  },
  secondary: {
    primary:
      'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:bg-gray-100 dgsuikit:active:bg-gray-200 dgsuikit:hover:bg-gray-50 dgsuikit:border-transparent',
    success:
      'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:bg-success-50 dgsuikit:active:bg-success-100 dgsuikit:hover:bg-success-50 dgsuikit:border-transparent',
    error:
      'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:bg-error-50 dgsuikit:active:bg-error-100 dgsuikit:hover:bg-error-50 dgsuikit:border-transparent',
    warning:
      'dgsuikit:text-gray-700 dgsuikit:hover:text-gray-600 dgsuikit:active:text-gray-800 dgsuikit:bg-warning-50 dgsuikit:active:bg-warning-100 dgsuikit:hover:bg-warning-50 dgsuikit:border-transparent',
    gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:bg-gray-100 dgsuikit:active:bg-gray-200 dgsuikit:hover:bg-gray-100 dgsuikit:border-transparent',
  },
  outline: {
    primary:
      'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:border-primary-300 dgsuikit:hover:border-primary-200 dgsuikit:active:border-primary-600',
    success:
      'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:border-success-500 dgsuikit:hover:border-success-400 dgsuikit:active:border-success-700 dgsuikit:disabled:active:border-success-600',
    error:
      'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:border-error-300 dgsuikit:hover:border-error-200 dgsuikit:active:border-error-600 dgsuikit:disabled:border-error-500',
    warning:
      'dgsuikit:text-warning-700 dgsuikit:hover:text-warning-600 dgsuikit:active:text-warning-800 dgsuikit:border-warning-500 dgsuikit:hover:border-warning-400 dgsuikit:active:border-warning-600',
    gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:border-gray-400 dgsuikit:hover:border-gray-300 dgsuikit:active:border-gray-700 dgsuikit:disabled:border-gray-600',
  },
  text: {
    primary:
      'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:border-transparent',
    success:
      'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:border-transparent',
    error:
      'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:border-transparent',
    warning:
      'dgsuikit:text-warning-700 dgsuikit:hover:text-warning-600 dgsuikit:active:text-warning-800 dgsuikit:border-transparent',
    gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:border-transparent',
  },
};

export const sizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon dgsuikit:py-2.5 dgsuikit:px-4 dgsuikit:font-button-small',
  medium: 'button-medium-icon dgsuikit:py-3 dgsuikit:px-5 dgsuikit:font-button-medium',
  large: 'button-large-icon dgsuikit:py-3 dgsuikit:px-6 dgsuikit:font-button-large',
};

export const iconOnlyButtonSizeStyle: Record<Required<ButtonProps>['size'], string> = {
  small: 'button-small-icon dgsuikit:p-[10px]',
  medium: 'button-medium-icon dgsuikit:p-3',
  large: 'button-large-icon dgsuikit:p-3',
};
