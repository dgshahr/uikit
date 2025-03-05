import type { HorizontalStepperStepStatus } from './type';

const getStepStatus = (activeStep: number, index: number): HorizontalStepperStepStatus => {
  if (activeStep === index) return 'current';
  if (activeStep > index) return 'complete';
  return 'incomplete';
};

export { getStepStatus };
