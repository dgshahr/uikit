import type { PopperPosition } from '@/src/hooks/useFlipPosition';

export const DURATION_CLASS = 'dgsuikit:duration-300';
export const REMOVE_CONTAINER_TIMEOUT = 400;

export const POSITION_CLASS_NAMES: Record<PopperPosition, string> = {
  'bottom-right': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'bottom-center':
    'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'bottom-left': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
  'top-right': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'top-center':
    'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'top-left': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
};
