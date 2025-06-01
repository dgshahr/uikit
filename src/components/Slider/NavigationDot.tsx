import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSliderContext } from './context';
import type { SliderProps } from './types';

interface NavigationDotProps {
  active: boolean;
  index: number;
  onClick?: () => void;
  onNavigateToNext?: () => void;
}

function styleNavigationDot({
  active,
  autoplay,
  variant = 'outside',
}: {
  active: NavigationDotProps['active'];
  autoplay: SliderProps['autoplay'];
  variant: SliderProps['navigationVariant'];
}) {
  const variantClassName: Record<Required<SliderProps>['navigationVariant'], string> = {
    inside: 'dgsuikit:bg-gray-500/50 dgsuikit:hover:bg-gray-500/80',
    outside: 'dgsuikit:bg-gray-200 dgsuikit:hover:bg-gray-300',
  };

  return [
    variantClassName[variant],
    active ? 'dgsuikit:w-[22px]' : 'dgsuikit:w-[6px]',
    autoplay ? 'dgsuikit:p-[1px]' : '',
  ];
}

const NavigationDot = (props: NavigationDotProps) => {
  const { active, onClick, onNavigateToNext, index } = props;
  const { autoplay, navigationVariant = 'outside' } = useSliderContext();
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    if (!active || !autoplay) return;
    const autoplayTime = typeof autoplay === 'boolean' ? 7000 : (autoplay?.delay ?? 7000);
    let startTime = Date.now();

    const autoplayInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = (elapsed / autoplayTime) * 100;
      setFillPercentage(Math.min(percentage, 100));

      if (elapsed >= autoplayTime && typeof onNavigateToNext === 'function') {
        onNavigateToNext();
        setFillPercentage(0);
        clearInterval(autoplayInterval);
      }
    }, 100);

    return function cleanup() {
      setFillPercentage(0);
      startTime = Date.now();
      return clearInterval(autoplayInterval);
    };
  }, [active, autoplay, onNavigateToNext]);

  return (
    <button
      className={clsx(
        'dgsuikit:rounded-full dgsuikit:overflow-hidden dgsuikit:transition-all dgsuikit:h-[6px]',
        styleNavigationDot({ active, autoplay, variant: navigationVariant }),
      )}
      onClick={onClick}
      aria-label={`slider-navigation-dot-${index + 1}`}
    >
      {active && (
        <div
          className={clsx('dgsuikit:h-full dgsuikit:rounded-full', {
            'dgsuikit:bg-white': navigationVariant === 'inside',
            'dgsuikit:bg-gray-700': navigationVariant === 'outside',
          })}
          style={{ width: autoplay ? `${fillPercentage}%` : '100%' }}
        />
      )}
    </button>
  );
};

export default NavigationDot;
