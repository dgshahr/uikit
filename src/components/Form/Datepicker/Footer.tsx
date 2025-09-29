import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import PickerFooter from '../Common/PickerFooter/PickerFooter';

const Footer: FC = () => {
  const { datepickerProps, setDateType, setInternalDate } = useDatepickerContext();
  const { showSubmitButton = true, showTodayButton = true, onSubmit } = datepickerProps;

  const handleTodayClick = () => {
    setInternalDate(new Date());
    setDateType(DateTypes.Day);
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
