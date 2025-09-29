import clsx from 'clsx';
import type { FC } from 'react';
import Button, { type ButtonProps } from '../../../Button';
import { usePickerWrapperContext } from '../../Wrappers/PickerWrapper/contexts';

interface PickerFooterProps {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  className?: string;
}

const PickerFooter: FC<PickerFooterProps> = ({ primaryButton, secondaryButton, className }) => {
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
          onClick={handleSecondaryClick}
          {...secondaryButton}
        >
          {secondaryButton?.children ?? 'اعمال'}
        </Button>
      )}
      {hasPrimary && (
        <Button
          type="button"
          size="small"
          isFullWidth={hasSecondary}
          onClick={handlePrimaryClick}
          {...primaryButton}
        >
          {primaryButton?.children ?? 'اعمال'}
        </Button>
      )}
    </div>
  );
};

export default PickerFooter;
