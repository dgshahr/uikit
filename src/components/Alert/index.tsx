'use client';
import clsx from 'clsx';
import { useState, type ReactNode } from 'react';
import IconCheckCircleBold from '@/src/icons/IconCheckCircleBold';
import IconCloseRemove from '@/src/icons/IconCloseRemove';
import IconDangerBold from '@/src/icons/IconDangerBold';
import IconInfoCircleBold from '@/src/icons/IconInfoCircleBold';
import { alertVariantClassNames, alertSizeClassNames } from './variants';
import Button, { type ButtonProps } from '../Button';

import '@/src/styles.css';

interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
  text: string;
}

export interface AlertProps {
  variant?: 'warning' | 'primary' | 'error' | 'success' | 'gray';
  size?: 'large' | 'small';
  title?: string;
  text: ReactNode;
  primaryButton?: AlertButtonProps;
  outlineButton?: AlertButtonProps;
  closable?: boolean;
  showTitleIcon?: boolean;
  className?: string;
}

function getAlertIcon(
  variant: Required<AlertProps>['variant'],
  size: Required<AlertProps>['size'],
) {
  let IconComponent = IconInfoCircleBold;
  if (variant === 'error') IconComponent = IconDangerBold;
  else if (variant === 'success') IconComponent = IconCheckCircleBold;

  return (
    <IconComponent
      className={clsx(
        'dgs-ui-kit-shrink-0 dgs-ui-kit-my-[2px]',
        alertVariantClassNames.icon[variant],
      )}
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
    showTitleIcon = true,
    className,
  } = props;
  const [show, setShow] = useState(true);

  if (show)
    return (
      <div
        className={clsx(
          'dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-gap-x-3 dgs-ui-kit-rounded-xl dgs-ui-kit-border dgs-ui-kit-border-solid',
          alertVariantClassNames.container[variant],
          alertSizeClassNames.container[size],
          className,
        )}
      >
        {showTitleIcon && getAlertIcon(variant, size)}
        <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-flex-1">
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
            <div
              className={clsx(
                'dgs-ui-kit-flex dgs-ui-kit-gap-x-2 dgs-ui-kit-items-center',
                size === 'large' ? 'dgs-ui-kit-mt-4' : 'dgs-ui-kit-mt-3',
              )}
            >
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
            className="dgs-ui-kit-shrink-0 dgs-ui-kit-my-[2px] dgs-ui-kit-h-fit"
            onClick={() => setShow(false)}
          >
            <IconCloseRemove
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
