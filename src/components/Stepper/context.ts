import { createContext, useContext } from 'react';
import type { StepperSize, StepperStepOrientation } from './type';

interface ContextType {
  activeStep: number;
  totalSteps: number;
  stepOrientation: StepperStepOrientation;
  size: StepperSize;
}

export const StepperContext = createContext<ContextType>({
  activeStep: 1,
  totalSteps: 0,
  stepOrientation: 'horizontal',
  size: 'medium',
});

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }

  return context;
};
