import type { ReactNode } from 'react';
import '@/src/styles.css';

interface BadgePropsBase {
  type?: 'twoTone' | 'solid';
  color?:
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'success'
    | 'error'
    | 'warning'
    | 'sky'
    | 'violet'
    | 'flamingo';
  size?: 'small' | 'medium' | 'large';
  valueType?: 'text' | 'number';
  value: string | number;
  width?: string | number;
  className?: string;
}

interface BadgePropsWithIcon extends BadgePropsBase {
  valueType?: 'text';
  /** @deprecated Use leftIcon or rightIcon instead */
  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

interface BadgePropsWithoutIcon extends Omit<BadgePropsBase, 'icon' | 'leftIcon' | 'rightIcon'> {
  valueType: 'number';
}

export type BadgeProps = BadgePropsWithIcon | BadgePropsWithoutIcon;

function styleBadge(
  options: Omit<Required<BadgeProps>, 'value' | 'icon' | 'width' | 'leftIcon' | 'rightIcon'>,
) {
  const defaultClassName =
    'dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:rounded-[20px]';

  const typeClassName: Record<
    Required<BadgeProps>['type'],
    Record<Required<BadgeProps>['color'], string>
  > = {
    twoTone: {
      primary: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-600',
      secondary: 'dgsuikit:bg-secondary-100 dgsuikit:text-secondary-700',
      gray: 'dgsuikit:bg-gray-100 dgsuikit:text-gray-600',
      success: 'dgsuikit:bg-success-50 dgsuikit:text-success-800',
      error: 'dgsuikit:bg-error-50 dgsuikit:text-error-600',
      warning: 'dgsuikit:bg-warning-50 dgsuikit:text-warning-700',
      sky: 'dgsuikit:bg-sky-50 dgsuikit:text-sky-700',
      violet: 'dgsuikit:bg-violet-50 dgsuikit:text-violet-800',
      flamingo: 'dgsuikit:bg-flamingo-50 dgsuikit:text-flamingo-700',
    },
    solid: {
      primary: 'dgsuikit:bg-primary-500 dgsuikit:text-white',
      secondary: 'dgsuikit:bg-secondary-600 dgsuikit:text-white',
      gray: 'dgsuikit:bg-gray-600 dgsuikit:text-white',
      success: 'dgsuikit:bg-success-600 dgsuikit:text-white',
      error: 'dgsuikit:bg-error-500 dgsuikit:text-white',
      warning: 'dgsuikit:bg-warning-500 dgsuikit:text-black',
      sky: 'dgsuikit:bg-sky-600 dgsuikit:text-white',
      violet: 'dgsuikit:bg-violet-500 dgsuikit:text-white',
      flamingo: 'dgsuikit:bg-flamingo-500 dgsuikit:text-white',
    },
  };

  const textSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small: 'dgsuikit:font-oveline-demibold dgsuikit:py-1 dgsuikit:px-2 dgsuikit:gap-[2px]',
    medium: 'dgsuikit:font-caption-demibold dgsuikit:py-1 dgsuikit:px-[10px] dgsuikit:gap-1',
    large: 'dgsuikit:font-button-small dgsuikit:py-2 dgsuikit:px-4 dgsuikit:gap-[6px]',
  };

  const numberSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small: 'dgsuikit:font-caption-demibold dgsuikit:py-[2px] dgsuikit:px-[6px] dgsuikit:min-w-5',
    medium: 'dgsuikit:font-p3-medium dgsuikit:px-[6px] dgsuikit:min-w-6',
    large: 'dgsuikit:font-h5-bold dgsuikit:py-[2px] dgsuikit:px-2 dgsuikit:min-w-8',
  };

  return [
    defaultClassName,
    typeClassName[options.type][options.color],
    options.valueType === 'text'
      ? textSizeClassName[options.size]
      : numberSizeClassName[options.size] + ' dgsuikit:ss02',
    options.className.length > 0 ? options.className : '',
  ]
    .slice()
    .join(' ');
}

function getIconSize(badgSize: Required<BadgeProps>['size']) {
  if (badgSize === 'small') return 'dgsuikit:w-3 dgsuikit:h-3';
  if (badgSize === 'medium') return 'dgsuikit:w-[14px] dgsuikit:h-[14px]';
  return 'dgsuikit:w-4 dgsuikit:h-4';
}

const Badge = (props: BadgeProps) => {
  const {
    type = 'solid',
    color = 'primary',
    size = 'medium',
    valueType = 'text',
    value,
    width,
    className = '',
  } = props;

  const { icon, leftIcon, rightIcon } = props as BadgePropsWithIcon;

  if (icon) {
    console.error(
      '[Deprecated Prop Warning] ❗ The "icon" prop in <Badge /> is deprecated and will be removed in a future update. Please use "leftIcon" or "rightIcon" instead.',
    );
  }

  return (
    <div
      className={styleBadge({ type, color, size, valueType, className })}
      style={{ width: width ?? 'auto' }}
    >
      {leftIcon && valueType === 'text' && <span className={getIconSize(size)}>{leftIcon}</span>}
      {icon && valueType === 'text' && <span className={getIconSize(size)}>{icon}</span>}
      {value}
      {rightIcon && valueType === 'text' && <span className={getIconSize(size)}>{rightIcon}</span>}
    </div>
  );
};

export default Badge;
