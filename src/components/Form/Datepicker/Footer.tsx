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
        'dgs-ui-kit-flex dgs-ui-kit-p-3 dgs-ui-kit-items-center dgs-ui-kit-border-t dgs-ui-kit-border-gray-200 dgs-ui-kit-gap-4',
        showTodayButton ? 'dgs-ui-kit-justify-between' : 'dgs-ui-kit-justify-end',
      )}
    >
      {showTodayButton && (
        <Button
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
