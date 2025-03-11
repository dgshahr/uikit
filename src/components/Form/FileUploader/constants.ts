import type { FileType } from './types';

export const DEFAULT_SIZE_CLASS = 'dgs-ui-kit-h-[190px] dgs-ui-kit-w-[330px]';
export const DEFAULT_GRID_SIZE_CLASS = 'dgs-ui-kit-size-[120px]';
export const ABSOLUTE_CENTER =
  '!dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-y-1/2 -dgs-ui-kit-translate-x-1/2';
export const FOCUS_CLASS =
  'dgs-ui-kit-ring-offset-1 dgs-ui-kit-ring-offset-transparent has-[:focus]:dgs-ui-kit-ring-offset-white dgs-ui-kit-ring-[3px] dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-ring-primary-300';
export const ERROR_CLASS =
  '!dgs-ui-kit-border-error-500 dgs-ui-kit-ring-4 !dgs-ui-kit-ring-error-50';
export const DRAG_CLASS =
  '!dgs-ui-kit-border-primary-500 dgs-ui-kit-ring-4 !dgs-ui-kit-ring-gray-100 !dgs-ui-kit-bg-gray-50';
export const DISABLED_CLASS = 'has-[:disabled]:dgs-ui-kit-opacity-50';
export const TITLE_CLASS: Record<Required<FileType>['status'] | 'loading', string> = {
  default: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500',
  loading: 'dgs-ui-kit-bg-gray-500 dgs-ui-kit-text-white',
  error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-text-error-500',
  warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-text-warning-700',
};
