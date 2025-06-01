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
  classname?: string;
}

const stepStatusClassnameMap: Record<HorizontalStepperStepStatus, string> = {
  complete: 'dgsuikit:text-secondary-500',
  current: 'dgsuikit:text-primary-500 dgsuikit:font-medium dgsuikit:font-semibold',
  incomplete: 'dgsuikit:text-gray-400',
};

const stepSizeClassnameMap: Record<HorizontalStepperSize, string> = {
  small: 'dgsuikit:text-sm',
  medium: 'dgsuikit:text-base',
};

const stepOrientationClassnameMap: Record<HorizontalStepperStepOrientation, string> = {
  horizontal: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2',
  vertical: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:flex-col',
};

const HorizontalStep: FC<HorizontalStepProps> = (props) => {
  const {
    index,
    title,
    activeTitle,
    completeTitle,
    subTitle,
    icon,
    activeIcon,
    completeIcon,
    classname,
  } = props;

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

  const containerClassname = clsx(
    'dgsuikit:flex dgsuikit:flex-grow dgsuikit:min-w-max',
    classname,
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
        className={containerClassname}
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
            'dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:mt-0',
            stepOrientation === 'vertical' && 'dgsuikit:items-center',
          )}
        >
          {index === activeStep && (
            <p className="dgsuikit:font-normal dgsuikit:text-gray-400">{subTitle}</p>
          )}
          <p className="dgsuikit:text-center">{stepTitle}</p>
        </div>
      </div>
    </>
  );
};

export default HorizontalStep;
