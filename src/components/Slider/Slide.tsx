import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { useSliderContext } from './context';

interface SlideProps {
  className?: string;
}
const Slide: FC<PropsWithChildren<SlideProps>> = (props) => {
  const { children, className } = props;
  const { slidesPerView, spaceBetween } = useSliderContext();

  return (
    <div
      className={clsx('shrink-0', className)}
      style={{
        width: 100 / (slidesPerView ?? 1) + '%',
        paddingLeft: spaceBetween,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
