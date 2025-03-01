import React, { useEffect, useRef } from 'react';
import { StepperContext } from './context';
import type { HOCFunctionalComponent, StepperSize, StepperStepOrientation } from './type';

interface StepperProps {
  orientation?: StepperStepOrientation;
  size?: StepperSize;
  activeStep?: number;
}

const STEPPER_DEFAULT_PROPS: Required<StepperProps> = {
  orientation: 'horizontal',
  size: 'medium',
  activeStep: 0,
};

const Stepper: HOCFunctionalComponent<StepperProps> = (props) => {
  const _props = Object.assign({}, STEPPER_DEFAULT_PROPS, props);
  const { children, activeStep, orientation, size } = _props;

  const childrenArray = React.Children.toArray(children).filter(
    React.isValidElement,
  ) as React.ReactElement[];

  const stepsCount = childrenArray.length;

  const stepRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    Array(stepsCount)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>()),
  );

  const currentStepIndex = Math.max(0, Math.min(stepsCount, activeStep));

  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      ref: stepRefs.current[index],
      index,
      ...step.props,
    });
  });

  useEffect(() => {
    if (stepRefs.current[currentStepIndex]) {
      stepRefs.current[currentStepIndex].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [currentStepIndex]);

  return (
    <StepperContext.Provider
      value={{ activeStep: currentStepIndex, orientation, size, totalSteps: steps.length }}
    >
      <div className="dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-flex-row dgs-ui-kit-gap-5 no-scrollbar dgs-ui-kit-overflow-x-auto">
        {steps}
      </div>
    </StepperContext.Provider>
  );
};

export default Stepper;
