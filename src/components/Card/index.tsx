import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import { cardBodyColorClassnameMap, cardBodySizeClassnameMap } from './constants';
import CardHeader from './Header';
import type { CardProps } from './types';

const trimTopClassnames = 'dgs-ui-kit-border-t-0 dgs-ui-kit-rounded-t-none';

const Card: FC<CardProps> = (props) => {
  const { header, children, size = 'medium', color = 'white', className, wrapperClassName } = props;

  const hasHeader = Boolean(header && Object.keys(header).length > 0);
  const headerColor = header?.color ?? color;

  const bodyClassname = clsx(
    className,
    hasHeader && trimTopClassnames,
    cardBodyColorClassnameMap[color],
    cardBodySizeClassnameMap[size],
  );

  const WrapperElement = wrapperClassName ? 'div' : React.Fragment;

  return (
    <WrapperElement {...(wrapperClassName ? { className: wrapperClassName } : {})}>
      {hasHeader && (
        <CardHeader
          {...header}
          color={headerColor}
          size={size}
        />
      )}
      <div className={bodyClassname}>{children}</div>
    </WrapperElement>
  );
};

export default Card;
export * from './types';
