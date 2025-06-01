import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react';
import omitObject from '@/src/utils/omitObjects';
import Badge from '../Badge';

import '@/src/styles.css';

interface ChipPropsBase {
  label: string | ReactNode;
  size?: 'small' | 'large';
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  filled?: boolean;
  badgeNumber?: number;
  isActive?: boolean;
  disabled?: boolean;
}

export type ChipProps = ChipPropsBase &
  (
    | ({ clickable: true } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ clickable?: false } & HTMLAttributes<HTMLDivElement>)
  );

function styleChip({ size = 'small', filled, className, disabled, isActive }: ChipProps) {
  const defaultClass =
    'dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-full dgsuikit:transition dgsuikit:hover:ring-4 dgsuikit:ring-gray-100 dgsuikit:flex dgsuikit:items-center';

  const sizeClass: Record<Required<ChipPropsBase>['size'], string> = {
    small:
      'dgsuikit:gap-1 dgsuikit:py-1 dgsuikit:px-3 dgsuikit:font-p2-medium dgsuikit:[&_svg]:size-4',
    large:
      'dgsuikit:gap-2 dgsuikit:py-2.5 dgsuikit:px-5 dgsuikit:font-p1-medium dgsuikit:[&_svg]:size-5',
  };

  const variantClass: Record<'filled' | 'default', string> = {
    default:
      'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
    filled: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-500 dgsuikit:border-primary-100',
  };

  const disabledClass = 'dgsuikit:opacity-40 dgsuikit:cursor-not-allowed';
  const activeClass = 'dgsuikit:!border-primary-500 dgsuikit:!text-primary-500';

  return clsx(
    defaultClass,
    sizeClass[size],
    variantClass[filled ? 'filled' : 'default'],
    disabled && disabledClass,
    isActive && activeClass,
    className,
  );
}

const Chip: FC<ChipProps> = (props) => {
  const { label, rightIcon = null, leftIcon = null, badgeNumber, clickable, ...rest } = props;

  const Wrapper = clickable ? ('button' as 'div') : 'div';
  const containerRestProps = omitObject(rest, ['filled', 'size', 'isActive']);

  return (
    <Wrapper
      {...(containerRestProps as HTMLAttributes<HTMLDivElement | HTMLButtonElement>)}
      className={styleChip(props)}
    >
      {rightIcon}
      {label}
      {badgeNumber && (
        <Badge
          value={badgeNumber}
          valueType="number"
        />
      )}
      {leftIcon}
    </Wrapper>
  );
};

export default Chip;
