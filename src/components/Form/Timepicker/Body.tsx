import debounce from 'lodash.debounce';
import { type FC, useState } from 'react';
import { useTimePickerContext } from './context';
import TimeInputs from './TimeInputs';
import TimeScrollWheels from './TimeScrollWheels';

const Body: FC = () => {
  const { timePickerProps } = useTimePickerContext();
  const { acceptRange, value, onChange } = timePickerProps;
  const [activePart, setActivePart] = useState<'start' | 'end'>('start');

  const setTime = (date: Date, hour: number, minute: number): Date => {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
  };

  const handleSingleTimeChange = debounce((hour: number, minute: number) => {
    if (!value || acceptRange) return;
    if (value.getHours() === hour && value.getMinutes() === minute) return;
    onChange(setTime(value, hour, minute));
  }, 200);

  const handleRangeTimeChange = debounce((part: 'start' | 'end', hour: number, minute: number) => {
    if (!value || !acceptRange) return;
    const current = new Date(value[part] ?? new Date());
    if (current.getHours() === hour && current.getMinutes() === minute) return;
    onChange({
      ...value,
      [part]: setTime(current, hour, minute),
    });
  }, 200);

  const componentsCommonProps = { timePickerProps, handleSingleTimeChange, handleRangeTimeChange };

  return (
    <div
      dir="rtl"
      className="dgsuikit:p-4 dgsuikit:ss02"
    >
      <TimeInputs
        setActivePart={setActivePart}
        {...componentsCommonProps}
      />

      <TimeScrollWheels
        activePart={activePart}
        {...componentsCommonProps}
      />
    </div>
  );
};

export default Body;
