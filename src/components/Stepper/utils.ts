import type { StepperStepStatus } from './type';

const getStepStatus = (activeStep: number, index: number): StepperStepStatus => {
  if (activeStep === index) return 'current';
  if (activeStep > index) return 'active';
  return 'inactive';
};

export { getStepStatus };
