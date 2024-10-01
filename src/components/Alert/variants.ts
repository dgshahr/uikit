import type { AlertProps } from '.';

type AlertVariantRecords = Record<Required<AlertProps>['variant'], string>;
type AlertSizeRecords = Record<Required<AlertProps>['size'], string | number>;

interface SectionRecords<T extends AlertVariantRecords | AlertSizeRecords> {
  container: T;
  icon: T;
  title: T;
  close: T;
  text: T;
}

export const alertVariantClassNames: SectionRecords<AlertVariantRecords> = {
  container: {
    warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-border-warning-200',
    primary: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-border-primary-100',
    error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-border-error-200',
    success: 'dgs-ui-kit-bg-success-50 dgs-ui-kit-border-success-200',
    gray: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-gray-200',
  },
  icon: {
    warning: 'dgs-ui-kit-text-warning-700',
    primary: 'dgs-ui-kit-text-primary-400',
    error: 'dgs-ui-kit-text-error-600',
    success: 'dgs-ui-kit-text-success-600',
    gray: 'dgs-ui-kit-text-gray-600',
  },
  title: {
    warning: 'dgs-ui-kit-text-warning-800',
    primary: 'dgs-ui-kit-text-primary-700',
    error: 'dgs-ui-kit-text-error-700',
    success: 'dgs-ui-kit-text-success-800',
    gray: 'dgs-ui-kit-text-gray-800',
  },
  close: {
    warning: 'dgs-ui-kit-text-warning-800',
    primary: 'dgs-ui-kit-text-primary-600',
    error: 'dgs-ui-kit-text-error-600',
    success: 'dgs-ui-kit-text-success-800',
    gray: 'dgs-ui-kit-text-gray-800',
  },
  text: {
    warning: 'dgs-ui-kit-text-warning-800',
    primary: 'dgs-ui-kit-text-primary-600',
    error: 'dgs-ui-kit-text-error-600',
    success: 'dgs-ui-kit-text-success-800',
    gray: 'dgs-ui-kit-text-gray-700',
  },
};

export const alertSizeClassNames: SectionRecords<AlertSizeRecords> = {
  container: {
    large: 'dgs-ui-kit-p-4',
    small: 'dgs-ui-kit-p-3',
  },
  icon: {
    large: 24,
    small: 20,
  },
  title: {
    large: 'dgs-ui-kit-font-h5-bold mb-2',
    small: 'dgs-ui-kit-font-h6-bold mb-1',
  },
  close: {
    large: 20,
    small: 20,
  },
  text: {
    large: 'dgs-ui-kit-font-p2-regular',
    small: 'dgs-ui-kit-font-p3-regular',
  },
};
