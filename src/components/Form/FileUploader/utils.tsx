import clsx from 'clsx';
import type { FilePreviewProps } from './types';
import type { ButtonProps } from '../../Button';
import Button from '../../Button';

export function renderPreviewDefaultAction(
  button: FilePreviewProps['leftButton'],
  defaults: {
    color: ButtonProps['color'];
    icon: ButtonProps['rightIcon'];
    className: ButtonProps['className'];
  },
) {
  if (!button) return null;

  const { color, icon, className } = defaults;

  return (
    <Button
      className={clsx(
        '!dgs-ui-kit-absolute dgs-ui-kit-opacity-50 dgs-ui-kit-z-10',
        className,
        (button as ButtonProps)?.className,
      )}
      type="button"
      rightIcon={icon}
      color={color}
      size="small"
      {...(typeof button === 'boolean' ? {} : button)}
    >
      {(button as ButtonProps)?.children}
    </Button>
  );
}
