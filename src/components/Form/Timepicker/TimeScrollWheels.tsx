import { useEffect, useState, type FC } from 'react';
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

  const [temporaryMinute, setTemporaryMinute] = useState(defaultMinute);
  const [temporaryHour, setTemporaryHour] = useState(defaultHour);

  useEffect(() => {
    if (acceptRange) {
      handleRangeTimeChange(activePart, temporaryHour, temporaryMinute);
    } else {
      handleSingleTimeChange(temporaryHour, temporaryMinute);
    }
  }, [temporaryHour, temporaryMinute]);

  return (
    <div className="dgsuikit:flex dgsuikit:mt-2 dgsuikit:w-full dgsuikit:justify-center">
      <ScrollWheel
        items={minutes}
        defaultValue={defaultMinute}
        onValueChange={(minute: number) => setTemporaryMinute(minute)}
        formatValue={formatMinute}
      />
      <ScrollWheel
        items={hours}
        defaultValue={defaultHour}
        onValueChange={(hour: number) => setTemporaryHour(hour)}
        formatValue={formatHour}
      />
    </div>
  );
};

export default TimeScrollWheels;
