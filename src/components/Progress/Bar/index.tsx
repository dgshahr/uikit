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
    <div className={clsx('dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-2', className)}>
      <div
        className={clsx(
          'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between dgsuikit:font-p2-regular',
          {
            'dgsuikit:text-primary-500': color === 'primary',
            'dgsuikit:text-secondary-500': color === 'secondary',
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
        className={clsx('dgsuikit:h-1 dgsuikit:rounded-sm dgsuikit:relative', {
          'dgsuikit:bg-primary-100': color === 'primary',
          'dgsuikit:bg-secondary-100': color === 'secondary',
        })}
      >
        <div
          className={clsx(
            'dgsuikit:rounded-sm dgsuikit:absolute dgsuikit:right-0 dgsuikit:h-full dgsuikit:top-0',
            {
              'dgsuikit:bg-primary-500': color === 'primary',
              'dgsuikit:bg-secondary-500': color === 'secondary',
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
