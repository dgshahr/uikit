import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react';
import omitObject from '@/src/utils/omitObjects';
import Badge, { type BadgeProps } from '../Badge';

import '@/src/styles.css';

interface ChipPropsBase {
  label: string | ReactNode;
  size?: 'xsmall' | 'small' | 'large';
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  filled?: boolean;
  badgeNumber?: number;
  isActive?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'gray';
}

export type ChipProps = ChipPropsBase &
  (
    | ({ clickable: true } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ clickable?: false } & HTMLAttributes<HTMLDivElement>)
  );

const colorVariants = {
  primary: {
    filled:
      'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-500 dgsuikit:border-primary-100 dgsuikit:bg-primary-50',
    base: 'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
    active: 'dgsuikit:!border-primary-500 dgsuikit:!text-primary-500',
  },
  gray: {
    filled:
      'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-600 dgsuikit:border-gray-200 dgsuikit:bg-gray-50',
    base: 'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-gray-600 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
    active: 'dgsuikit:!border-gray-500 dgsuikit:!text-gray-600',
  },
};

const disabledClass = 'dgsuikit:opacity-40 dgsuikit:cursor-not-allowed';

const badgeSizeMap: Record<NonNullable<ChipPropsBase['size']>, BadgeProps['size']> = {
  xsmall: 'small',
  small: 'small',
  large: 'medium',
};

function styleChip({
  size = 'small',
  filled,
  color = 'primary',
  className,
  disabled,
  isActive,
}: ChipProps) {
  const defaultClass =
    'dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-full dgsuikit:transition dgsuikit:hover:ring-4 dgsuikit:ring-gray-100 dgsuikit:flex dgsuikit:items-center';

  const sizeClass: Record<NonNullable<ChipPropsBase['size']>, string> = {
    xsmall:
      'dgsuikit:gap-0.5 dgsuikit:py-0.5 dgsuikit:px-2 dgsuikit:font-p3-medium dgsuikit:[&_svg]:size-4',
    small:
      'dgsuikit:gap-1 dgsuikit:py-1 dgsuikit:px-3 dgsuikit:font-p2-medium dgsuikit:[&_svg]:size-4',
    large:
      'dgsuikit:gap-2 dgsuikit:py-2.5 dgsuikit:px-5 dgsuikit:font-p1-medium dgsuikit:[&_svg]:size-5',
  };

  const variantClass = filled ? colorVariants[color].filled : colorVariants[color].base;

  return clsx(
    defaultClass,
    sizeClass[size],
    variantClass,
    disabled && disabledClass,
    isActive && colorVariants[color].active,
    className,
  );
}

const Chip: FC<ChipProps> = (props) => {
  const { label, rightIcon = null, leftIcon = null, badgeNumber, clickable, ...rest } = props;

  const Wrapper = clickable ? ('button' as 'div') : 'div';
  const containerRestProps = omitObject(rest, ['filled', 'size', 'isActive', 'color']);

  return (
    <Wrapper
      {...(containerRestProps as HTMLAttributes<HTMLDivElement | HTMLButtonElement>)}
      className={clsx(styleChip(props), '')}
    >
      {rightIcon}
      {label}
      {badgeNumber && (
        <Badge
          value={badgeNumber}
          valueType="number"
          color={props.color}
          size={badgeSizeMap[props.size || 'small']}
        />
      )}
      {leftIcon}
    </Wrapper>
  );
};

export default Chip;
