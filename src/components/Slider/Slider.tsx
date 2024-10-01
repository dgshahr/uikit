import clsx from 'clsx';
import { useRef, useState, Children, type FC, type PropsWithChildren, type UIEvent } from 'react';
import ArrowLeft2Icon from '@/src/icons/ArrowLeft2';
import ArrowRight2Icon from '@/src/icons/ArrowRight2';
import { sliderContext } from './context';
import NavigationDot from './NavigationDot';
import Button from '../Button';

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
    dotsClassName = '',
    slidesPerView = 1,
    autoplay,
    navigationButtonsShowType = 'hide',
    spaceBetween = 0,
    navigationVariant = 'outside',
    showPaginationText = false,
    navigationContainerClassName = '',
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
        <div
          className={clsx(
            'dgs-ui-kit-flex',
            {
              'dgs-ui-kit-items-center dgs-ui-kit-mt-2': navigationVariant === 'outside',
              'dgs-ui-kit-absolute dgs-ui-kit-bottom-4 dgs-ui-kit-w-full dgs-ui-kit-justify-center':
                navigationVariant === 'inside',
              'dgs-ui-kit-justify-between':
                navigationVariant === 'outside' && navigationButtonsShowType !== 'hide',
              'dgs-ui-kit-justify-center':
                navigationVariant === 'outside' && navigationButtonsShowType === 'hide',
            },
            navigationContainerClassName,
          )}
        >
          {navigationButtonsShowType && navigationButtonsShowType !== 'hide' && (
            <div
              className={clsx('dgs-ui-kit-flex dgs-ui-kit-gap-2', {
                'dgs-ui-kit-absolute dgs-ui-kit-bottom-0 dgs-ui-kit-left-[5.5%]':
                  navigationVariant === 'inside' && navigationButtonsShowType !== 'onSides',
                'dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100 dgs-ui-kit-transition':
                  navigationButtonsShowType === 'hover' || navigationButtonsShowType === 'onSides',
                'dgs-ui-kit-fixed dgs-ui-kit-justify-between dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-w-full dgs-ui-kit-px-[5.5%]':
                  navigationVariant === 'inside' && navigationButtonsShowType === 'onSides',
              })}
            >
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate(slideIndex - 1)}
                rightIcon={<ArrowRight2Icon />}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate(slideIndex + 1)}
                rightIcon={<ArrowLeft2Icon />}
              />
            </div>
          )}
          {(showNavigationDots || showPaginationText) && (
            <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-3">
              {showPaginationText && (
                <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-1 dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-400 ss02">
                  <span
                    className={clsx('dgs-ui-kit-font-bold', {
                      'dgs-ui-kit-text-gray-600': navigationVariant === 'outside',
                      'dgs-ui-kit-text-white': navigationVariant === 'inside',
                    })}
                  >
                    {slideIndex + 1}
                  </span>
                  <span>از</span>
                  <span>{slidesCount}</span>
                </div>
              )}
              {showNavigationDots && (
                <div
                  className={clsx(
                    'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-gap-2',
                    dotsClassName,
                  )}
                >
                  {Array.from(Array(slidesCount).keys()).map((item, index) => (
                    <NavigationDot
                      key={item + slidesCount}
                      active={slideIndex === index}
                      autoplay={autoplay ?? false}
                      variant={navigationVariant}
                      onClick={() => navigate(index)}
                      onNavigateToNext={() => navigate(slideIndex + 1)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Slider;
