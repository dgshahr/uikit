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
  childrenCount,
}: {
  slidesPerView: number;
  childIndex: number;
  centerMode: boolean;
  childrenCount: number;
}): React.CSSProperties['scrollSnapAlign'] {
  const isFirstSlideInRow = childIndex % Math.floor(slidesPerView) === 0;
  const hasPartialSlides = slidesPerView % 1 !== 0;
  const isFirstChild = childIndex === 0;
  const isLastChild = childIndex === childrenCount - 1;

  if (!isFirstSlideInRow) return 'none';
  if (centerMode && hasPartialSlides) {
    if (isFirstChild) return 'start';
    if (isLastChild) return 'end';
    return 'center';
  }

  return 'start';
}
const Slide: FC<
  PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
> = (props) => {
  const { children, className, style, ...rest } = props;
  const {
    slidesPerView = 1,
    spaceBetween = 0,
    centerMode = false,
    containerXPadding = 0,
  } = useSliderContext();
  const ref = useRef<HTMLDivElement>(null);
  const [childIndex, setChildIndex] = useState(0);
  const childrenCount = ref.current?.parentNode?.children.length;

  useEffect(() => {
    if (!ref.current) return;
    setChildIndex(Array.prototype.indexOf.call(ref.current.parentNode?.children, ref.current));
  }, [ref]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx('dgs-ui-kit-shrink-0 dgs-ui-kit-snap-normal', className)}
      style={{
        width: 100 / (slidesPerView ?? 1) + '%',
        paddingLeft:
          childrenCount && childIndex === childrenCount - 1
            ? containerXPadding + spaceBetween
            : spaceBetween,
        paddingRight: childIndex === 0 ? containerXPadding : 0,
        scrollSnapAlign: getScrollSnapAlign({
          slidesPerView,
          childIndex,
          centerMode,
          childrenCount: childrenCount || 0,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
