import type { SVGProps } from 'react';

interface ProgressDoughnutPropsBase {
  color?: 'primary' | 'secondary' | 'gray' | 'warning';
  current: number;
  total: number;
  size?: number;
  showText?: boolean;
  strokeSize?: number;
  svgProps?: SVGProps<SVGSVGElement>;
}

interface DoughnutWithoutText {
  showText?: false;
  textClassName?: never;
}

interface DoughnutWithText {
  showText: true;
  textClassName?: string;
}

export type ProgressDoughnutProps = ProgressDoughnutPropsBase &
  (DoughnutWithText | DoughnutWithoutText);
