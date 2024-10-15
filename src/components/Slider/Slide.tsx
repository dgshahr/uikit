'use client';
import clsx from 'clsx';
import {
  useEffect,
  useRef,
  useState,
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { useSliderContext } from './context';

function getScrollSnapAlign({
  slidesPerView,
  childIndex,
  centerMode,
  childsLength,
}: {
  slidesPerView: number;
  childIndex: number;
  centerMode: boolean;
  childsLength: number;
}) {
  if (childIndex % Math.floor(slidesPerView) !== 0) return 'none';
  if (centerMode && slidesPerView % 1 !== 0) {
    if (childIndex === 0) return 'start';
    if (childIndex === childsLength - 1) return 'end';
    return 'center';
  }
  return 'start';
}

const Slide: FC<
  PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
> = (props) => {
  const { children, className, style, ...rest } = props;
  const { slidesPerView = 1, spaceBetween, centerMode = false } = useSliderContext();
  const ref = useRef<HTMLDivElement>(null);
  const [childIndex, setChildIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setChildIndex(Array.prototype.indexOf.call(ref.current.parentNode?.children, ref.current));
  }, [ref]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx('dgs-ui-kit-shrink-0 dgs-ui-kit-snap-always', className)}
      style={{
        width: 100 / (slidesPerView ?? 1) + '%',
        paddingLeft: spaceBetween,
        scrollSnapAlign: getScrollSnapAlign({
          slidesPerView,
          childIndex,
          centerMode,
          childsLength: ref.current?.parentNode?.children.length || 0,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
