import clsx from 'clsx';
import type { FC } from 'react';
import { cardBodyColorClassnameMap, cardBodySizeClassnameMap } from './constants';
import CardHeader from './Header';
import type { CardProps } from './types';

const TRIM_TOP_CLASS = 'dgsuikit:border-t-0 dgsuikit:rounded-t-none';

const Card: FC<CardProps> = (props) => {
  const { header, children, size = 'medium', color = 'white', className, wrapperClassName } = props;

  const hasHeader = Boolean(header && Object.keys(header).length > 0);
  const headerColor = header?.color ?? color;

  const bodyClassname = clsx(
    className,
    hasHeader && TRIM_TOP_CLASS,
    cardBodyColorClassnameMap[color],
    cardBodySizeClassnameMap[size],
  );

  return (
    <div {...(wrapperClassName ? { className: wrapperClassName } : {})}>
      {hasHeader && (
        <CardHeader
          {...header}
          color={headerColor}
          size={size}
        />
      )}
      <div className={bodyClassname}>{children}</div>
    </div>
  );
};

export default Card;
export * from './types';
