'use client';
import clsx from 'clsx';
import {
  useRef,
  useState,
  Children,
  type FC,
  type PropsWithChildren,
  type UIEvent,
  useEffect,
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
}

const Slider: FC<PropsWithChildren<SliderProps>> = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentProps, setCurrentProps] = useState<SliderProps>(props);
  const {
    className = '',
    containerClassName = '',
    showNavigationDots = true,
    slidesPerView = 1,
    navigationButtonsShowType = 'hide',
    spaceBetween = 0,
    showPaginationText,
  } = currentProps;
  const propsWithoutChildren = Object.fromEntries(
    Object.entries(currentProps).filter(([key]) => key !== 'children'),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const childsCount = Children.count(props.children);
  const slidesCount = Math.ceil(childsCount / Math.floor(slidesPerView));
  const haveNavigation =
    (showNavigationDots ||
      (navigationButtonsShowType && navigationButtonsShowType !== 'hide') ||
      showPaginationText) &&
    slidesCount > 1;

  function detectCarouselPosition(e: UIEvent<HTMLDivElement>) {
    if (
      Math.ceil(Math.abs(e.currentTarget.scrollLeft)) + e.currentTarget.clientWidth ===
      e.currentTarget.scrollWidth
    ) {
      // is last slide
      setSlideIndex(slidesCount - 1);
      return;
    }

    const itemsWidth = e.currentTarget.scrollWidth / slidesCount;
    const position = (e.currentTarget.scrollWidth - e.currentTarget.scrollLeft) / itemsWidth;

    if (position <= slidesCount) {
      setSlideIndex(0);
      return;
    }

    setSlideIndex(Math.round(position % slidesCount));
  }

  function navigate(target: number) {
    if (!containerRef.current) return;
    const isSlidePerViewDecimal = slidesPerView % 1 !== 0;
    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = isSlidePerViewDecimal ? containerWidth / slidesPerView : containerWidth;

    let nextSlideScroll = -(slideWidth * target);
    if (target < 0) nextSlideScroll = -(slideWidth * slidesCount);
    else if (target >= slidesCount) nextSlideScroll = 0;

    containerRef.current.scrollTo({
      left: nextSlideScroll,
      behavior: 'smooth',
    });
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

  useEffect(() => {
    if (!props.responsive || Object.keys(props.responsive).length <= 0) return;

    detectResponsiveProps();
    window.addEventListener('resize', detectResponsiveProps);

    return () => {
      window.removeEventListener('resize', detectResponsiveProps);
    };
  }, [props.responsive]);

  return (
    <sliderContext.Provider value={propsWithoutChildren}>
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
};

export default Slider;
