import clsx from 'clsx';
import type { FC, JSX, PropsWithChildren } from 'react';
import { iconOnlyButtonSizeStyle, sizeStyle, variantStyle } from './variants';

import '@/src/styles.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  color?: 'primary' | 'warning' | 'error' | 'success' | 'gray';
  isFullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isLoading?: boolean;
}

const REMOVE_OPACITY_CLASS = 'dgs-ui-kit-opacity-0';

function styleButton({
  variant = 'primary',
  color = 'primary',
  isFullWidth,
  className,
  size = 'medium',
  children,
}: ButtonProps) {
  const defaultClassName =
    'dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-relative dgs-ui-kit-rounded-lg dgs-ui-kit-min-w-max dgs-ui-kit-h-fit disabled:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-transition-all duration-300 dgs-ui-kit-flex dgs-ui-kit-items-center disabled:dgs-ui-kit-opacity-40';

  return [
    defaultClassName,
    isFullWidth ? 'dgs-ui-kit-w-full dgs-ui-kit-justify-center' : 'dgs-ui-kit-w-fit',
    variantStyle[variant][color],
    children ? sizeStyle[size] : iconOnlyButtonSizeStyle[size],
    Number(className?.length) > 0 && className,
  ]
    .slice()
    .join(' ');
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'primary',
  color = 'primary',
  isFullWidth,
  className,
  size,
  leftIcon,
  rightIcon,
  isLoading,
  children,
  ...props
}) => {
  return (
    <button
      className={styleButton({
        variant,
        color,
        isFullWidth,
        className,
        size,
        children,
      })}
      {...props}
    >
      {rightIcon && (
        <span
          className={clsx(
            'dgs-ui-kit-block icon-button [&_svg]:dgs-ui-kit-size-full',
            { 'dgs-ui-kit-ml-2': children },
            { [REMOVE_OPACITY_CLASS]: isLoading },
          )}
        >
          {rightIcon}
        </span>
      )}
      {children && <div className={clsx({ [REMOVE_OPACITY_CLASS]: isLoading })}>{children}</div>}
      {isLoading && (
        <div className="dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-w-full dgs-ui-kit-h-full dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center">
          <div className="dot-flashing" />
        </div>
      )}
      {leftIcon && (
        <span
          className={clsx(
            'dgs-ui-kit-block icon-button [&_svg]:dgs-ui-kit-size-full',
            { 'dgs-ui-kit-mr-2': children },
            { [REMOVE_OPACITY_CLASS]: isLoading },
          )}
        >
          {leftIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
