import clsx from 'clsx';
import type { FC } from 'react';
import type { ProgressDoughnutProps } from './types';

const COLORS_CLASSES: Record<
  Required<ProgressDoughnutProps>['color'],
  { empty: string; filled: string }
> = {
  primary: {
    empty: 'dgs-ui-kit-stroke-primary-100',
    filled: 'dgs-ui-kit-stroke-primary-500',
  },
  secondary: {
    empty: 'dgs-ui-kit-stroke-secondary-100',
    filled: 'dgs-ui-kit-stroke-secondary-600',
  },
  gray: {
    empty: 'dgs-ui-kit-stroke-gray-400',
    filled: 'dgs-ui-kit-stroke-gray-50',
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
        className={clsx(COLORS_CLASSES[color].filled, 'dgs-ui-kit-transition-all')}
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
            'dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-600 ss02',
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
