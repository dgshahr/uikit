import debounce from 'lodash.debounce';
import { useEffect, useRef } from 'react';
import { getItemHeight, scrollToValue } from '../utils';

export function useScrollWheel(
  items: number[],
  defaultValue: number | null | undefined,
  onValueChange: (val: number) => void,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastValueRef = useRef<number | null>(null);

  const getHeight = () => getItemHeight(itemRefs.current);

  const scrollTo = (value: number = defaultValue ?? 0, behavior: ScrollBehavior = 'smooth') => {
    scrollToValue(containerRef.current, items, value, getHeight, behavior);
    lastValueRef.current = value;
  };

  const debouncedOnValueChange = debounce((value: number) => {
    if (value !== lastValueRef.current) {
      lastValueRef.current = value;
      onValueChange(value);
    }
  }, 200);

  const handleScroll = (container: HTMLDivElement) => {
    const index = Math.round(container.scrollTop / getHeight());
    const newValue = items[Math.max(0, Math.min(index, items.length - 1))];
    if (newValue != null) {
      debouncedOnValueChange(newValue);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const listener = () => handleScroll(container);
    container.addEventListener('scroll', listener);
    return () => container.removeEventListener('scroll', listener);
  }, [items, debouncedOnValueChange]);

  useEffect(() => {
    if (defaultValue != null) {
      scrollTo();
    }
  }, [defaultValue]);

  return { containerRef, itemRefs };
}
