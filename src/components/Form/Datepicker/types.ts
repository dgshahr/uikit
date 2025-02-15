import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export enum DateTypes {
  Day,
  Month,
  Year,
}

type DatepickerPropsBase = PickerWrapperProps & {
  startDate?: Date;
  endDate?: Date;
  showExtraDays?: boolean;
  showTodayButton?: boolean;
  showClearButton?: boolean;
  acceptRange?: boolean;
};

interface DatepickerWithClearButton {
  showClearButton?: true;
  onClear: () => void;
}

interface DatepickerWithoutClearButton {
  showClearButton?: false;
  onClear?: never;
}

export interface DatepickerWithRange {
  acceptRange: true;
  value: { start: Date | null; end: Date | null };
  onChange: (value: DatepickerWithRange['value']) => void;
}

export interface DatepickerWithoutRange {
  acceptRange?: false;
  value: Date;
  onChange: (value: DatepickerWithoutRange['value']) => void;
}

export type DatepickerProps = DatepickerPropsBase &
  (DatepickerWithClearButton | DatepickerWithoutClearButton) &
  (DatepickerWithRange | DatepickerWithoutRange);

export interface IDatepickerContext {
  dateType: DateTypes;
  setDateType: (type: DateTypes) => void;
  internalDate: Date;
  setInternalDate: (date: Date) => void;
  datepickerProps: DatepickerProps;
}

export interface ContextProviderProps {
  datepickerProps: DatepickerProps;
}
