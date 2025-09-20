import clsx from 'clsx';
import type { FC } from 'react';
import Button from '../../../Button';
import { usePickerWrapperContext } from '../../Wrappers/PickerWrapper/contexts';

interface PickerFooterProps {
  showSubmitButton?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  submitButtonText?: string;
  onActionClick?: () => void;
  onSubmit?: () => void;
  className?: string;
}

const PickerFooter: FC<PickerFooterProps> = ({
  showSubmitButton = true,
  showActionButton = true,
  actionButtonText = 'اعمال',
  submitButtonText = 'اعمال',
  onActionClick,
  onSubmit,
  className,
}) => {
  const { toggleWrapperVisibility } = usePickerWrapperContext();

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') onSubmit();
    toggleWrapperVisibility();
  };

  const handleAction = () => {
    if (typeof onActionClick === 'function') onActionClick();
  };

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:items-center dgsuikit:border-t dgsuikit:border-gray-200 dgsuikit:gap-4',
        showActionButton ? 'dgsuikit:justify-between' : 'dgsuikit:justify-end',
        className,
      )}
    >
      {showActionButton && (
        <Button
          type="button"
          variant="text"
          size="small"
          isFullWidth={showSubmitButton}
          onClick={handleAction}
        >
          {actionButtonText}
        </Button>
      )}
      {showSubmitButton && (
        <Button
          type="button"
          size="small"
          isFullWidth={showActionButton}
          onClick={handleSubmit}
        >
          {submitButtonText}
        </Button>
      )}
    </div>
  );
};

export default PickerFooter;
