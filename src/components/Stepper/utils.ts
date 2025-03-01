import type { StepperStepStatus } from './type';

const getStepStatus = (activeStep: number, index: number): StepperStepStatus => {
  if (activeStep === index) return 'current';
  if (activeStep > index) return 'active';
  return 'inactive';
};

const isNullish = (value: unknown) => typeof value === 'undefined' || value === null;

export { getStepStatus, isNullish };
