import clsx from 'clsx';
import type { FC } from 'react';
import type { ProgressDoughnutProps } from './types';

const COLORS_CLASSES: Record<
  Required<ProgressDoughnutProps>['color'],
  { empty: string; filled: string }
> = {
  primary: {
    empty: 'dgsuikit:stroke-primary-100',
    filled: 'dgsuikit:stroke-primary-500',
  },
  secondary: {
    empty: 'dgsuikit:stroke-secondary-100',
    filled: 'dgsuikit:stroke-secondary-600',
  },
  gray: {
    empty: 'dgsuikit:stroke-gray-400',
    filled: 'dgsuikit:stroke-gray-50',
  },
  warning: {
    empty: 'dgsuikit:stroke-warning-100',
    filled: 'dgsuikit:stroke-warning-500',
  },
};

const ProgressDoughnut: FC<ProgressDoughnutProps> = (props) => {
  const {
    color = 'primary',
    current,
    total,
    size = 48,
    showText,
    strokeSize = 6,
    svgProps,
    textClassName,
  } = props;
  const protectedCurrent = Math.min(Math.max(current, 0), total);
  const percentage = (protectedCurrent / total) * 100;
  const radius = (size - strokeSize) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      {...svgProps}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className={COLORS_CLASSES[color].empty}
        strokeWidth={strokeSize}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className={clsx(COLORS_CLASSES[color].filled, 'dgsuikit:transition-all')}
        strokeWidth={strokeSize}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {showText && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={clsx(
            'dgsuikit:font-caption-regular dgsuikit:text-gray-600 dgsuikit:ss02',
            textClassName,
          )}
        >
          {protectedCurrent} از {total}
        </text>
      )}
    </svg>
  );
};

export default ProgressDoughnut;
