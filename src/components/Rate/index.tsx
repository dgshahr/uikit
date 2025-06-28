import clsx from 'clsx';
import type { FC } from 'react';
import RateStar, { type RateStarProps } from './RateStar';
import type { RateProps } from './types';

import '@/src/styles.css';

function getStarState(currentValue: number, value: number): RateStarProps['state'] {
  const integerPart = Math.floor(value);

  if (currentValue <= integerPart) return 'fill';
  if (currentValue - 1 === integerPart && value % 1 >= 0.5) return 'half-fill';
  return 'empty';
}

const Rate: FC<RateProps> = (props) => {
  const {
    value,
    total,
    onChange,
    showRateNumber = true,
    showStarsNumber,
    showTotalStars,
    size = 'large',
    className,
  } = props;

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:gap-2',
        showTotalStars && showStarsNumber ? 'dgsuikit:items-start' : 'dgsuikit:items-center',
        className,
      )}
    >
      {showTotalStars ? (
        <div className="dgsuikit:flex dgsuikit:flex-row-reverse dgsuikit:items-center dgsuikit:gap-1">
          {Array(total)
            .keys()
            .map((starItem) => (
              <div
                key={starItem}
                className="dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:justify-center"
              >
                <RateStar
                  size={size}
                  state={getStarState(starItem + 1, value)}
                  onClick={() => onChange && onChange(starItem + 1)}
                />
                {showStarsNumber && (
                  <span className="dgsuikit:mt-0.5 dgsuikit:font-caption-regular dgsuikit:ss02 dgsuikit:text-gray-500">
                    {starItem + 1}
                  </span>
                )}
              </div>
            ))}
        </div>
      ) : (
        <RateStar
          size={size}
          state="fill"
        />
      )}
      {showRateNumber && (
        <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:ss02">
          <span
            className={clsx('dgsuikit:text-primary-400 dgsuikit:ml-1', {
              'dgsuikit:font-h2-bold dgsuikit:leading-7': size === 'large',
              'dgsuikit:font-h5-bold dgsuikit:leading-6': size === 'small',
            })}
          >
            {value <= total ? value : total}
          </span>
          <span
            className={clsx('dgsuikit:text-gray-400', {
              'dgsuikit:font-h5-bold': size === 'large',
              'dgsuikit:font-h6-bold': size === 'small',
            })}
          >
            از {total}
          </span>
        </div>
      )}
    </div>
  );
};

export default Rate;
export * from './types';
