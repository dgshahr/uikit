import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { useStepperContext } from './context';
import type { StepperStepStatus, StepperSize } from './type';

interface StepIconProps {
  status: StepperStepStatus;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

const stepIconSizeClassNameMap: Record<StepperStepStatus, string> = {
  active: 'dgs-ui-kit-text-secondary-400 dgs-ui-kit-rounded-lg',
  current: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-400 dgs-ui-kit-rounded-lg',
  inactive: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-400 dgs-ui-kit-rounded-lg',
};

const stepIconStatusClassNameMap: Record<StepperSize, string> = {
  medium: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-xl',
  small: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-lg',
};

const StepIcon: FC<StepIconProps> = (props) => {
  const { status, icon, activeIcon } = props;

  const { size } = useStepperContext();
  const ActiveIcon = activeIcon ?? icon;
  const IconComponent = status === 'current' ? ActiveIcon : icon;

  const classnames = clsx(
    stepIconSizeClassNameMap[status],
    stepIconStatusClassNameMap[size],
    'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-min-w-10',
  );

  return <div className={classnames}>{IconComponent}</div>;
};

export default StepIcon;
