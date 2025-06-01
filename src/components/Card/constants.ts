import type { CardColor, CardSize } from './types';

export const cardBodyColorClassnameMap: Record<CardColor, string> = {
  error: 'dgsuikit:bg-error-50 dgsuikit:border-error-200 dgsuikit:border dgsuikit:border-solid',
  gray: 'dgsuikit:bg-gray-50 dgsuikit:border-gray-200 dgsuikit:border dgsuikit:border-solid',
  primary:
    'dgsuikit:bg-primary-50 dgsuikit:border-primary-200 dgsuikit:border dgsuikit:border-solid',
  success:
    'dgsuikit:bg-success-50 dgsuikit:border-success-200 dgsuikit:border dgsuikit:border-solid',
  warning:
    'dgsuikit:bg-warning-50 dgsuikit:border-warning-200 dgsuikit:border dgsuikit:border-solid',
  white: 'dgsuikit:bg-white dgsuikit:border-gray-200 dgsuikit:border dgsuikit:border-solid',
};

export const cardBodySizeClassnameMap: Record<CardSize, string> = {
  medium: 'dgsuikit:p-6 dgsuikit:rounded-xl',
  small: 'dgsuikit:p-4 dgsuikit:rounded-xl',
};
