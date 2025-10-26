import clsx from 'clsx';
import type { FC } from 'react';

import '@/src/styles.css';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: SwitchProps['checked']) => void;
  isIntermediate?: boolean;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'large' | 'small';
  containerClassName?: string;
  className?: string;
}

const SIZE_CLASS: Record<
  Required<SwitchProps>['size'],
  { switch: string; label: string; toggler: string }
> = {
  large: {
    switch: 'dgsuikit:w-11 dgsuikit:h-6',
    label: 'dgsuikit:font-p1-medium',
    toggler: 'dgsuikit:size-5',
  },
  small: {
    switch: 'dgsuikit:w-9 dgsuikit:h-5',
    label: 'dgsuikit:font-p2-medium',
    toggler: 'dgsuikit:size-4',
  },
};

const Switch: FC<SwitchProps> = (props) => {
  const {
    checked,
    onChange,
    isIntermediate,
    label,
    description,
    disabled,
    size = 'large',
    className,
    containerClassName,
  } = props;

  return (
    <button
      type="button"
      className={clsx(
        'dgsuikit:flex dgsuikit:gap-x-2 dgsuikit:group',
        disabled && 'dgsuikit:opacity-50',
        containerClassName,
      )}
      onClick={() => onChange(!checked)}
      disabled={disabled}
    >
      <div
        className={clsx(
          'dgsuikit:relative dgsuikit:rounded-xl dgsuikit:transition',
          'dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-gray-100',
          'dgsuikit:group-focus:ring-offset-1 dgsuikit:group-focus:ring-offset-white dgsuikit:group-focus:ring-4 dgsuikit:group-focus:ring-primary-300',
          checked ? 'dgsuikit:bg-primary-500' : 'dgsuikit:bg-gray-300',
          SIZE_CLASS[size].switch,
          className,
        )}
      >
        <div
          className={clsx(
            'dgsuikit:bg-white dgsuikit:rounded-full dgsuikit:transition-all dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-0.5 dgsuikit:left-0.5',
            {
              'dgsuikit:left-[calc(100%-2px)]': !checked,
              'dgsuikit:!w-3 dgsuikit:!h-0.5 dgsuikit:left-1/2 dgsuikit:right-1/2 dgsuikit:translate-x-1/2':
                checked && isIntermediate,
              'dgsuikit:right-[calc(100%-2px)] dgsuikit:translate-x-full':
                checked && !isIntermediate,
            },
            SIZE_CLASS[size].toggler,
          )}
        />
      </div>
      <div className="dgsuikit:space-y-1 dgsuikit:-mt-1">
        <div
          className={clsx(
            SIZE_CLASS[size].label,
            'dgsuikit:text-gray-700 dgsuikit:group-hover:text-primary-500 dgsuikit:transition-colors',
          )}
        >
          {label}
        </div>
        <div className="dgsuikit:font-p3-regular dgsuikit:text-gray-500">{description}</div>
      </div>
    </button>
  );
};

export default Switch;
