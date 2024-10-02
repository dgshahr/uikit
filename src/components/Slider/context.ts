import { createContext, useContext } from 'react';
import type { SliderProps } from './Slider';

export const sliderContext = createContext<SliderProps>({
  slidesPerView: 1,
  spaceBetween: 0,
  navigationVariant: 'outside',
  showNavigationDots: true,
  showPaginationText: false,
});

export const useSliderContext = () => useContext(sliderContext);
