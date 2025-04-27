import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { TableProps, UnknownRecord } from './types';

interface ContextType {
  observer: IntersectionObserver | null;
}

export const tableContext = createContext<ContextType>({
  observer: null,
});

interface ProviderProps<T extends UnknownRecord>
  extends Pick<TableProps<T>, 'columns' | 'rowSelection'> {
  children: ReactNode;
}

const SHADOW_CLASS = 'after:!dgs-ui-kit-shadow-[rgba(0,0,0,0.06)]';

function addShadowToElement(element: Element) {
  element.classList.add(SHADOW_CLASS);
}

function removeShadowFromElement(element: Element) {
  element.classList.remove(SHADOW_CLASS);
}

export function TableContextProvider<T extends UnknownRecord>(props: Readonly<ProviderProps<T>>) {
  const { columns, rowSelection, children } = props;
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    let haveStickyColumn = columns.some((col) => Boolean(col.sticky));
    if (!haveStickyColumn) haveStickyColumn = Boolean(rowSelection?.sticky);

    if (haveStickyColumn)
      setObserver(
        new IntersectionObserver(
          (e) => {
            let foundStuckedElement = false;
            for (const observerEntry of e) {
              if (observerEntry.boundingClientRect.right > observerEntry.intersectionRect.right) {
                document.querySelectorAll('#sticky-cell-right').forEach(addShadowToElement);
                foundStuckedElement = true;
                break;
              } else if (
                observerEntry.boundingClientRect.left < observerEntry.intersectionRect.left
              ) {
                document.querySelectorAll('#sticky-cell-left').forEach(addShadowToElement);
                foundStuckedElement = true;
                break;
              }
            }

            if (!foundStuckedElement) {
              document.querySelectorAll('[id^="sticky-cell-"]').forEach(removeShadowFromElement);
            }
          },
          { threshold: 1, rootMargin: '0% 100% 0% 100%' },
        ),
      );

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return <tableContext.Provider value={{ observer }}>{children}</tableContext.Provider>;
}

export const useTableContext = () => useContext(tableContext);
