import clsx from 'clsx';
import type { ButtonProps } from '../../../Button';
import Button from '../../../Button';
import type { FilePreviewProps, FileType } from '../types';

export function renderPreviewDefaultAction(
  button: FilePreviewProps['leftButton'],
  file: FileType,
  defaults?: Omit<ButtonProps, 'rightIcon' | 'leftIcon'> & {
    icon?: ButtonProps['rightIcon'];
  },
) {
  if (!button) return null;

  return (
    <Button
      className={clsx(
        'dgs-ui-kit-opacity-50 dgs-ui-kit-z-10',
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
    'dgs-ui-kit-border dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
    status && status !== 'default' && 'dgs-ui-kit-p-1',
    {
      '!dgs-ui-kit-border-error-500': !loading && status === 'error',
      '!dgs-ui-kit-border-warning-600': !loading && status === 'warning',
    },
  );
}
