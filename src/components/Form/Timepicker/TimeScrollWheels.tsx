import { type FC } from 'react';
import ScrollWheel from './ScrollWheel';
import type { TimeScrollWheelsProps } from './types';

const TimeScrollWheels: FC<TimeScrollWheelsProps> = (props) => {
  const {
    timePickerProps,
    activePart,
    handleTimeChange,
    handleRangeTimeChange,
    hours,
    minutes,
    formatHour,
    formatMinute,
  } = props;
  const { acceptRange, value } = timePickerProps;

  const defaultMinute = acceptRange
    ? activePart === 'start'
      ? (value?.start?.getMinutes() ?? 0)
      : (value?.end?.getMinutes() ?? 0)
    : (value?.getMinutes() ?? 0);

  const handleMinuteChange = (minute: number) => {
    if (acceptRange) {
      handleRangeTimeChange(
        activePart,
        activePart === 'start' ? (value?.start?.getHours() ?? 0) : (value?.end?.getHours() ?? 0),
        minute,
      );
    } else {
      handleTimeChange(value?.getHours() ?? 0, minute);
    }
  };

  const defaultHour = acceptRange
    ? activePart === 'start'
      ? (value?.start?.getHours() ?? 0)
      : (value?.end?.getHours() ?? 0)
    : (value?.getHours() ?? 0);

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
      handleTimeChange(hour, value?.getMinutes() ?? 0);
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
