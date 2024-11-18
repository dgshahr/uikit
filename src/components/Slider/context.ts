import { createContext, useContext } from 'react';
import type { SliderProps } from './Slider';

interface ContextType extends SliderProps {
  childrenCount: number;
}

export const sliderContext = createContext<ContextType>({
  slidesPerView: 1,
  spaceBetween: 0,
  navigationVariant: 'outside',
  showNavigationDots: true,
  showPaginationText: false,
  childrenCount: 0,
});

export const useSliderContext = () => useContext(sliderContext);
