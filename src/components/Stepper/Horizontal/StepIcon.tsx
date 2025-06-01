import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { useStepperContext } from './context';
import type { HorizontalStepperStepStatus, HorizontalStepperSize } from './type';

interface StepIconProps {
  status: HorizontalStepperStepStatus;
  icon: ReactNode;
  activeIcon?: ReactNode;
  completeIcon?: ReactNode;
}

const stepIconSizeClassNameMap: Record<HorizontalStepperStepStatus, string> = {
  complete: 'dgsuikit:text-secondary-400 dgsuikit:rounded-lg',
  current: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-400 dgsuikit:rounded-lg',
  incomplete: 'dgsuikit:bg-gray-50 dgsuikit:text-gray-400 dgsuikit:rounded-lg',
};

const stepIconStatusClassNameMap: Record<HorizontalStepperSize, string> = {
  medium: 'dgsuikit:w-10 dgsuikit:h-10 dgsuikit:text-xl',
  small: 'dgsuikit:w-10 dgsuikit:h-10 dgsuikit:text-lg',
};

const StepIcon: FC<StepIconProps> = (props) => {
  const { status, icon, activeIcon, completeIcon } = props;

  const { size } = useStepperContext();

  const iconComponentMap: Record<HorizontalStepperStepStatus, ReactNode> = {
    incomplete: icon,
    current: activeIcon,
    complete: completeIcon,
  };

  const IconComponent = iconComponentMap[status] ?? icon;

  const classnames = clsx(
    stepIconSizeClassNameMap[status],
    stepIconStatusClassNameMap[size],
    'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:min-w-10',
  );

  return <div className={classnames}>{IconComponent}</div>;
};

export default StepIcon;
