import type { ReactNode } from 'react';

import '@/src/styles.css';

interface BadgePropsBase {
  type?: 'twoTone' | 'solid';
  color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error' | 'warning';
  size?: 'small' | 'medium' | 'large';
  valueType?: 'text' | 'number';
  value: string | number;
  width?: string | number;
  className?: string;
}

interface BadgePropsWithIcon extends BadgePropsBase {
  valueType?: 'text';
  icon?: ReactNode;
}

interface BadgePropsWithoutIcon extends Omit<BadgePropsBase, 'icon'> {
  valueType: 'number';
}

type BadgeProps = BadgePropsWithIcon | BadgePropsWithoutIcon;

function styleBadge(options: Omit<Required<BadgeProps>, 'value' | 'icon' | 'width'>) {
  const defaultClassName = 'inline-flex items-center justify-center rounded-[20px]';

  const typeClassName: Record<
    Required<BadgeProps>['type'],
    Record<Required<BadgeProps>['color'], string>
  > = {
    twoTone: {
      primary: 'bg-primary-50 text-primary-600',
      secondary: 'bg-secondary-100 text-secondary-700',
      gray: 'bg-gray-100 text-gray-600',
      success: 'bg-success-50 text-success-800',
      error: 'bg-error-50 text-error-600',
      warning: 'bg-warning-50 text-warning-700',
    },
    solid: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-600 text-white',
      gray: 'bg-gray-600 text-white',
      success: 'bg-success-600 text-white',
      error: 'bg-error-500 text-white',
      warning: 'bg-warning-500 text-black',
    },
  };

  const textSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small: 'font-oveline-demibold py-1 px-2 gap-[2px]',
    medium: 'font-caption-demibold py-1 px-[10px] gap-1',
    large: 'font-button-small py-2 px-4 gap-[6px]',
  };

  const numberSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small: 'font-caption-demibold py-[2px] px-[6px] min-w-5',
    medium: 'font-p3-medium px-[6px] min-w-6',
    large: 'font-h5-bold py-[2px] px-2 min-w-8',
  };

  return [
    defaultClassName,
    typeClassName[options.type][options.color],
    options.valueType === 'text'
      ? textSizeClassName[options.size]
      : numberSizeClassName[options.size],
    options.className.length > 0 ? options.className : '',
  ]
    .slice()
    .join(' ');
}

function getIconSize(badgSize: Required<BadgeProps>['size']) {
  if (badgSize === 'small') return 'w-3 h-3';
  if (badgSize === 'medium') return 'w-[14px] h-[14px]';
  return 'w-4 h-4';
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

  const icon = (props as BadgePropsWithIcon).icon;

  return (
    <div
      className={styleBadge({ type, color, size, valueType, className })}
      style={{ width: width ?? 'auto' }}
    >
      {icon && valueType === 'text' && <span className={getIconSize(size)}>{icon}</span>}
      {value}
    </div>
  );
};

export default Badge;
