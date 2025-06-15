import clsx from 'clsx';
import type { FC } from 'react';
import IconStarFill from '@/src/icons/IconStarFill';
import IconStarHalfFill from '@/src/icons/IconStarHalfFill';
import IconStarOutline from '@/src/icons/IconStarOutline';
import type { RateProps } from './types';

export interface RateStarProps {
  size: RateProps['size'];
  state: 'empty' | 'half-fill' | 'fill';
  onClick?: () => void;
}

const RateStar: FC<RateStarProps> = (props) => {
  const { size, state, onClick } = props;

  let Icon = IconStarOutline;
  if (state === 'fill') Icon = IconStarFill;
  else if (state === 'half-fill') Icon = IconStarHalfFill;

  return (
    <Icon
      className={clsx(
        'dgsuikit:hover:scale-110 dgsuikit:transition-transform',
        {
          'dgsuikit:size-6': size === 'large',
          'dgsuikit:size-5': size === 'small',
        },
        state === 'empty' ? 'dgsuikit:text-gray-200' : 'dgsuikit:text-warning-500',
        typeof onClick === 'function' && 'dgsuikit:cursor-pointer',
      )}
      onClick={onClick}
    />
  );
};

export default RateStar;
