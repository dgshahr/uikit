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
    warning: 'bg-warning-50 border-warning-200',
    primary: 'bg-primary-50 border-primary-100',
    error: 'bg-error-50 border-error-200',
    success: 'bg-success-50 border-success-200',
    gray: 'bg-gray-50 border-gray-200',
  },
  icon: {
    warning: 'text-warning-700',
    primary: 'text-primary-400',
    error: 'text-error-600',
    success: 'text-success-600',
    gray: 'text-gray-600',
  },
  title: {
    warning: 'text-warning-800',
    primary: 'text-primary-700',
    error: 'text-error-700',
    success: 'text-success-800',
    gray: 'text-gray-800',
  },
  close: {
    warning: 'text-warning-800',
    primary: 'text-primary-600',
    error: 'text-error-600',
    success: 'text-success-800',
    gray: 'text-gray-800',
  },
  text: {
    warning: 'text-warning-800',
    primary: 'text-primary-600',
    error: 'text-error-600',
    success: 'text-success-800',
    gray: 'text-gray-700',
  },
};

export const alertSizeClassNames: SectionRecords<AlertSizeRecords> = {
  container: {
    large: 'p-4',
    small: 'p-3',
  },
  icon: {
    large: 24,
    small: 20,
  },
  title: {
    large: 'font-h5-bold mb-2',
    small: 'font-h6-bold mb-1',
  },
  close: {
    large: 20,
    small: 20,
  },
  text: {
    large: 'font-p2-regular',
    small: 'font-p3-regular',
  },
};
