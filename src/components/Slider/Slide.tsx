import clsx from 'clsx';
import { useEffect, useRef, useState, type FC, type PropsWithChildren } from 'react';
import { useSliderContext } from './context';

interface SlideProps {
  className?: string;
}
const Slide: FC<PropsWithChildren<SlideProps>> = (props) => {
  const { children, className } = props;
  const { slidesPerView = 1, spaceBetween } = useSliderContext();
  const ref = useRef<HTMLDivElement>(null);
  const [childIndex, setChildIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setChildIndex(Array.prototype.indexOf.call(ref.current.parentNode?.children, ref.current));
  }, [ref]);

  return (
    <div
      ref={ref}
      className={clsx('dgs-ui-kit-shrink-0 dgs-ui-kit-snap-always', className)}
      style={{
        width: 100 / (slidesPerView ?? 1) + '%',
        paddingLeft: spaceBetween,
        scrollSnapAlign: childIndex % slidesPerView === 0 ? 'start' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
