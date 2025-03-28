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
      className={clsx('dgs-ui-kit-flex dgs-ui-kit-gap-2', {
        'dgs-ui-kit-absolute dgs-ui-kit-bottom-0 dgs-ui-kit-left-[5.5%]':
          navigationVariant === 'inside' && navigationButtonsShowType !== 'onSides',
        'dgs-ui-kit-absolute dgs-ui-kit-justify-between dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-w-full dgs-ui-kit-px-[5.5%]':
          navigationButtonsShowType === 'onSides',
        'dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100 dgs-ui-kit-transition':
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
          'dgs-ui-kit-flex',
          {
            'dgs-ui-kit-items-center dgs-ui-kit-mt-2': navigationVariant === 'outside',
            'dgs-ui-kit-absolute dgs-ui-kit-bottom-4 dgs-ui-kit-w-full dgs-ui-kit-justify-center':
              navigationVariant === 'inside',
            'dgs-ui-kit-justify-between':
              navigationVariant === 'outside' &&
              navigationButtonsShowType !== 'hide' &&
              navigationButtonsShowType !== 'onSides',
            'dgs-ui-kit-justify-center':
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
