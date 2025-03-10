import clsx from 'clsx';
import { useEffect, useRef, type FC, type ReactNode } from 'react';
import isNullish from '@/src/utils/isNullish';
import Connector from './Connector';
import { useStepperContext } from './context';
import StepIcon from './StepIcon';
import type {
  HorizontalStepperSize,
  HorizontalStepperStepOrientation,
  HorizontalStepperStepStatus,
} from './type';
import { getStepStatus } from './utils';

export interface HorizontalStepProps {
  title: string;
  activeTitle?: string;
  completeTitle?: string;
  subTitle?: string;
  icon: ReactNode;
  completeIcon?: ReactNode;
  activeIcon?: ReactNode;
  index?: number;
}

const stepStatusClassnameMap: Record<HorizontalStepperStepStatus, string> = {
  complete: 'dgs-ui-kit-text-secondary-500',
  current: 'dgs-ui-kit-text-primary-500 dgs-ui-kit-font-medium dgs-ui-kit-font-semibold',
  incomplete: 'dgs-ui-kit-text-gray-400',
};

const stepSizeClassnameMap: Record<HorizontalStepperSize, string> = {
  small: 'dgs-ui-kit-text-sm',
  medium: 'dgs-ui-kit-text-base',
};

const stepOrientationClassnameMap: Record<HorizontalStepperStepOrientation, string> = {
  horizontal: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
  vertical: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-flex-col',
};

const HorizontalStep: FC<HorizontalStepProps> = (props) => {
  const { index, title, activeTitle, completeTitle, subTitle, icon, activeIcon, completeIcon } =
    props;

  const ref = useRef<HTMLDivElement>(null);

  const { size, activeStep, stepOrientation } = useStepperContext();

  if (isNullish(index))
    throw new Error(
      `expected index to be a number but instead got: ${index}, you are probably rendering <Step /> component outside of <Stepper />`,
    );

  const status = getStepStatus(activeStep, index);

  const titleMap: Record<HorizontalStepperStepStatus, string | undefined> = {
    current: activeTitle,
    incomplete: title,
    complete: completeTitle,
  };

  const stepTitle = titleMap[status] ?? title;

  const classname = clsx(
    'dgs-ui-kit-flex dgs-ui-kit-flex-grow dgs-ui-kit-min-w-max',
    stepStatusClassnameMap[status],
    stepSizeClassnameMap[size],
    stepOrientationClassnameMap[stepOrientation],
  );

  useEffect(() => {
    if (status === 'current') {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [status]);

  return (
    <>
      {index !== 0 && <Connector index={index} />}
      <div
        className={classname}
        ref={ref}
      >
        <StepIcon
          status={status}
          icon={icon}
          activeIcon={activeIcon}
          completeIcon={completeIcon}
        />

        <div
          className={clsx(
            'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-mt-0',
            stepOrientation === 'vertical' && 'dgs-ui-kit-items-center',
          )}
        >
          {index === activeStep && (
            <p className="dgs-ui-kit-font-normal dgs-ui-kit-text-gray-400">{subTitle}</p>
          )}
          <p className="dgs-ui-kit-text-center">{stepTitle}</p>
        </div>
      </div>
    </>
  );
};

export default HorizontalStep;
