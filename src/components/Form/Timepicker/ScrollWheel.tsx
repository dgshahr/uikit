import clsx from 'clsx';
import { type FC } from 'react';
import GradientOverlay from './GradientOverlay';
import { useScrollWheel } from './hooks/useScrollWheel';
import type { ScrollWheelProps } from './types';

const ScrollWheel: FC<ScrollWheelProps> = (props) => {
  const {
    items,
    defaultValue,
    onValueChange,
    className,
    formatValue = (value) => String(value).padStart(2, '0'),
  } = props;
  const { containerRef, itemRefs } = useScrollWheel(items, defaultValue, onValueChange);

  return (
    <div className="dgsuikit:relative dgsuikit:h-28 dgsuikit:w-full">
      <div
        ref={containerRef}
        className={clsx(
          'dgsuikit:h-28 dgsuikit:w-full dgsuikit:py-10 dgsuikit:overflow-y-scroll dgsuikit:snap-y dgsuikit:snap-mandatory dgsuikit:scroll-smooth dgsuikit:no-scrollbar',
          className,
        )}
      >
        {items.map((item, index) => (
          <div
            key={item}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="dgsuikit:h-10 dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:snap-center dgsuikit:font-p1-regular"
          >
            {formatValue(item)}
          </div>
        ))}
      </div>
      <GradientOverlay position="top" />
      <GradientOverlay position="bottom" />
    </div>
  );
};

export default ScrollWheel;
