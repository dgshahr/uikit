import { englishToPersian } from '@/src/utils/convertNumbers';
import type { StepperStepStatus } from './type';

const getStepStatus = (activeStep: number, index: number): StepperStepStatus => {
  if (activeStep === index) return 'current';
  if (activeStep > index) return 'active';
  return 'inactive';
};

const isNullish = (value: unknown) => typeof value === 'undefined' || value === null;

const getStepSubtitle = (index: number, totalSteps: number): string => {
  if (totalSteps === index + 1) return 'مرحله پایانی';

  return englishToPersian(`مرحله ${index + 1} از ${totalSteps}`);
};

export { getStepStatus, isNullish, getStepSubtitle };
