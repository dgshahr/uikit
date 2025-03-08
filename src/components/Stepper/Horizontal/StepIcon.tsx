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
  complete: 'dgs-ui-kit-text-secondary-400 dgs-ui-kit-rounded-lg',
  current: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-400 dgs-ui-kit-rounded-lg',
  incomplete: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-400 dgs-ui-kit-rounded-lg',
};

const stepIconStatusClassNameMap: Record<HorizontalStepperSize, string> = {
  medium: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-xl',
  small: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-lg',
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
    'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-min-w-10',
  );

  return <div className={classnames}>{IconComponent}</div>;
};

export default StepIcon;
