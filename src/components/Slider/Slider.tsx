import clsx from 'clsx';
import { useRef, useState, Children, type FC, type PropsWithChildren, type UIEvent } from 'react';
import { sliderContext } from './context';
import Navigation from './Navigation';

interface SliderPropsBase {
  className?: string;
  containerClassName?: string;
  showNavigationDots?: boolean;
  dotsClassName?: string;
  slidesPerView?: number;
  autoplay?:
    | boolean
    | {
        delay?: number | null;
      };
  spaceBetween?: number;
  showPaginationText?: boolean;
  navigationContainerClassName?: string;
}

interface InsideNavigationSliderProps extends SliderPropsBase {
  navigationVariant?: 'inside';
  navigationButtonsShowType?: 'hide' | 'hover' | 'permanent' | 'onSides';
}
interface OutsideNavigationSliderProps extends SliderPropsBase {
  navigationVariant?: 'outside';
  navigationButtonsShowType?: 'hide' | 'permanent';
}

export type SliderProps = InsideNavigationSliderProps | OutsideNavigationSliderProps;

const Slider: FC<PropsWithChildren<SliderProps>> = (props) => {
  const {
    className = '',
    containerClassName = '',
    showNavigationDots = true,
    dotsClassName,
    slidesPerView = 1,
    autoplay,
    navigationButtonsShowType = 'hide',
    spaceBetween = 0,
    navigationVariant = 'outside',
    showPaginationText,
    navigationContainerClassName,
  } = props;

  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childsCount = Children.count(props.children);
  const slidesCount = Math.ceil(childsCount / slidesPerView);
  const haveNavigation =
    (showNavigationDots ||
      (navigationButtonsShowType && navigationButtonsShowType !== 'hide') ||
      showPaginationText) &&
    slidesCount > 1;

  function detectCarouselPosition(e: UIEvent<HTMLDivElement>) {
    const itemsWidth = e.currentTarget.scrollWidth / slidesCount;
    const position = (e.currentTarget.scrollWidth - e.currentTarget.scrollLeft) / itemsWidth;
    setSlideIndex(Math.round(position % slidesCount));
  }

  function navigate(target: number) {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth;

    let nextSlideScroll = -(slideWidth * target);
    if (target < 0) nextSlideScroll = -(slideWidth * slidesCount);
    else if (target >= slidesCount) nextSlideScroll = 0;

    containerRef.current.scrollTo({
      left: nextSlideScroll,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={clsx('dgs-ui-kit-overflow-hidden dgs-ui-kit-relative dgs-ui-kit-group', className)}
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
        <sliderContext.Provider value={{ slidesPerView, spaceBetween }}>
          {props.children}
        </sliderContext.Provider>
      </div>
      {haveNavigation && (
        <Navigation
          onNavigate={navigate}
          slideIndex={slideIndex}
          slidesCount={slidesCount}
          autoplay={autoplay}
          dotsClassName={dotsClassName}
          navigationButtonsShowType={navigationButtonsShowType}
          navigationVariant={navigationVariant}
          navigationContainerClassName={navigationContainerClassName}
          showNavigationDots={showNavigationDots}
          showPaginationText={showPaginationText}
        />
      )}
    </div>
  );
};

export default Slider;
