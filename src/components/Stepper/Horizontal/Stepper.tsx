'use client';
import React, { type FC, type PropsWithChildren } from 'react';
import { StepperContext } from './context';
import type { HorizontalStepperSize, HorizontalStepperStepOrientation } from './type';

export interface HorizontalStepperProps {
  stepOrientation?: HorizontalStepperStepOrientation;
  size?: HorizontalStepperSize;
  activeStep?: number;
}

const HorizontalStepper: FC<PropsWithChildren<HorizontalStepperProps>> = (props) => {
  const { stepOrientation = 'horizontal', size = 'medium', activeStep = 0, children } = props;

  const childrenArray = React.Children.toArray(children).filter(
    React.isValidElement,
  ) as React.ReactElement[];

  const currentStepIndex = activeStep ?? 0;

  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      index,
      ...step.props,
    });
  });

  return (
    <StepperContext.Provider value={{ activeStep: currentStepIndex, stepOrientation, size }}>
      <div className="dgs-ui-kit-flex dgs-ui-kit-flex-row dgs-ui-kit-gap-5 no-scrollbar dgs-ui-kit-overflow-x-auto">
        {steps}
      </div>
    </StepperContext.Provider>
  );
};

export default HorizontalStepper;
