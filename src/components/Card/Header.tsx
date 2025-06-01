import clsx from 'clsx';
import type { FC } from 'react';
import { cardBodyColorClassnameMap, cardBodySizeClassnameMap } from './constants';
import type { CardHeaderProps, CardSize, CardTitleVariant } from './types';

const titleVariantClassnameMap: Record<CardTitleVariant, string> = {
  default: 'dgsuikit:text-gray-700',
  primary: 'dgsuikit:text-primary-500',
};

const sizeClassnameMap: Record<CardSize, string> = {
  small: 'dgsuikit:font-h5-bold',
  medium: 'dgsuikit:font-h3-bold',
};

const CardHeader: FC<Partial<CardHeaderProps>> = (props) => {
  const { variant = 'default', size = 'medium', color = 'white', title, icon, Element } = props;

  const headerClassName = clsx(
    'dgsuikit:rounded-b-none dgsuikit:flex dgsuikit:gap-3 dgsuikit:items-center',
    cardBodyColorClassnameMap[color],
    cardBodySizeClassnameMap[size],
  );

  const titleClassname = clsx(
    'dgsuikit:font-bold',
    titleVariantClassnameMap[variant],
    sizeClassnameMap[size],
  );

  return (
    <div className={headerClassName}>
      <div className="dgsuikit:flex dgsuikit:gap-2 dgsuikit:items-center">
        {icon}
        <p className={titleClassname}>{title}</p>
      </div>
      <div className="dgsuikit:w-full">{Element}</div>
    </div>
  );
};

export default CardHeader;
