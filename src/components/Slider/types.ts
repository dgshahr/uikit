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
