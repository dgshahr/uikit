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
}

const TabelCell: FC<TabelCellProps> = (props) => {
  const { children, className, type, sticky, addBorderToSticky } = props;
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
      className={clsx(className, getStickyClass(sticky, addBorderToSticky))}
      id={sticky && `sticky-cell-${sticky}`}
    >
      {children}
    </Element>
  );
};

export default TabelCell;
