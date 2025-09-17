import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export interface IRangeDate {
  start: Date | null;
  end: Date | null;
}

type TimepickerPropsBase = PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
};

interface TimepickerWithSubmitButton {
  showSubmitButton?: true;
  onSubmit?: () => void;
}

interface TimepickerWithoutSubmitButton {
  showSubmitButton?: false;
  onSubmit?: never;
}

export interface TimepickerWithRange {
  acceptRange: true;
  value: IRangeDate;
  onChange: (value: TimepickerWithRange['value']) => void;
}

export interface TimepickerWithoutRange {
  acceptRange?: false;
  value: Date | null;
  onChange: (value: Date) => void;
}

export type TimepickerProps = TimepickerPropsBase &
  (TimepickerWithSubmitButton | TimepickerWithoutSubmitButton) &
  (TimepickerWithRange | TimepickerWithoutRange);

export interface ScrollWheelProps {
  items: number[];
  defaultValue: number;
  onValueChange: (value: number) => void;
  className?: string;
  formatValue?: (value: number) => string;
}

export interface TimeInputProps {
  value: Date | null;
  onChange: (time: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  isRange?: boolean;
  isStartTime?: boolean;
}

export interface TimeScrollWheelsProps {
  timePickerProps: TimepickerProps;
  activePart: 'start' | 'end';
  handleTimeChange: (hour: number, minute: number) => void;
  handleRangeTimeChange: (part: 'start' | 'end', hour: number, minute: number) => void;
}

export interface TimeInputsProps {
  timePickerProps: TimepickerProps;
  setActivePart: (part: 'start' | 'end') => void;
  handleTimeChange: (hour: number, minute: number) => void;
  handleRangeTimeChange: (part: 'start' | 'end', hour: number, minute: number) => void;
}
