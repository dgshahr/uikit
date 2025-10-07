import clsx from 'clsx';
import type { FC } from 'react';
import Button, { type ButtonProps } from '../../../Button';
import { usePickerWrapperContext } from '../../Wrappers/PickerWrapper/contexts';

interface DateAndTimePickerFooterProps {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  className?: string;
}

const DateAndTimePickerFooter: FC<DateAndTimePickerFooterProps> = (props) => {
  const { primaryButton, secondaryButton, className } = props;
  const { toggleWrapperVisibility } = usePickerWrapperContext();

  const hasPrimary = Boolean(primaryButton);
  const hasSecondary = Boolean(secondaryButton);

  const handlePrimaryClick: ButtonProps['onClick'] = (e) => {
    if (primaryButton && typeof primaryButton.onClick === 'function') {
      primaryButton.onClick(e);
    }
    toggleWrapperVisibility();
  };

  const handleSecondaryClick: ButtonProps['onClick'] = (e) => {
    if (secondaryButton && typeof secondaryButton.onClick === 'function') {
      secondaryButton.onClick(e);
    }
  };

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:items-center dgsuikit:border-t dgsuikit:border-gray-200 dgsuikit:gap-4',
        hasSecondary ? 'dgsuikit:justify-between' : 'dgsuikit:justify-end',
        className,
      )}
    >
      {hasSecondary && (
        <Button
          type="button"
          variant="text"
          size="small"
          isFullWidth={hasPrimary}
          {...secondaryButton}
          onClick={handleSecondaryClick}
        >
          {secondaryButton?.children ?? 'اعمال'}
        </Button>
      )}
      {hasPrimary && (
        <Button
          type="button"
          size="small"
          isFullWidth={hasSecondary}
          {...primaryButton}
          onClick={handlePrimaryClick}
        >
          {primaryButton?.children ?? 'اعمال'}
        </Button>
      )}
    </div>
  );
};

export default DateAndTimePickerFooter;
