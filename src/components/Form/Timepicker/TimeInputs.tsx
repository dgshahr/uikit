import clsx from 'clsx';
import { type FC } from 'react';
import ControlledTimeInput from './TimeInput';
import type { TimeInputsProps } from './types';

const TimeInputs: FC<TimeInputsProps> = ({
  timePickerProps,
  setActivePart,
  handleSingleTimeChange,
  handleRangeTimeChange,
}) => {
  const { acceptRange, value } = timePickerProps;

  const buildValue = (date?: Date | null) => ({
    hour: date?.getHours() ?? 0,
    minute: date?.getMinutes() ?? 0,
  });

  const inputs = acceptRange
    ? [
        {
          key: 'start',
          id: 'from-time',
          label: 'از ساعت',
          value: buildValue(value?.start),
          className: 'dgsuikit:w-1/2',
        },
        {
          key: 'end',
          id: 'to-time',
          label: 'تا ساعت',
          value: buildValue(value?.end),
          className: 'dgsuikit:w-1/2',
        },
      ]
    : [
        {
          key: 'single',
          id: 'time',
          label: 'ساعت',
          value: buildValue(value),
          className: undefined,
        },
      ];

  return (
    <div
      className={clsx(
        acceptRange && 'dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-4 dgsuikit:mb-4',
      )}
    >
      {inputs.map(({ key, id, label, value, className }) => (
        <ControlledTimeInput
          key={id}
          id={id}
          value={value}
          labelContent={label}
          className={className}
          onFocus={() => {
            if (acceptRange && key !== 'single') {
              setActivePart(key as 'start' | 'end');
            }
          }}
          onChange={(selected) => {
            if (typeof selected.hour === 'number' && typeof selected.minute === 'number') {
              if (acceptRange && key !== 'single') {
                handleRangeTimeChange(key as 'start' | 'end', selected.hour, selected.minute);
              } else {
                handleSingleTimeChange(selected.hour, selected.minute);
              }
            }
          }}
        />
      ))}
    </div>
  );
};

export default TimeInputs;
