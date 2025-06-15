interface RateBaseProps {
  value: number;
  total: number;
  onChange?: (value: number) => void;
  size?: 'small' | 'large';
  showStarsNumber?: boolean;
  className?: string;
}

interface RatePropsWithStars {
  showTotalStars: true;
  showRateNumber?: boolean;
}

interface RatePropsWithRateNumber {
  showTotalStars?: boolean;
  showRateNumber: true;
}

export type RateProps = RateBaseProps & (RatePropsWithStars | RatePropsWithRateNumber);
