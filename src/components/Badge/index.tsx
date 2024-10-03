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
  const defaultClassName =
    'dgs-ui-kit-inline-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-rounded-[20px]';

  const typeClassName: Record<
    Required<BadgeProps>['type'],
    Record<Required<BadgeProps>['color'], string>
  > = {
    twoTone: {
      primary: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-600',
      secondary: 'dgs-ui-kit-bg-secondary-100 dgs-ui-kit-text-secondary-700',
      gray: 'dgs-ui-kit-bg-gray-100 dgs-ui-kit-text-gray-600',
      success: 'dgs-ui-kit-bg-success-50 dgs-ui-kit-text-success-800',
      error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-text-error-600',
      warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-text-warning-700',
    },
    solid: {
      primary: 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white',
      secondary: 'dgs-ui-kit-bg-secondary-600 dgs-ui-kit-text-white',
      gray: 'dgs-ui-kit-bg-gray-600 dgs-ui-kit-text-white',
      success: 'dgs-ui-kit-bg-success-600 dgs-ui-kit-text-white',
      error: 'dgs-ui-kit-bg-error-500 dgs-ui-kit-text-white',
      warning: 'dgs-ui-kit-bg-warning-500 dgs-ui-kit-text-black',
    },
  };

  const textSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small: 'dgs-ui-kit-font-oveline-demibold dgs-ui-kit-py-1 dgs-ui-kit-px-2 dgs-ui-kit-gap-[2px]',
    medium:
      'dgs-ui-kit-font-caption-demibold dgs-ui-kit-py-1 dgs-ui-kit-px-[10px] dgs-ui-kit-gap-1',
    large: 'dgs-ui-kit-font-button-small dgs-ui-kit-py-2 dgs-ui-kit-px-4 dgs-ui-kit-gap-[6px]',
  };

  const numberSizeClassName: Record<Required<BadgeProps>['size'], string> = {
    small:
      'dgs-ui-kit-font-caption-demibold dgs-ui-kit-py-[2px] dgs-ui-kit-px-[6px] dgs-ui-kit-min-w-5',
    medium: 'dgs-ui-kit-font-p3-medium dgs-ui-kit-px-[6px] dgs-ui-kit-min-w-6',
    large: 'dgs-ui-kit-font-h5-bold dgs-ui-kit-py-[2px] dgs-ui-kit-px-2 dgs-ui-kit-min-w-8',
  };

  return [
    defaultClassName,
    typeClassName[options.type][options.color],
    options.valueType === 'text'
      ? textSizeClassName[options.size]
      : numberSizeClassName[options.size] + ' ss02',
    options.className.length > 0 ? options.className : '',
  ]
    .slice()
    .join(' ');
}

function getIconSize(badgSize: Required<BadgeProps>['size']) {
  if (badgSize === 'small') return 'dgs-ui-kit-w-3 dgs-ui-kit-h-3';
  if (badgSize === 'medium') return 'dgs-ui-kit-w-[14px] dgs-ui-kit-h-[14px]';
  return 'dgs-ui-kit-w-4 dgs-ui-kit-h-4';
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
