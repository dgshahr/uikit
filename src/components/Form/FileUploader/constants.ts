import type { FileType } from './types';

export const DEFAULT_SIZE_CLASS = 'dgsuikit:h-[190px] dgsuikit:w-[330px]';
export const DEFAULT_GRID_SIZE_CLASS = 'dgsuikit:size-[120px]';
export const DEFAULT_COMPACT_SIZE_CLASS = 'dgsuikit:size-[96px]';
export const ABSOLUTE_CENTER =
  'dgsuikit:!absolute dgsuikit:top-1/2 dgsuikit:left-1/2 dgsuikit:-translate-y-1/2 dgsuikit:-translate-x-1/2';
export const FOCUS_CLASS =
  'dgsuikit:ring-offset-1 dgsuikit:ring-offset-transparent dgsuikit:has-[:focus]:ring-offset-white dgsuikit:ring-[3px] dgsuikit:ring-transparent dgsuikit:has-[:focus]:ring-primary-300';
export const ERROR_CLASS = 'dgsuikit:!border-error-500 dgsuikit:ring-4 dgsuikit:!ring-error-50';
export const DRAG_CLASS =
  'dgsuikit:!border-primary-500 dgsuikit:ring-4 dgsuikit:!ring-gray-100 dgsuikit:!bg-gray-50';
export const DISABLED_CLASS = 'dgsuikit:has-[:disabled]:opacity-50';
export const TITLE_CLASS: Record<Required<FileType>['status'] | 'loading', string> = {
  default: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-500',
  loading: 'dgsuikit:bg-gray-500 dgsuikit:text-white',
  error: 'dgsuikit:bg-error-50 dgsuikit:text-error-500',
  warning: 'dgsuikit:bg-warning-50 dgsuikit:text-warning-700',
};

export const COMPACT_TITLE_CLASS: Record<Required<FileType>['status'] | 'loading', string> = {
  default: 'dgsuikit:bg-gray-800/60',
  loading: 'dgsuikit:bg-gray-800/60',
  error: 'dgsuikit:bg-red-500/60',
  warning: 'dgsuikit:bg-warning-500/60',
};

export const DEFAULT_LAYOUT_CLASS =
  'dgsuikit:space-y-4 dgsuikit:p-4 dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-center dgsuikit:items-center';

export const COMPACT_LAYOUT_CLASS =
  'dgsuikit:p-2 dgsuikit:pb-6 dgsuikit:pt-4 dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:justify-between dgsuikit:items-center';
