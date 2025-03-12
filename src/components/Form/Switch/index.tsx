import clsx from 'clsx';
import type { FC } from 'react';

import '@/src/styles.css';

interface SwitchProps {
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
    switch: 'dgs-ui-kit-w-11 dgs-ui-kit-h-6',
    label: 'dgs-ui-kit-font-p1-medium',
    toggler: 'dgs-ui-kit-size-5',
  },
  small: {
    switch: 'dgs-ui-kit-w-9 dgs-ui-kit-h-5',
    label: 'dgs-ui-kit-font-p2-medium',
    toggler: 'dgs-ui-kit-size-4',
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
        'dgs-ui-kit-flex dgs-ui-kit-gap-x-2 dgs-ui-kit-group',
        disabled && 'dgs-ui-kit-opacity-50',
        containerClassName,
      )}
      onClick={() => onChange(!checked)}
    >
      <div
        className={clsx(
          'dgs-ui-kit-relative dgs-ui-kit-rounded-xl dgs-ui-kit-transition',
          'group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-gray-100',
          'group-focus:dgs-ui-kit-ring-offset-1 group-focus:dgs-ui-kit-ring-offset-white group-focus:dgs-ui-kit-ring-4 group-focus:dgs-ui-kit-ring-primary-300',
          checked ? 'dgs-ui-kit-bg-primary-500' : 'dgs-ui-kit-bg-gray-300',
          SIZE_CLASS[size].switch,
          className,
        )}
      >
        <div
          className={clsx(
            'dgs-ui-kit-bg-white dgs-ui-kit-rounded-full dgs-ui-kit-transition-all dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-right-0.5 dgs-ui-kit-left-0.5',
            {
              'dgs-ui-kit-left-[calc(100%-2px)]': !checked,
              '!dgs-ui-kit-w-3 !dgs-ui-kit-h-0.5 dgs-ui-kit-left-1/2 dgs-ui-kit-right-1/2 dgs-ui-kit-translate-x-1/2':
                checked && isIntermediate,
              'dgs-ui-kit-right-[calc(100%-2px)] dgs-ui-kit-translate-x-full':
                checked && !isIntermediate,
            },
            SIZE_CLASS[size].toggler,
          )}
        />
      </div>
      <div className="dgs-ui-kit-space-y-1 -dgs-ui-kit-mt-1">
        <div
          className={clsx(
            SIZE_CLASS[size].label,
            'dgs-ui-kit-text-gray-700 group-hover:dgs-ui-kit-text-primary-500 dgs-ui-kit-transition-colors',
          )}
        >
          {label}
        </div>
        <div className="dgs-ui-kit-font-p3-regular dgs-ui-kit-text-gray-500">{description}</div>
      </div>
    </button>
  );
};

export default Switch;
