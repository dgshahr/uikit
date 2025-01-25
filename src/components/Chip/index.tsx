import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react';

import '@/src/styles.css';
import Badge from '../Badge';

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
    'dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-full dgs-ui-kit-transition hover:dgs-ui-kit-ring-4 dgs-ui-kit-ring-gray-100 dgs-ui-kit-flex dgs-ui-kit-items-center';

  const sizeClass: Record<Required<ChipPropsBase>['size'], string> = {
    small:
      'dgs-ui-kit-gap-1 dgs-ui-kit-py-1 dgs-ui-kit-px-3 dgs-ui-kit-font-p2-medium [&_svg]:dgs-ui-kit-size-4',
    large:
      'dgs-ui-kit-gap-2 dgs-ui-kit-py-2.5 dgs-ui-kit-px-5 dgs-ui-kit-font-p1-medium [&_svg]:dgs-ui-kit-size-5',
  };

  const variantClass: Record<'filled' | 'default', string> = {
    default:
      'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-primary-500 dgs-ui-kit-border-gray-200 hover:dgs-ui-kit-border-gray-300',
    filled: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500 dgs-ui-kit-border-primary-100',
  };

  const disabledClass = 'dgs-ui-kit-opacity-40 dgs-ui-kit-cursor-not-allowed';
  const activeClass = '!dgs-ui-kit-border-primary-500 !dgs-ui-kit-text-primary-500';

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

  return (
    <Wrapper
      className={styleChip(props)}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
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
