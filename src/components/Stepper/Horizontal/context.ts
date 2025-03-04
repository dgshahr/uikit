import { createContext, useContext } from 'react';
import type { HorizontalStepperSize, HorizontalStepperStepOrientation } from './type';

interface ContextType {
  activeStep: number;
  stepOrientation: HorizontalStepperStepOrientation;
  size: HorizontalStepperSize;
}

export const StepperContext = createContext<ContextType>({
  activeStep: 1,
  stepOrientation: 'horizontal',
  size: 'medium',
});

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (!context) throw new Error('useStepperContext must be used within a StepperProvider');

  return context;
};
