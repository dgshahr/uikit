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
  haveContainerPadding,
}: {
  slidesPerView: number;
  childIndex: number;
  centerMode: boolean;
  childrenCount: number;
  haveContainerPadding: boolean;
}): React.CSSProperties['scrollSnapAlign'] {
  const isFirstSlideInRow = childIndex % Math.floor(slidesPerView) === 0;
  const hasPartialSlides = slidesPerView % 1 !== 0;
  const isFirstChild = childIndex === 0;
  const isLastChild = childIndex === childrenCount - 1;

  if (!isFirstSlideInRow) return 'none';
  if (centerMode) {
    if (hasPartialSlides && !haveContainerPadding) {
      if (isFirstChild) return 'start';
      if (isLastChild) return 'end';
    }
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
    childrenCount = 0,
    sliderId,
  } = useSliderContext();
  const ref = useRef<HTMLDivElement>(null);
  const [childIndex, setChildIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setChildIndex(
      Array.prototype.indexOf.call(
        document.querySelectorAll(`[id='slide-item-${sliderId}']`),
        ref.current,
      ),
    );
  }, [ref, childrenCount, containerXPadding]);

  return (
    <div
      {...rest}
      ref={ref}
      id={`slide-item-${sliderId}`}
      className={clsx('dgsuikit:shrink-0 dgsuikit:snap-normal', className)}
      style={{
        width: 100 / (slidesPerView ?? 1) + '%',
        paddingLeft: spaceBetween,
        scrollSnapAlign: getScrollSnapAlign({
          slidesPerView,
          childIndex,
          centerMode,
          childrenCount: childrenCount || 0,
          haveContainerPadding: containerXPadding > 0,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
