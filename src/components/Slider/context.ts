import { createContext, useContext } from 'react';

interface ISliderContext {
  slidesPerView: number;
  spaceBetween: number;
}

export const sliderContext = createContext<ISliderContext>({
  slidesPerView: 1,
  spaceBetween: 0,
});

export const useSliderContext = () => useContext(sliderContext);
