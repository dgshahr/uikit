import clsx from 'clsx';
import Button, { type ButtonProps } from '../Button';
import { alertVariantClassNames, alertSizeClassNames } from './variants';
import { useState } from 'react';
import DangerBoldIcon from '@/src/icons/DangerBold';
import InfoCircleBoldIcon from '@/src/icons/InfoCircleBold';
import CheckCircleBoldIcon from '@/src/icons/CheckCircleBold';
import CloseRemoveIcon from '@/src/icons/CloseRemove';

import '@/src/styles.css';

interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
  text: string;
}

export interface AlertProps {
  variant?: 'warning' | 'primary' | 'error' | 'success' | 'gray';
  size?: 'large' | 'small';
  title?: string;
  text: string;
  primaryButton?: AlertButtonProps;
  outlineButton?: AlertButtonProps;
  closable?: boolean;
  className?: string;
}

function getAlertIcon(
  variant: Required<AlertProps>['variant'],
  size: Required<AlertProps>['size'],
) {
  let IconComponent = InfoCircleBoldIcon;
  if (variant === 'error') IconComponent = DangerBoldIcon;
  else if (variant === 'success') IconComponent = CheckCircleBoldIcon;

  return (
    <IconComponent
      className={clsx('shrink-0 my-[2px]', alertVariantClassNames.icon[variant])}
      width={alertSizeClassNames.icon[size]}
      height={alertSizeClassNames.icon[size]}
    />
  );
}

const Alert = (props: AlertProps) => {
  const {
    variant = 'primary',
    size = 'small',
    title,
    text,
    primaryButton,
    outlineButton,
    closable,
    className,
  } = props;
  const [show, setShow] = useState(true);

  if (show)
    return (
      <div
        className={clsx(
          'w-full flex gap-x-3 rounded-xl border border-solid',
          alertVariantClassNames.container[variant],
          alertSizeClassNames.container[size],
          className,
        )}
      >
        {getAlertIcon(variant, size)}
        <div className="flex flex-col flex-1">
          {Boolean(title) && (
            <div
              className={clsx(
                alertVariantClassNames.title[variant],
                alertSizeClassNames.title[size],
              )}
            >
              {title}
            </div>
          )}
          <p className={clsx(alertVariantClassNames.text[variant], alertSizeClassNames.text[size])}>
            {text}
          </p>
          {(Boolean(primaryButton?.text) || Boolean(outlineButton?.text)) && (
            <div className={clsx('flex gap-x-2 items-center', size === 'large' ? 'mt-4' : 'mt-3')}>
              {Boolean(primaryButton?.text) && (
                <Button
                  variant="primary"
                  color={variant}
                  size="small"
                  {...primaryButton}
                >
                  {primaryButton?.text}
                </Button>
              )}
              {Boolean(outlineButton?.text) && (
                <Button
                  variant="outline"
                  color={variant}
                  size="small"
                  {...outlineButton}
                >
                  {outlineButton?.text}
                </Button>
              )}
            </div>
          )}
        </div>
        {closable && (
          <button
            className="shrink-0 my-[2px] h-fit"
            onClick={() => setShow(false)}
          >
            <CloseRemoveIcon
              className={clsx(alertVariantClassNames.close[variant])}
              width={alertSizeClassNames.close[size]}
              height={alertSizeClassNames.close[size]}
            />
          </button>
        )}
      </div>
    );

  return null;
};

export default Alert;
