import clsx from 'clsx';
import type { FC } from 'react';
import { cardBodyColorClassnameMap, cardBodySizeClassnameMap } from './constants';
import type { CardHeaderProps, CardSize, TitleVariant } from './types';

const titleVariantClassnameMap: Record<TitleVariant, string> = {
  default: 'dgs-ui-kit-text-gray-700',
  primary: 'dgs-ui-kit-text-primary-500',
};

const sizeClassnameMap: Record<CardSize, string> = {
  small: 'dgs-ui-kit-font-h5-bold',
  medium: 'dgs-ui-kit-font-h3-bold',
};

const CardHeader: FC<Partial<CardHeaderProps>> = (props) => {
  const { variant = 'default', size = 'medium', color = 'white', title, icon, Element } = props;

  const headerClassName = clsx(
    'dgs-ui-kit-rounded-b-none dgs-ui-kit-flex dgs-ui-kit-gap-3 dgs-ui-kit-items-center',
    cardBodyColorClassnameMap[color],
    cardBodySizeClassnameMap[size],
  );

  const titleClassname = clsx(
    'dgs-ui-kit-font-bold',
    titleVariantClassnameMap[variant],
    sizeClassnameMap[size],
  );

  return (
    <div className={headerClassName}>
      <div className="dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-items-center">
        {icon}
        <p className={titleClassname}>{title}</p>
      </div>
      <div className="dgs-ui-kit-w-full">{Element}</div>
    </div>
  );
};

export default CardHeader;
