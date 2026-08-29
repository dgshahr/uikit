import clsx from 'clsx';
import { type FC } from 'react';
import '@/src/styles.css';

export interface ProgressStepProps {
  type: 'rtl' | 'center';
  size: 'small' | 'large';
  color: 'primary' | 'secondary';
  title: string;
  currentStep: number;
  totalSteps: number;
  subtitle?: string;
  showSubtitle?: boolean;
  showStepsCount?: boolean;
  className?: string;
  progress?: number;
}
const ProgressStep: FC<ProgressStepProps> = (props) => {
  const {
    type = 'rtl',
    size = 'large',
    title,
    currentStep,
    totalSteps = 5,
    color = 'primary',
    subtitle,
    showSubtitle,
    showStepsCount,
    className,
    progress = 100,
  } = props;

  const safeProgress = Math.min(Math.max(progress, 0), 100);

  const stepWidth = 94 / totalSteps;

  const percentage = 4 + (currentStep - 1) * stepWidth + (safeProgress / 100) * stepWidth;

  const isLarge = size === 'large';
  const isRtl = type === 'rtl';

  return (
    <div className="dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-100">
      <div
        className={clsx(
          'dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-between dgsuikit:gap-3 dgsuikit:px-4',
          className,
        )}
      >
        <div
          className={clsx(
            'dgsuikit:flex dgsuikit:flex-col',
            isLarge && 'dgsuikit:pt-2.5',
            !isRtl && 'dgsuikit:items-center dgsuikit:justify-center',
          )}
        >
          <div className={clsx('dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between')}>
            <span
              className={clsx(
                'dgsuikit:font-p2-regular dgsuikit:text-[14px]',
                {
                  'dgsuikit:text-primary-500': color === 'primary',
                  'dgsuikit:text-secondary-500': color === 'secondary',
                },
                isLarge && 'dgsuikit:font-p1-regular dgsuikit:text-[16px]',
              )}
            >
              {title}
            </span>
            {showStepsCount && isRtl && (
              <p
                className={clsx('dgsuikit:font-p2-regular', isLarge && 'dgsuikit:font-p1-regular')}
              >
                <span
                  className={clsx('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                    'dgsuikit:text-primary-500': color === 'primary',
                    'dgsuikit:text-secondary-500': color === 'secondary',
                  })}
                >
                  {currentStep}
                </span>{' '}
                از{' '}
                <span
                  className={clsx(
                    'dgsuikit:ss02 dgsuikit:font-p2-regular',
                    isLarge && 'dgsuikit:font-p1-regular',
                  )}
                >
                  {totalSteps}
                </span>
              </p>
            )}
          </div>
          {showSubtitle && (
            <span
              className={clsx(
                'dgsuikit:font-caption-regular dgsuikit:text-[11px] dgsuikit:text-gray-500',
                isLarge && 'dgsuikit:font-p3-regular dgsuikit:text-[13px]',
              )}
            >
              {subtitle}
            </span>
          )}
          {showStepsCount && !isRtl && (
            <p className={clsx('dgsuikit:font-p2-regular', isLarge && 'dgsuikit:font-p1-regular')}>
              <span
                className={clsx('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                  'dgsuikit:text-primary-500': color === 'primary',
                  'dgsuikit:text-secondary-500': color === 'secondary',
                })}
              >
                {currentStep}
              </span>{' '}
              از{' '}
              <span
                className={clsx(
                  'dgsuikit:ss02 dgsuikit:font-p2-regular',
                  isLarge && 'dgsuikit:font-p1-regular',
                )}
              >
                {totalSteps}
              </span>
            </p>
          )}
        </div>
        <div
          className={clsx('dgsuikit:h-1 dgsuikit:relative dgsuikit:-mx-4', {
            'dgsuikit:bg-primary-100': color === 'primary',
            'dgsuikit:bg-secondary-100': color === 'secondary',
          })}
        >
          <div
            className={clsx(
              'dgsuikit:absolute dgsuikit:right-0 dgsuikit:h-2/3 dgsuikit:top-[0.7px] dgsuikit:transition-all dgsuikit:duration-500 dgsuikit:ease-out',
              {
                'dgsuikit:bg-primary-500': color === 'primary',
                'dgsuikit:bg-secondary-500': color === 'secondary',
              },
            )}
            style={{
              width: currentStep > totalSteps ? '100%' : `${percentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProgressStep;
