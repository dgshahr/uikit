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
import { sliderContext } from './context';
import Navigation from './Navigation';

export interface SliderProps {
  className?: string;
  containerClassName?: string;
  showNavigationDots?: boolean;
  dotsClassName?: string;
  slidesPerView?: number;
  centerMode?: boolean;
  autoplay?:
    | boolean
    | {
        delay?: number | null;
      };
  spaceBetween?: number;
  showPaginationText?: boolean;
  navigationContainerClassName?: string;
  navigationVariant?: 'inside' | 'outside';
  navigationButtonsShowType?: 'hide' | 'hover' | 'permanent' | 'onSides';
  responsive?: Record<number, Omit<SliderProps, 'responsive'>>;
  containerXPadding?: number;
  initialSlide?: number;
  onSlideIndexChange?: (slideIndex: number) => void;
}

export interface SliderRef {
  navigate: (target: number) => void;
  element: HTMLDivElement | null;
}

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
    const sortedResponsiveKeys = Object.keys(props.responsive!).sort();

    const foundedPropsKey = sortedResponsiveKeys.findLast(
      (key) => Number(key) <= window.innerWidth,
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
  }, [props.children]);

  useEffect(() => {
    if (!props.responsive || Object.keys(props.responsive).length <= 0) return;

    detectResponsiveProps();
    window.addEventListener('resize', detectResponsiveProps);

    return () => {
      window.removeEventListener('resize', detectResponsiveProps);
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
        className={clsx(
          'dgs-ui-kit-overflow-hidden dgs-ui-kit-relative dgs-ui-kit-group',
          className,
        )}
        style={{ direction: 'rtl' }}
      >
        <div
          className={clsx(
            'dgs-ui-kit-flex dgs-ui-kit-snap-x dgs-ui-kit-snap-mandatory dgs-ui-kit-overflow-x-auto no-scrollbar',
            containerClassName,
          )}
          style={{ marginLeft: -spaceBetween }}
          onScroll={detectCarouselPosition}
          ref={containerRef}
        >
          {props.children}
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
