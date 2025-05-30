import clsx from 'clsx';
import { type FC } from 'react';

import '@/src/styles.css';

export interface ProgressBarProps {
  title: string;
  color?: 'primary' | 'secondary';
  current: number;
  total: number;
  currentShowType?: 'percentage' | 'value';
  className?: string;
}
const ProgressBar: FC<ProgressBarProps> = (props) => {
  const {
    title,
    current,
    total = 100,
    color = 'primary',
    currentShowType = 'percentage',
    className,
  } = props;

  const percentage = (current / total) * 100;

  return (
    <div className={clsx('dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-2', className)}>
      <div
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between dgs-ui-kit-font-p2-regular',
          {
            'dgs-ui-kit-text-primary-500': color === 'primary',
            'dgs-ui-kit-text-secondary-500': color === 'secondary',
          },
        )}
      >
        <span>{title}</span>
        <span className="ss02">
          {currentShowType === 'percentage'
            ? `${Math.floor(percentage)}%`
            : `${current} از ${total}`}
        </span>
      </div>
      <div
        className={clsx('dgs-ui-kit-h-1 dgs-ui-kit-rounded-sm dgs-ui-kit-relative', {
          'dgs-ui-kit-bg-primary-100': color === 'primary',
          'dgs-ui-kit-bg-secondary-100': color === 'secondary',
        })}
      >
        <div
          className={clsx(
            'dgs-ui-kit-rounded-sm dgs-ui-kit-absolute dgs-ui-kit-right-0 dgs-ui-kit-h-full dgs-ui-kit-top-0',
            {
              'dgs-ui-kit-bg-primary-500': color === 'primary',
              'dgs-ui-kit-bg-secondary-500': color === 'secondary',
            },
          )}
          style={{
            width: current > total ? '100%' : `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
