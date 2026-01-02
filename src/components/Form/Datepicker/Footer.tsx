import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import PickerFooter from '../Common/DateAndTimePickerFooter/DateAndTimePickerFooter';

const Footer: FC = () => {
  const { datepickerProps, setDateType, setInternalDate } = useDatepickerContext();
  const { showSubmitButton = true, showTodayButton = true, onSubmit } = datepickerProps;

  const handleTodayClick = () => {
    const today = new Date();
    setInternalDate(today);
    setDateType(DateTypes.Day);
    if (datepickerProps.acceptRange) {
      datepickerProps.onChange({ start: today, end: null });
    } else {
      datepickerProps.onChange(today);
    }
  };

  return (
    <PickerFooter
      {...(showSubmitButton && {
        primaryButton: {
          onClick: onSubmit,
          children: 'اعمال',
        },
      })}
      {...(showTodayButton && {
        secondaryButton: {
          variant: 'text',
          onClick: handleTodayClick,
          children: 'رفتن به امروز',
        },
      })}
      className="dgsuikit:p-3"
    />
  );
};

export default Footer;
