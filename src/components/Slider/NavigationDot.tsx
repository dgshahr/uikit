import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSliderContext } from './context';
import type { SliderProps } from './Slider';

interface NavigationDotProps {
  active: boolean;
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
    inside: 'dgs-ui-kit-bg-gray-500/50 hover:dgs-ui-kit-bg-gray-500/80',
    outside: 'dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-300',
  };

  return [
    variantClassName[variant],
    active ? 'dgs-ui-kit-w-[22px]' : 'dgs-ui-kit-w-[6px]',
    autoplay ? 'dgs-ui-kit-p-[1px]' : '',
  ];
}

const NavigationDot = (props: NavigationDotProps) => {
  const { active, onClick, onNavigateToNext } = props;
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
        'dgs-ui-kit-rounded-full dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-h-[6px]',
        styleNavigationDot({ active, autoplay, variant: navigationVariant }),
      )}
      onClick={onClick}
    >
      {active && (
        <div
          className={clsx('dgs-ui-kit-h-full dgs-ui-kit-rounded-full', {
            'dgs-ui-kit-bg-white': navigationVariant === 'inside',
            'dgs-ui-kit-bg-gray-700': navigationVariant === 'outside',
          })}
          style={{ width: autoplay ? `${fillPercentage}%` : '100%' }}
        />
      )}
    </button>
  );
};

export default NavigationDot;
