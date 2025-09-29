import { type FC } from 'react';
import ScrollWheel from './ScrollWheel';
import type { TimeScrollWheelsProps } from './types';

const TimeScrollWheels: FC<TimeScrollWheelsProps> = (props) => {
  const { timePickerProps, activePart, handleSingleTimeChange, handleRangeTimeChange } = props;
  const { minuteStep = 1, acceptRange, value } = timePickerProps;
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i).filter(
    (minute) => minute % minuteStep === 0,
  );

  const formatHour = (hour: number) => hour.toString().padStart(2, '0');
  const formatMinute = (minute: number) => minute.toString().padStart(2, '0');

  const getDefaultTimePart = (part: 'getHours' | 'getMinutes') => {
    if (acceptRange) {
      const time = activePart === 'start' ? value?.start : value?.end;
      return time ? time[part]() : 0;
    }
    return value ? value[part]() : 0;
  };

  const defaultHour = getDefaultTimePart('getHours');
  const defaultMinute = getDefaultTimePart('getMinutes');

  const handleMinuteChange = (minute: number) => {
    if (acceptRange) {
      handleRangeTimeChange(
        activePart,
        activePart === 'start' ? (value?.start?.getHours() ?? 0) : (value?.end?.getHours() ?? 0),
        minute,
      );
    } else {
      handleSingleTimeChange(value?.getHours() ?? 0, minute);
    }
  };

  const handleHourChange = (hour: number) => {
    if (acceptRange) {
      handleRangeTimeChange(
        activePart,
        hour,
        activePart === 'start'
          ? (value?.start?.getMinutes() ?? 0)
          : (value?.end?.getMinutes() ?? 0),
      );
    } else {
      handleSingleTimeChange(hour, value?.getMinutes() ?? 0);
    }
  };

  return (
    <div className="dgsuikit:flex dgsuikit:mt-2 dgsuikit:w-full dgsuikit:justify-center">
      <ScrollWheel
        items={minutes}
        defaultValue={defaultMinute}
        onValueChange={handleMinuteChange}
        formatValue={formatMinute}
      />
      <ScrollWheel
        items={hours}
        defaultValue={defaultHour}
        onValueChange={handleHourChange}
        formatValue={formatHour}
      />
    </div>
  );
};

export default TimeScrollWheels;
