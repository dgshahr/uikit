import { type FC } from 'react';
import ControlledTimeInput from './TimeInput';
import type { TimeInputsProps } from './types';

const TimeInputs: FC<TimeInputsProps> = (props) => {
  const { timePickerProps, setActivePart, handleTimeChange, handleRangeTimeChange } = props;
  const { acceptRange, value } = timePickerProps;

  if (acceptRange) {
    return (
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
    );
  }

  return (
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
  );
};

export default TimeInputs;
