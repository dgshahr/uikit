import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

interface IRangeDate {
  start: Date | null;
  end: Date | null;
}

export type TimeItem = {
  value: number;
  label: string;
  isDisabled: boolean;
};

type TimepickerPropsBase = PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  onInternalTimeChange?: (time: Date) => void;
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
