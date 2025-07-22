import type { ReactNode } from 'react';

export type RangeValueType = number | number[];

export interface RangeInputProps<T extends RangeValueType> {
  value: T;
  onChange: (value: T) => void;
  min: number;
  max: number;
  color?: 'primary' | 'secondary';
  step?: number;
  disabled?: boolean;
  tooltip?: boolean | ReactNode;
  startTitle?: string;
  endTitle?: string;
  wrapperClassName?: string;
}
