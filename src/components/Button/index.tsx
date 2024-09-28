import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { iconOnlyButtonSizeStyle, sizeStyle, variantStyle } from './variants';

import './Button.css';

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

const REMOVE_OPACITY_CLASS = 'opacity-0';

function styleButton({
  variant = 'primary',
  color = 'primary',
  isFullWidth,
  className,
  size = 'medium',
  children,
}: ButtonProps) {
  const defaultClassName =
    'border relative rounded-lg min-w-max h-fit disabled:cursor-not-allowed transition-all duration-300 flex items-center disabled:opacity-40';

  return [
    defaultClassName,
    isFullWidth ? 'w-full justify-center' : 'w-fit',
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
      className={
        styleButton({
          variant,
          color,
          isFullWidth,
          className,
          size,
          children,
        }) + ' rounded-lg'
      }
      {...props}
    >
      {rightIcon && (
        <span
          className={clsx(
            'block icon-button',
            { 'ml-2': children },
            { [REMOVE_OPACITY_CLASS]: isLoading },
          )}
        >
          {rightIcon}
        </span>
      )}
      {children && <div className={clsx({ [REMOVE_OPACITY_CLASS]: isLoading })}>{children}</div>}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="dot-flashing" />
        </div>
      )}
      {leftIcon && (
        <span
          className={clsx(
            'block icon-button',
            { 'mr-2': children },
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
