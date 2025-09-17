import { type FC, useState } from 'react';
import TimeInputs from './TimeInputs';
import TimeScrollWheels from './TimeScrollWheels';
import type { TimepickerProps } from './types';

interface Props {
  timePickerProps: TimepickerProps;
}

const Body: FC<Props> = (props) => {
  const { timePickerProps } = props;
  const { acceptRange, value, onChange } = timePickerProps;
  const [activePart, setActivePart] = useState<'start' | 'end'>('start');

  const handleTimeChange = (hour: number, minute: number) => {
    if (!value || acceptRange) return;
    if (value.getHours() === hour && value.getMinutes() === minute) return;

    const newTime = new Date(value);
    newTime.setHours(hour);
    newTime.setMinutes(minute);
    newTime.setSeconds(0);
    newTime.setMilliseconds(0);
    onChange(newTime);
  };

  const handleRangeTimeChange = (part: 'start' | 'end', hour: number, minute: number) => {
    if (!value || !acceptRange) return;
    const current = new Date(value[part] ?? new Date());
    if (current.getHours() === hour && current.getMinutes() === minute) return;

    current.setHours(hour);
    current.setMinutes(minute);
    current.setSeconds(0);
    current.setMilliseconds(0);
    onChange({
      ...value,
      [part]: current,
    });
  };

  return (
    <div
      dir="rtl"
      className="dgsuikit:p-4 dgsuikit:ss02"
    >
      <TimeInputs
        timePickerProps={timePickerProps}
        setActivePart={setActivePart}
        handleTimeChange={handleTimeChange}
        handleRangeTimeChange={handleRangeTimeChange}
      />

      <TimeScrollWheels
        timePickerProps={timePickerProps}
        activePart={activePart}
        handleTimeChange={handleTimeChange}
        handleRangeTimeChange={handleRangeTimeChange}
      />
    </div>
  );
};

export default Body;
