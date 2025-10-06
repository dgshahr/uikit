import { type FC } from 'react';
import { useTimePickerContext } from './context';
import PickerFooter from '../Common/DateAndTimePickerFooter/DateAndTimePickerFooter';

const Footer: FC = () => {
  const { timePickerProps } = useTimePickerContext();

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
      {...(showSubmitButton && {
        primaryButton: {
          onClick: onSubmit,
          children: 'اعمال',
        },
      })}
      {...(showNowButton && {
        secondaryButton: {
          variant: 'text',
          onClick: handleNowClick,
          children: 'رفتن به اکنون',
        },
      })}
      className="dgsuikit:p-4"
    />
  );
};

export default Footer;
