import clsx from 'clsx';
import { useEffect, useState } from 'react';
import type { SliderProps } from './Slider';

interface NavigationDotProps {
  active: boolean;
  autoplay: Required<SliderProps>['autoplay'];
  variant: 'inside' | 'outside';
  onClick?: () => void;
  onNavigateToNext?: () => void;
}

function styleNavigationDot({ active, autoplay, variant }: NavigationDotProps) {
  const variantClassName: Record<NavigationDotProps['variant'], string> = {
    inside: 'bg-gray-500/50 hover:bg-gray-500/80',
    outside: 'bg-gray-200 hover:bg-gray-300',
  };

  return [variantClassName[variant], active ? 'w-[22px]' : 'w-[6px]', autoplay ? 'p-[1px]' : ''];
}

const NavigationDot = (props: NavigationDotProps) => {
  const { active, autoplay, variant, onClick, onNavigateToNext } = props;
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
        'rounded-full overflow-hidden transition-all h-[6px]',
        styleNavigationDot({ active, autoplay, variant }),
      )}
      onClick={onClick}
    >
      {active && (
        <div
          className={clsx('h-full rounded-full', {
            'bg-white': variant === 'inside',
            'bg-gray-700': variant === 'outside',
          })}
          style={{ width: autoplay ? `${fillPercentage}%` : '100%' }}
        />
      )}
    </button>
  );
};

export default NavigationDot;
