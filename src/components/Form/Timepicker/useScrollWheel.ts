import { useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/src/hooks/useDebounce';
import { getItemHeight, scrollToValue } from './utils';

export function useScrollWheel(
  items: number[],
  defaultValue: number | null | undefined,
  onValueChange: (val: number) => void,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastValueRef = useRef<number | null>(null);

  const getHeight = useCallback(() => getItemHeight(itemRefs.current), []);

  const scrollTo = useCallback(
    (value: number, behavior: ScrollBehavior = 'instant') => {
      scrollToValue(containerRef.current, items, value, getHeight, behavior);
      lastValueRef.current = value;
    },
    [items, getHeight],
  );

  const debouncedOnValueChange = useDebounce((value: number) => {
    if (value !== lastValueRef.current) {
      lastValueRef.current = value;
      onValueChange(value);
    }
  }, 200);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / getHeight());
      const newValue = items[Math.max(0, Math.min(index, items.length - 1))];

      if (newValue != null) {
        debouncedOnValueChange(newValue);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [items, getHeight, debouncedOnValueChange]);

  useEffect(() => {
    if (defaultValue != null) {
      scrollTo(defaultValue, 'smooth');
    }
  }, [defaultValue, scrollTo]);

  return { containerRef, itemRefs };
}
