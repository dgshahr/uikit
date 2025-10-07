import type { HasOrNotRange, HasOrNotSubmitButton } from '@/src/utils/types/DateAndTimePicker';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

export type TimeValue = { hour: number | null; minute: number | null };

type TimepickerPropsBase = PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
};

export type TimepickerProps = TimepickerPropsBase & HasOrNotSubmitButton & HasOrNotRange;

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

type RangePart = 'start' | 'end';

interface WithTimeHandlers {
  timePickerProps: TimepickerProps;
  handleSingleTimeChange: (hour: number, minute: number) => void;
  handleRangeTimeChange: (part: RangePart, hour: number, minute: number) => void;
}

export interface TimeScrollWheelsProps extends WithTimeHandlers {
  activePart: RangePart;
}

export interface TimeInputsProps extends WithTimeHandlers {
  setActivePart: (part: RangePart) => void;
}
