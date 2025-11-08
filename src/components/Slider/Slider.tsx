'use client';
import clsx from 'clsx';
import {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  type PropsWithChildren,
  type UIEvent,
  useId,
} from 'react';
import { isBrowser } from '@/src/utils/isBrowser';
import { sliderContext } from './context';
import Navigation from './Navigation';
import type { SliderProps, SliderRef } from './types';

const Slider = forwardRef<SliderRef, PropsWithChildren<SliderProps>>((props, ref) => {
  const [currentProps, setCurrentProps] = useState<SliderProps>(props);
  const {
    className = '',
    containerClassName = '',
    showNavigationDots = true,
    slidesPerView = 1,
    navigationButtonsShowType = 'hide',
    spaceBetween = 0,
    showPaginationText,
    onSlideIndexChange,
    initialSlide,
    containerXPadding = 0,
  } = currentProps;

  const [slideIndex, setSlideIndex] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const propsWithoutChildren = Object.fromEntries(
    Object.entries(currentProps).filter(([key]) => key !== 'children'),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesCount = Math.ceil(childrenCount / Math.floor(slidesPerView));
  const haveNavigation =
    (showNavigationDots ||
      (navigationButtonsShowType && navigationButtonsShowType !== 'hide') ||
      showPaginationText) &&
    slidesCount > 1;

  function detectCarouselPosition(e: UIEvent<HTMLDivElement>) {
    if (
      Math.ceil(Math.abs(e.currentTarget.scrollLeft)) +
        e.currentTarget.clientWidth +
        1 +
        containerXPadding >=
      e.currentTarget.scrollWidth
    ) {
      // is last slide
      setSlideIndex(slidesCount - 1);
      return;
    }

    const containerWidth = e.currentTarget.scrollWidth - containerXPadding * 2;
    const itemsWidth = containerWidth / slidesCount;
    const position = (containerWidth - e.currentTarget.scrollLeft - containerXPadding) / itemsWidth;

    if (position <= slidesCount) {
      setSlideIndex(0);
      return;
    }

    setSlideIndex(Math.round(position % slidesCount));
  }

  function navigate(target: number) {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const slideChangeAmount = slideIndex - target;
    const itemsWidth = containerRef.current.scrollWidth / slidesCount;
    const pageSlideScrollAmount = slideChangeAmount * itemsWidth;

    if (target < 0)
      containerRef.current.scrollTo({ behavior: 'smooth', left: -(containerWidth * slidesCount) });
    else if (target >= slidesCount) containerRef.current.scrollTo({ behavior: 'smooth', left: 0 });
    else containerRef.current.scrollBy({ behavior: 'smooth', left: pageSlideScrollAmount });
  }

  function detectResponsiveProps() {
    if (!isBrowser()) return;
    const sortedResponsiveKeys = Object.keys(props.responsive!).sort(
      (a, b) => Number(a) - Number(b),
    );

    const foundedPropsKey = sortedResponsiveKeys.findLast(
      (key) => Number(key) <= window?.innerWidth,
    );
    const foundedCurrentProps = foundedPropsKey ? props.responsive![Number(foundedPropsKey)] : null;
    if (foundedCurrentProps) setCurrentProps({ ...currentProps, ...foundedCurrentProps });
    else setCurrentProps(props);
  }

  useImperativeHandle(ref, () => ({
    element: containerRef.current,
    navigate: (target: number) => navigate(Math.max(0, target - 1)),
  }));

  useEffect(() => {
    if (!containerRef.current) return;
    let newChildrensCount = containerRef.current.childElementCount;
    if (containerXPadding > 0) newChildrensCount -= 2;

    setChildrenCount(newChildrensCount);
  }, [props.children, containerRef, containerXPadding]);

  useEffect(() => {
    if (!props.responsive || Object.keys(props.responsive).length <= 0 || !isBrowser()) return;

    detectResponsiveProps();
    window?.addEventListener('resize', detectResponsiveProps);

    return () => {
      window?.removeEventListener('resize', detectResponsiveProps);
    };
  }, [props.responsive]);

  useEffect(() => {
    if (onSlideIndexChange && typeof onSlideIndexChange === 'function')
      onSlideIndexChange(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    if (typeof initialSlide === 'number' && containerRef.current)
      navigate(Math.max(0, initialSlide - 1));
  }, [initialSlide, containerRef.current]);

  return (
    <sliderContext.Provider value={{ ...propsWithoutChildren, childrenCount, sliderId: useId() }}>
      <div
        className={clsx('dgsuikit:overflow-hidden dgsuikit:relative dgsuikit:group', className)}
        style={{ direction: 'rtl' }}
      >
        <div
          className={clsx(
            'dgsuikit:flex dgsuikit:snap-x dgsuikit:snap-mandatory dgsuikit:overflow-x-auto dgsuikit:no-scrollbar',
            containerClassName,
          )}
          style={{ marginLeft: -spaceBetween }}
          onScroll={detectCarouselPosition}
          ref={containerRef}
        >
          {containerXPadding > 0 && (
            <div
              className="dgsuikit:shrink-0"
              style={{
                width: containerXPadding,
                paddingLeft: spaceBetween,
              }}
            />
          )}
          {props.children}
          {containerXPadding > 0 && (
            <div
              className="dgsuikit:shrink-0"
              style={{
                width: containerXPadding,
                paddingLeft: spaceBetween,
              }}
            />
          )}
        </div>
        {haveNavigation && (
          <Navigation
            onNavigate={navigate}
            slideIndex={slideIndex}
            slidesCount={slidesCount}
          />
        )}
      </div>
    </sliderContext.Provider>
  );
});

Slider.displayName = 'Slider';

export default Slider;
