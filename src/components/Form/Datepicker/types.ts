import type { HasOrNotRange, HasOrNotSubmitButton } from '../types/DateAndTimePicker';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export enum DateTypes {
  Day,
  Month,
  Year,
}

export type DayItem = { date: Date; isInMonth: boolean; isDisabled: boolean; isHoliday: boolean };

type DatepickerPropsBase = PickerWrapperProps & {
  startDate?: Date;
  endDate?: Date;
  showExtraDays?: boolean;
  showTodayButton?: boolean;
  showSubmitButton?: boolean;
  acceptRange?: boolean;
  highlightWeekends?: boolean;
  holidays?: Date[];
  disableDates?: Date[];
  mode?: 'input' | 'calendar';
  onInternalDateChange?: (date: Date) => void;
  dayHoverAction?: {
    onClick: (dayItem: DayItem) => void;
    element: (dayItem: DayItem) => React.ReactNode;
  };
};

export type DatepickerProps = DatepickerPropsBase & HasOrNotSubmitButton & HasOrNotRange;

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
