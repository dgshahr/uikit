import clsx from 'clsx';
import type { FC, JSX } from 'react';
import '@/src/styles.css';

type BottomNavItemBase = {
  id: string;
  title: string;
  icon: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
};

type BottomNavItemWithBadge = {
  badge: JSX.Element;

  hasPulse?: never;
  pulseOnce?: never;
  pulseColor?: never;
};

type BottomNavItemWithPulse = {
  badge?: never;

  hasPulse?: boolean;
  pulseOnce?: boolean;
  pulseColor?:
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'success'
    | 'error'
    | 'warning'
    | 'sky'
    | 'violet'
    | 'flamingo';
};

type BottomNavItem = BottomNavItemBase & (BottomNavItemWithBadge | BottomNavItemWithPulse);

type BottomNavProps = {
  items: BottomNavItem[];
  activeItemId?: string;
  containerClassName?: string;
  showTitle?: boolean;
};

const pulseColorClasses = {
  primary: 'dgsuikit:text-primary-500',
  secondary: 'dgsuikit:text-secondary-600',
  gray: 'dgsuikit:text-gray-600',
  success: 'dgsuikit:text-success-600',
  error: 'dgsuikit:text-error-500',
  warning: 'dgsuikit:text-warning-500',
  sky: 'dgsuikit:text-sky-600',
  violet: 'dgsuikit:text-violet-500',
  flamingo: 'dgsuikit:text-flamingo-500',
} as const;

const BottomNav: FC<BottomNavProps> = ({ items, activeItemId, containerClassName, showTitle }) => {
  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:justify-center dgsuikit:rounded-full dgsuikit:p-3 dgsuikit:bg-white dgsuikit:shadow-[0_0_24px_0_rgba(8,8,8,0.08)] dgsuikit:h-14.5',
        containerClassName,
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeItemId;
        const isDisabled = item.disabled;

        return (
          <button
            key={item.id}
            type="button"
            disabled={item.disabled}
            onClick={item.onClick}
            className={clsx(
              'dgsuikit:relative dgsuikit:flex dgsuikit:flex-1 dgsuikit:flex-col dgsuikit:items-center',
              showTitle ? 'dgsuikit:gap-1' : 'dgsuikit:justify-center dgsuikit:my-auto',
              isDisabled && 'dgsuikit:disabled:cursor-not-allowed',
            )}
          >
            {item.hasPulse && (
              <span
                className={clsx(
                  'bottom-nav-pulse',
                  'dgsuikit:left-4.5 dgsuikit:top-0',
                  pulseColorClasses[item.pulseColor ?? 'error'],
                  item.pulseOnce && 'bottom-nav-pulse-once',
                )}
              />
            )}

            {item.badge && (
              <span
                className={clsx(
                  'dgsuikit:absolute dgsuikit:left-0 dgsuikit:-top-2.5',
                  item.badge.props.valueType === 'number' && 'dgsuikit:left-2.5',
                )}
              >
                {item.badge}
              </span>
            )}

            <span
              className={clsx(
                'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full dgsuikit:text-gray-600 dgsuikit:h-full',
                isActive && 'dgsuikit:text-primary-500!',
                isDisabled && 'dgsuikit:text-gray-300!',
              )}
            >
              {item.icon}
            </span>

            {showTitle && (
              <span
                className={clsx(
                  'dgsuikit:text-[10px] dgsuikit:font-semibold dgsuikit:leading-[12px] dgsuikit:text-gray-600',
                  isActive && 'dgsuikit:text-primary-500',
                  isDisabled && 'dgsuikit:text-gray-300!',
                )}
              >
                {item.title}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
