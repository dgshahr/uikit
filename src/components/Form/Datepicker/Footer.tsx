import clsx from 'clsx';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import Button from '../../Button';
import { usePickerWrapperContext } from '../Wrappers/PickerWrapper/contexts';

const Footer: FC = () => {
  const { datepickerProps, setDateType, setInternalDate } = useDatepickerContext();
  const { toggleWrapperVisibility } = usePickerWrapperContext();
  const { showSubmitButton = true, showTodayButton = true, onSubmit } = datepickerProps;

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:p-3 dgsuikit:items-center dgsuikit:border-t dgsuikit:border-gray-200 dgsuikit:gap-4',
        showTodayButton ? 'dgsuikit:justify-between' : 'dgsuikit:justify-end',
      )}
    >
      {showTodayButton && (
        <Button
          type="button"
          variant="text"
          size="small"
          isFullWidth={showSubmitButton}
          onClick={() => {
            setInternalDate(new Date());
            setDateType(DateTypes.Day);
          }}
        >
          رفتن به امروز
        </Button>
      )}
      {showSubmitButton && (
        <Button
          type="button"
          size="small"
          isFullWidth={showTodayButton}
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
