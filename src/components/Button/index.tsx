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

const REMOVE_OPACITY_CLASS = 'dgsuikit:opacity-0';

function styleButton({
  variant = 'primary',
  color = 'primary',
  isFullWidth,
  className,
  size = 'medium',
  children,
}: ButtonProps) {
  const defaultClassName =
    'dgsuikit:border dgsuikit:border-solid dgsuikit:relative dgsuikit:rounded-lg dgsuikit:min-w-max dgsuikit:h-fit dgsuikit:disabled:cursor-not-allowed dgsuikit:transition-all duration-300 dgsuikit:flex dgsuikit:items-center dgsuikit:disabled:opacity-40';

  return [
    defaultClassName,
    isFullWidth ? 'dgsuikit:w-full dgsuikit:justify-center' : 'dgsuikit:w-fit',
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
            'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full',
            { 'dgsuikit:ml-2': children },
            { [REMOVE_OPACITY_CLASS]: isLoading },
          )}
        >
          {rightIcon}
        </span>
      )}
      {children && <div className={clsx({ [REMOVE_OPACITY_CLASS]: isLoading })}>{children}</div>}
      {isLoading && (
        <div className="dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:w-full dgsuikit:h-full dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center">
          <div className="dot-flashing" />
        </div>
      )}
      {leftIcon && (
        <span
          className={clsx(
            'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full',
            { 'dgsuikit:mr-2': children },
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
