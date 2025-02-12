import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export enum DateTypes {
  Day,
  Month,
  Year,
}

export type DatepickerProps = PickerWrapperProps & {
  startDate?: Date;
  endDate?: Date;
  showExtraDays?: boolean;
  showTodayButton?: boolean;
  showClearButton?: boolean;
  acceptRange?: boolean;
  value: Date | null;
  onChange: (value: DatepickerProps['value']) => void;
};

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
