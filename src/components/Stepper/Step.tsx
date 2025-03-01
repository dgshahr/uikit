import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';
import StepperConnector from './Connector';
import { useStepperContext } from './context';
import StepIcon from './StepIcon';
import type { StepperSize, StepperStepOrientation, StepperStepStatus } from './type';
import { getStepStatus, getStepSubtitle, isNullish } from './utils';

export interface StepProps {
  icon: ReactNode;
  activeIcon?: ReactNode;
  title: string;
  index?: number;
}

const stepStatusClassnameMap: Record<StepperStepStatus, string> = {
  active: 'dgs-ui-kit-text-secondary-500',
  current: 'dgs-ui-kit-text-primary-500 dgs-ui-kit-font-medium dgs-ui-kit-font-semibold',
  inactive: 'dgs-ui-kit-text-gray-400',
};

const stepSizeClassnameMap: Record<StepperSize, string> = {
  small: 'dgs-ui-kit-text-sm',
  medium: 'dgs-ui-kit-text-base',
};

const stepOrientationClassnameMap: Record<StepperStepOrientation, string> = {
  horizontal: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
  vertical: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-flex-col',
};

const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const { index, title, icon, activeIcon } = props;

  const context = useStepperContext();
  const { size, activeStep, orientation } = context;

  if (isNullish(index))
    throw new Error(
      `expected index to be a number but instead got: ${index}, you are probably rendering <Step /> component outside of <Stepper />`,
    );

  const status = getStepStatus(activeStep, index);

  const classname = clsx(
    'dgs-ui-kit-flex dgs-ui-kit-flex-grow dgs-ui-kit-min-w-max',
    stepStatusClassnameMap[status],
    stepSizeClassnameMap[size],
    stepOrientationClassnameMap[orientation],
  );

  return (
    <>
      {index !== 0 && <StepperConnector index={index} />}
      <div
        ref={ref}
        className={classname}
      >
        <StepIcon
          status={status}
          size={size}
          icon={icon}
          activeIcon={activeIcon}
        />

        <div
          className={clsx(
            'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-mt-0',
            orientation === 'vertical' ? 'dgs-ui-kit-items-center' : '',
          )}
        >
          {index === activeStep && (
            <p className="dgs-ui-kit-text-xs dgs-ui-kit-font-normal dgs-ui-kit-text-gray-400">
              {getStepSubtitle(index, context.totalSteps)}
            </p>
          )}
          <p className="dgs-ui-kit-text-center">{title}</p>
        </div>
      </div>
    </>
  );
});

Step.displayName = 'Step';

export default Step;
