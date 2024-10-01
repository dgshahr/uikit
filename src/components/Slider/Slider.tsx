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
  navigationButtonsShowType?: 'hide' | 'hover' | 'permanent';
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
      className={clsx('overflow-hidden relative group', className)}
      style={{ direction: 'rtl' }}
    >
      <div
        className={clsx(
          'flex snap-x snap-mandatory overflow-x-auto no-scrollbar',
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
            'flex',
            {
              'items-center mt-2': navigationVariant === 'outside',
              'absolute bottom-4 w-full justify-center': navigationVariant === 'inside',
              'justify-between':
                navigationVariant === 'outside' && navigationButtonsShowType !== 'hide',
              'justify-center':
                navigationVariant === 'outside' && navigationButtonsShowType === 'hide',
            },
            navigationContainerClassName,
          )}
        >
          {navigationButtonsShowType && navigationButtonsShowType !== 'hide' && (
            <div
              className={clsx('flex gap-2', {
                'absolute bottom-0 left-[5.5%]': navigationVariant === 'inside',
                'opacity-0 group-hover:opacity-100 transition':
                  navigationButtonsShowType === 'hover',
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
            <div className="flex items-center gap-3">
              {showPaginationText && (
                <div className="flex items-center gap-1 font-caption-regular text-gray-400 ss02">
                  <span
                    className={clsx('font-bold', {
                      'text-gray-600': navigationVariant === 'outside',
                      'text-white': navigationVariant === 'inside',
                    })}
                  >
                    {slideIndex + 1}
                  </span>
                  <span>از</span>
                  <span>{slidesCount}</span>
                </div>
              )}
              {showNavigationDots && (
                <div className={clsx('flex items-center justify-center gap-2', dotsClassName)}>
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
