import clsx from 'clsx';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import Button from '../../Button';
import { usePickerWrapperContext } from '../Wrappers/PickerWrapper/contexts';

const Footer: FC = () => {
  const { datepickerProps, setDateType, setInternalDate } = useDatepickerContext();
  const { toggleWrapperVisibility } = usePickerWrapperContext();
  const { showClearButton = true, showTodayButton = true, onClear } = datepickerProps;

  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-p-3 dgs-ui-kit-items-center dgs-ui-kit-border-t dgs-ui-kit-border-gray-200 dgs-ui-kit-gap-4',
        showClearButton ? 'dgs-ui-kit-justify-between' : 'dgs-ui-kit-justify-end',
      )}
    >
      {showClearButton && (
        <Button
          variant="text"
          size="small"
          isFullWidth={showTodayButton}
          onClick={() => {
            if (typeof onClear === 'function') onClear();
            toggleWrapperVisibility();
          }}
        >
          پاک کردن
        </Button>
      )}
      {showTodayButton && (
        <Button
          variant="secondary"
          size="small"
          isFullWidth={showClearButton}
          onClick={() => {
            setInternalDate(new Date());
            setDateType(DateTypes.Day);
          }}
        >
          امروز
        </Button>
      )}
    </div>
  );
};

export default Footer;
