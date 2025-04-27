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
        'dgs-ui-kit-border-b-0 before:dgs-ui-kit-content[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-bottom-0 before:dgs-ui-kit-left-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-b before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
          stuckToTop,
        'dgs-ui-kit-top-0 dgs-ui-kit-z-20': stuckToTop && sticky,
        'dgs-ui-kit-sticky dgs-ui-kit-top-0 dgs-ui-kit-z-10': stuckToTop && !sticky,
      })}
      id={sticky && `sticky-cell-${sticky}`}
    >
      {children}
    </Element>
  );
};

export default TabelCell;
