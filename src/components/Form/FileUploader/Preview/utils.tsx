import clsx from 'clsx';
import type { ButtonProps } from '../../../Button';
import Button from '../../../Button';
import type { ActionConfig, FilePreviewProps, FileType } from '../types';

export function renderPreviewDefaultAction(
  button: FilePreviewProps['leftButton'],
  file: FileType,
  defaults?: ActionConfig,
) {
  if (!button) return null;

  return (
    <Button
      className={clsx(
        'dgsuikit:opacity-50 dgsuikit:z-10',
        defaults?.className,
        (button as ButtonProps)?.className,
      )}
      type="button"
      rightIcon={defaults?.icon}
      size="small"
      {...defaults}
      {...(typeof button === 'boolean' ? {} : button)}
      onClick={(e) => {
        if (typeof button !== 'boolean' && typeof button.onClick === 'function')
          button.onClick(file, e);
      }}
    >
      {(button as ButtonProps)?.children}
    </Button>
  );
}

export function getPreviewBorder(loading: FileType['loading'], status: FileType['status']) {
  return clsx(
    'dgsuikit:border dgsuikit:border-transparent dgsuikit:rounded-lg',
    status && status !== 'default' && 'dgsuikit:p-1',
    {
      'dgsuikit:!border-error-500': !loading && status === 'error',
      'dgsuikit:!border-warning-600': !loading && status === 'warning',
    },
  );
}
