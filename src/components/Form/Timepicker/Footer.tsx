import { type FC } from 'react';
import type { TimepickerProps } from './types';
import Button from '../../Button';
import { usePickerWrapperContext } from '../Wrappers/PickerWrapper/contexts';

interface Props {
  timePickerProps: TimepickerProps;
}

const Footer: FC<Props> = (props) => {
  const { timePickerProps } = props;
  const { toggleWrapperVisibility } = usePickerWrapperContext();

  const {
    showSubmitButton = true,
    showNowButton = true,
    onSubmit,
    onChange,
    acceptRange,
  } = timePickerProps;

  return (
    <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between dgsuikit:p-4 dgsuikit:border-t dgsuikit:border-gray-200">
      {showNowButton && (
        <Button
          type="button"
          variant="text"
          size="small"
          isFullWidth={showSubmitButton}
          onClick={() => {
            const endDate = new Date();
            endDate.setHours(endDate.getHours() + 1);
            if (acceptRange) onChange({ start: new Date(), end: endDate });
            else onChange(new Date());
          }}
        >
          رفتن به اکنون
        </Button>
      )}
      {showSubmitButton && (
        <Button
          type="button"
          size="small"
          isFullWidth={showNowButton}
          onClick={() => {
            if (typeof onSubmit === 'function') onSubmit();
            toggleWrapperVisibility();
          }}
        >
          اعمال
        </Button>
      )}
    </div>
  );
};

export default Footer;
