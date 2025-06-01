'use client';
import clsx from 'clsx';
import React, { type FC, type PropsWithChildren, type ReactElement } from 'react';
import { StepperContext } from './context';
import type { HorizontalStepProps } from './Step';
import type { HorizontalStepperSize, HorizontalStepperStepOrientation } from './type';

export interface HorizontalStepperProps {
  stepOrientation?: HorizontalStepperStepOrientation;
  size?: HorizontalStepperSize;
  activeStep?: number;
  classname?: string;
}

const HorizontalStepper: FC<PropsWithChildren<HorizontalStepperProps>> = (props) => {
  const {
    stepOrientation = 'horizontal',
    size = 'medium',
    activeStep = 0,
    children,
    classname,
  } = props;

  const childrenArray = React.Children.toArray(children).filter(React.isValidElement);

  const currentStepIndex = activeStep ?? 0;

  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      index,
      ...(step as ReactElement<HorizontalStepProps>).props,
    });
  });

  return (
    <StepperContext.Provider value={{ activeStep: currentStepIndex, stepOrientation, size }}>
      <div
        className={clsx(
          classname,
          'dgsuikit:flex dgsuikit:flex-row dgsuikit:gap-5 dgsuikit:no-scrollbar dgsuikit:overflow-x-auto',
        )}
      >
        {steps}
      </div>
    </StepperContext.Provider>
  );
};

export default HorizontalStepper;
