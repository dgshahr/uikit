import clsx from 'clsx';
import type { FC } from 'react';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import IconArrowRight2 from '@/src/icons/IconArrowRight2';
import { useSliderContext } from './context';
import NavigationDot from './NavigationDot';
import Button from '../Button';

interface NavigationProps {
  onNavigate: (slide: number) => void;
  slideIndex: number;
  slidesCount: number;
}

const Navigation: FC<NavigationProps> = (props) => {
  const { onNavigate, slideIndex, slidesCount } = props;

  const {
    navigationButtonsShowType = 'hide',
    dotsClassName,
    navigationContainerClassName,
    navigationVariant = 'outside',
    showNavigationDots = true,
    showPaginationText,
  } = useSliderContext();

  const NavigationButtons = (
    <div
      className={clsx('dgsuikit:flex dgsuikit:gap-2', {
        'dgsuikit:absolute dgsuikit:bottom-0 dgsuikit:left-[5.5%]':
          navigationVariant === 'inside' && navigationButtonsShowType !== 'onSides',
        'dgsuikit:absolute dgsuikit:justify-between dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:w-full dgsuikit:px-[5.5%]':
          navigationButtonsShowType === 'onSides',
        'dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition':
          navigationButtonsShowType === 'hover' || navigationButtonsShowType === 'onSides',
      })}
    >
      <Button
        type="button"
        variant="secondary"
        onClick={() => onNavigate(slideIndex - 1)}
        rightIcon={<IconArrowRight2 />}
        aria-label="slider-previous-button"
      />
      <Button
        type="button"
        variant="secondary"
        onClick={() => onNavigate(slideIndex + 1)}
        rightIcon={<IconArrowLeft2 />}
        aria-label="slider-next-button"
      />
    </div>
  );

  return (
    <>
      {navigationButtonsShowType &&
        navigationButtonsShowType !== 'hide' &&
        navigationButtonsShowType === 'onSides' &&
        NavigationButtons}
      <div
        className={clsx(
          'dgsuikit:flex',
          {
            'dgsuikit:items-center dgsuikit:mt-2': navigationVariant === 'outside',
            'dgsuikit:absolute dgsuikit:bottom-4 dgsuikit:w-full dgsuikit:justify-center':
              navigationVariant === 'inside',
            'dgsuikit:justify-between':
              navigationVariant === 'outside' &&
              navigationButtonsShowType !== 'hide' &&
              navigationButtonsShowType !== 'onSides',
            'dgsuikit:justify-center':
              navigationVariant === 'outside' &&
              (navigationButtonsShowType === 'hide' || navigationButtonsShowType === 'onSides'),
          },
          navigationContainerClassName,
        )}
      >
        {navigationButtonsShowType &&
          navigationButtonsShowType !== 'hide' &&
          navigationButtonsShowType !== 'onSides' &&
          NavigationButtons}
        {(showNavigationDots || showPaginationText) && (
          <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-3">
            {showPaginationText && (
              <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-1 dgsuikit:font-caption-regular dgsuikit:text-gray-400 ss02">
                <span
                  className={clsx('dgsuikit:font-bold', {
                    'dgsuikit:text-gray-600': navigationVariant === 'outside',
                    'dgsuikit:text-white': navigationVariant === 'inside',
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
                  'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2',
                  dotsClassName,
                )}
              >
                {Array.from(Array(slidesCount).keys()).map((item, index) => (
                  <NavigationDot
                    key={item + slidesCount}
                    active={slideIndex === index}
                    index={index}
                    onClick={() => onNavigate(index)}
                    onNavigateToNext={() => onNavigate(slideIndex + 1)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
