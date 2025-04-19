import type { CardColor, CardSize } from './types';

export const cardBodyColorClassnameMap: Record<CardColor, string> = {
  error:
    'dgs-ui-kit-bg-error-50 dgs-ui-kit-border-error-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
  gray: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-gray-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
  primary:
    'dgs-ui-kit-bg-primary-50 dgs-ui-kit-border-primary-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
  success:
    'dgs-ui-kit-bg-success-50 dgs-ui-kit-border-success-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
  warning:
    'dgs-ui-kit-bg-warning-50 dgs-ui-kit-border-warning-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
  white: 'dgs-ui-kit-bg-white dgs-ui-kit-border-gray-200 dgs-ui-kit-border dgs-ui-kit-border-solid',
};

export const cardBodySizeClassnameMap: Record<CardSize, string> = {
  medium: 'dgs-ui-kit-p-6 dgs-ui-kit-rounded-xl',
  small: 'dgs-ui-kit-p-4 dgs-ui-kit-rounded-xl',
};
