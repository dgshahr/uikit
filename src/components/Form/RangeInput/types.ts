import type { ReactNode } from 'react';

export type RangeValueType = number | number[];

export type TooltipSize = 'small' | 'medium' | 'large' | 'xLarge';

export interface RangeInputProps<T extends RangeValueType> {
  value: T;
  onChange: (value: T) => void;
  min: number;
  max: number;
  color?: 'primary' | 'secondary';
  tooltip?: boolean | ReactNode;
  tooltipSize?: TooltipSize;
  tooltipClassName?: string;
  step?: number;
  disabled?: boolean;
  startTitle?: string;
  endTitle?: string;
  wrapperClassName?: string;
}
