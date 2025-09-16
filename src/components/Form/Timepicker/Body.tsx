import { type FC, useMemo, useState } from 'react';
import ScrollWheel from './ScrollWheel';
import ControlledTimeInput from './TimeInput';
import type { TimepickerProps } from './types';

interface Props {
  timePickerProps: TimepickerProps;
}

const Body: FC<Props> = ({ timePickerProps }) => {
  const { minuteStep = 1, acceptRange, value, onChange } = timePickerProps;
  const [activePart, setActivePart] = useState<'start' | 'end'>('start');

  const hours = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);

  const minutes = useMemo(
    () => Array.from({ length: 60 }, (_, i) => i).filter((minute) => minute % minuteStep === 0),
    [minuteStep],
  );

  const formatHour = (hour: number) => hour.toString().padStart(2, '0');
  const formatMinute = (minute: number) => minute.toString().padStart(2, '0');

  const handleTimeChange = (hour: number, minute: number) => {
    if (!value || acceptRange) return;
    const current = value as Date;
    if (current.getHours() === hour && current.getMinutes() === minute) return;

    const newTime = new Date(current);
    newTime.setHours(hour);
    newTime.setMinutes(minute);
    onChange(newTime);
  };

  const handleRangeTimeChange = (part: 'start' | 'end', hour: number, minute: number) => {
    if (!value || !acceptRange) return;
    const range = value as { start: Date; end: Date };
    const current = new Date(range[part]);
    if (current.getHours() === hour && current.getMinutes() === minute) return;

    current.setHours(hour);
    current.setMinutes(minute);
    onChange({
      ...range,
      [part]: current,
    });
  };

  return (
    <div
      dir="rtl"
      className="dgsuikit:p-4 dgsuikit:ss02"
    >
      {acceptRange ? (
        <div className="dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-4 dgsuikit:mb-4">
          <ControlledTimeInput
            value={{
              hour: value?.start?.getHours() ?? 0,
              minute: value?.start?.getMinutes() ?? 0,
            }}
            className="dgsuikit:w-1/2"
            id="from-time"
            labelContent="از ساعت"
            onFocus={() => setActivePart('start')}
            onChange={(selected) => {
              if (typeof selected.hour === 'number' && typeof selected.minute === 'number') {
                handleRangeTimeChange('start', selected.hour, selected.minute);
              }
            }}
          />

          <ControlledTimeInput
            value={{
              hour: value?.end?.getHours() ?? 0,
              minute: value?.end?.getMinutes() ?? 0,
            }}
            id="to-time"
            labelContent="تا ساعت"
            className="dgsuikit:w-1/2"
            onFocus={() => setActivePart('end')}
            onChange={(selected) => {
              if (typeof selected.hour === 'number' && typeof selected.minute === 'number') {
                handleRangeTimeChange('end', selected.hour, selected.minute);
              }
            }}
          />
        </div>
      ) : (
        <ControlledTimeInput
          value={{ hour: value?.getHours() ?? 0, minute: value?.getMinutes() ?? 0 }}
          id="time"
          labelContent="ساعت"
          onChange={(selected) => {
            if (typeof selected.hour === 'number' && typeof selected.minute === 'number') {
              handleTimeChange(selected.hour, selected.minute);
            }
          }}
        />
      )}

      <div className="dgsuikit:flex dgsuikit:mt-2 dgsuikit:w-full dgsuikit:justify-center">
        <ScrollWheel
          items={minutes}
          defaultValue={
            acceptRange
              ? activePart === 'start'
                ? (value?.start?.getMinutes() ?? 0)
                : (value?.end?.getMinutes() ?? 0)
              : (value?.getMinutes() ?? 0)
          }
          onValueChange={(minute) => {
            if (acceptRange) {
              handleRangeTimeChange(
                activePart,
                activePart === 'start'
                  ? (value?.start?.getHours() ?? 0)
                  : (value?.end?.getHours() ?? 0),
                minute,
              );
            } else {
              handleTimeChange(value?.getHours() ?? 0, minute);
            }
          }}
          formatValue={formatMinute}
        />

        <ScrollWheel
          items={hours}
          defaultValue={
            acceptRange
              ? activePart === 'start'
                ? (value?.start?.getHours() ?? 0)
                : (value?.end?.getHours() ?? 0)
              : (value?.getHours() ?? 0)
          }
          onValueChange={(hour) => {
            if (acceptRange) {
              handleRangeTimeChange(
                activePart,
                hour,
                activePart === 'start'
                  ? (value?.start?.getMinutes() ?? 0)
                  : (value?.end?.getMinutes() ?? 0),
              );
            } else {
              handleTimeChange(hour, value?.getMinutes() ?? 0);
            }
          }}
          formatValue={formatHour}
        />
      </div>
    </div>
  );
};

export default Body;
