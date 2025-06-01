import clsx from 'clsx';
import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { useTableContext } from './context';
import type { ColumnsType } from './types';
import { getStickyClass } from './utils';

interface TabelCellProps {
  children: ReactNode;
  className?: string;
  type: 'td' | 'th';
  sticky?: ColumnsType['sticky'];
  addBorderToSticky?: boolean;
  stuckToTop?: boolean;
}

const TabelCell: FC<TabelCellProps> = (props) => {
  const { children, className, type, sticky, addBorderToSticky, stuckToTop } = props;
  const cellRef = useRef<HTMLTableCellElement>(null);
  const Element = type;
  const { observer } = useTableContext();

  useEffect(() => {
    if (!cellRef.current || !observer) return;

    if (sticky) observer.observe(cellRef.current);

    return () => {
      if (!cellRef.current || !observer) return;

      if (sticky) observer.unobserve(cellRef.current);
    };
  }, [cellRef, observer]);

  return (
    <Element
      ref={cellRef}
      className={clsx(className, getStickyClass(sticky, addBorderToSticky), {
        'dgsuikit:border-b-0 dgsuikit:before:content[""] dgsuikit:before:absolute dgsuikit:before:bottom-0 dgsuikit:before:left-0 dgsuikit:before:w-full dgsuikit:before:border-b dgsuikit:before:border-solid dgsuikit:before:border-gray-200':
          stuckToTop,
        'dgsuikit:top-0 dgsuikit:z-20': stuckToTop && sticky,
        'dgsuikit:sticky dgsuikit:top-0 dgsuikit:z-10': stuckToTop && !sticky,
      })}
      id={sticky && `sticky-cell-${sticky}`}
    >
      {children}
    </Element>
  );
};

export default TabelCell;
