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
    warning: 'dgsuikit:bg-warning-50 dgsuikit:border-warning-200',
    primary: 'dgsuikit:bg-primary-50 dgsuikit:border-primary-100',
    error: 'dgsuikit:bg-error-50 dgsuikit:border-error-200',
    success: 'dgsuikit:bg-success-50 dgsuikit:border-success-200',
    gray: 'dgsuikit:bg-gray-50 dgsuikit:border-gray-200',
  },
  icon: {
    warning: 'dgsuikit:text-warning-700',
    primary: 'dgsuikit:text-primary-400',
    error: 'dgsuikit:text-error-600',
    success: 'dgsuikit:text-success-600',
    gray: 'dgsuikit:text-gray-600',
  },
  title: {
    warning: 'dgsuikit:text-warning-800',
    primary: 'dgsuikit:text-primary-700',
    error: 'dgsuikit:text-error-700',
    success: 'dgsuikit:text-success-800',
    gray: 'dgsuikit:text-gray-800',
  },
  close: {
    warning: 'dgsuikit:text-warning-800',
    primary: 'dgsuikit:text-primary-600',
    error: 'dgsuikit:text-error-600',
    success: 'dgsuikit:text-success-800',
    gray: 'dgsuikit:text-gray-800',
  },
  text: {
    warning: 'dgsuikit:text-warning-800',
    primary: 'dgsuikit:text-primary-600',
    error: 'dgsuikit:text-error-600',
    success: 'dgsuikit:text-success-800',
    gray: 'dgsuikit:text-gray-700',
  },
};

export const alertSizeClassNames: SectionRecords<AlertSizeRecords> = {
  container: {
    large: 'dgsuikit:p-4',
    small: 'dgsuikit:p-3',
  },
  icon: {
    large: 24,
    small: 20,
  },
  title: {
    large: 'dgsuikit:font-h5-bold mb-2',
    small: 'dgsuikit:font-h6-bold mb-1',
  },
  close: {
    large: 20,
    small: 20,
  },
  text: {
    large: 'dgsuikit:font-p2-regular',
    small: 'dgsuikit:font-p3-regular',
  },
};
