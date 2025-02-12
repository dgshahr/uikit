import clsx from 'clsx';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import Button from '../../Button';
import { usePickerWrapper } from '../Wrappers/PickerWrapper/contexts';

const Footer: FC = () => {
  const { datepickerProps } = useDatepickerContext();
  const { toggleWrapperVisibility } = usePickerWrapper();
  const { showClearButton = true, showTodayButton = true, onChange } = datepickerProps;

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
          isFullWidth
          onClick={() => {
            onChange(null);
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
          isFullWidth
          onClick={() => {
            onChange(new Date());
            toggleWrapperVisibility();
          }}
        >
          امروز
        </Button>
      )}
    </div>
  );
};

export default Footer;
