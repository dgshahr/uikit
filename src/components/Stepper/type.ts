import type { FunctionComponent, PropsWithChildren } from 'react';

export type HOCFunctionalComponent<T = object> = FunctionComponent<PropsWithChildren<T>>;
export type StepperSize = 'small' | 'medium';
export type StepperStepOrientation = 'vertical' | 'horizontal';
export type StepperStepStatus = 'active' | 'inactive' | 'current';
