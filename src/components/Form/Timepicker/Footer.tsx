import { type FC } from 'react';
import type { TimepickerProps } from './types';
import PickerFooter from '../Common/PickerFooter';

interface Props {
  timePickerProps: TimepickerProps;
}

const Footer: FC<Props> = (props) => {
  const { timePickerProps } = props;

  const {
    showSubmitButton = true,
    showNowButton = true,
    onSubmit,
    onChange,
    acceptRange,
  } = timePickerProps;

  const handleNowClick = () => {
    if (acceptRange) {
      const endDate = new Date();
      endDate.setHours(endDate.getHours() + 1);
      onChange({ start: new Date(), end: endDate });
    } else {
      onChange(new Date());
    }
  };

  return (
    <PickerFooter
      showSubmitButton={showSubmitButton}
      showActionButton={showNowButton}
      actionButtonText="رفتن به اکنون"
      submitButtonText="اعمال"
      onActionClick={handleNowClick}
      onSubmit={onSubmit}
      className="dgsuikit:p-4"
    />
  );
};

export default Footer;
