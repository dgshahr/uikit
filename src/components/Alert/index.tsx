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
      className={clsx('dgsuikit:shrink-0 dgsuikit:my-[2px]', alertVariantClassNames.icon[variant])}
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
          'dgsuikit:w-full dgsuikit:flex dgsuikit:gap-x-3 dgsuikit:rounded-xl dgsuikit:border dgsuikit:border-solid',
          alertVariantClassNames.container[variant],
          alertSizeClassNames.container[size],
          className,
        )}
      >
        {showTitleIcon && getAlertIcon(variant, size)}
        <div className="dgsuikit:flex dgsuikit:flex-col dgsuikit:flex-1">
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
                'dgsuikit:flex dgsuikit:gap-x-2 dgsuikit:items-center',
                size === 'large' ? 'dgsuikit:mt-4' : 'dgsuikit:mt-3',
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
            className="dgsuikit:shrink-0 dgsuikit:my-[2px] dgsuikit:h-fit"
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
