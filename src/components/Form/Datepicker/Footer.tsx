import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import PickerFooter from '../Common/PickerFooter';

const Footer: FC = () => {
  const { datepickerProps, setDateType, setInternalDate } = useDatepickerContext();
  const { showSubmitButton = true, showTodayButton = true, onSubmit } = datepickerProps;

  const handleTodayClick = () => {
    setInternalDate(new Date());
    setDateType(DateTypes.Day);
  };

  return (
    <PickerFooter
      showSubmitButton={showSubmitButton}
      showActionButton={showTodayButton}
      actionButtonText="رفتن به امروز"
      submitButtonText="اعمال"
      onActionClick={handleTodayClick}
      onSubmit={onSubmit}
      className="dgsuikit:p-3"
    />
  );
};

export default Footer;
