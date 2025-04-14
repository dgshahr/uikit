import { useEffect, useRef } from 'react';
import { extractNumber } from '../utils/convertNumbers';

type OverflowResult = {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
};

interface Options {
  offset?: number;
  onOverflowChange: (overflow: OverflowResult) => void;
}

function calculateOverflow(el: HTMLElement, offset = 0): OverflowResult {
  const rect = el.getBoundingClientRect();
  const styles = getComputedStyle(el);
  const height = extractNumber(styles.height);
  const width = extractNumber(styles.width);

  return {
    top: rect.top - height - offset < 0,
    bottom: rect.bottom + height + offset > window.innerHeight,
    left: rect.left - width - offset < 0,
    right: rect.right + width + offset > window.innerWidth,
  };
}

export function useElementViewportOverflow<T extends HTMLElement>({
  offset = 8,
  onOverflowChange,
}: Options) {
  const ref = useRef<T>(null);

  function checkElement() {
    const el = ref.current!;
    const styles = getComputedStyle(el);

    const isVisible =
      styles.opacity !== '0' &&
      styles.width !== '0' &&
      styles.height !== '0' &&
      styles.maxHeight !== '0' &&
      styles.maxWidth !== '0';

    if (isVisible) onOverflowChange(calculateOverflow(el, offset));
    else {
      const prevStyles = {
        position: styles.position,
        width: styles.width,
        height: styles.height,
        maxHeight: styles.maxHeight,
        maxWidth: styles.maxWidth,
      };

      el.style.position = 'absolute';
      el.style.height = 'auto';
      el.style.width = 'auto';
      el.style.maxHeight = 'auto';
      el.style.maxWidth = 'auto';

      onOverflowChange(calculateOverflow(el, offset));

      el.style.position = prevStyles.position;
      el.style.width = prevStyles.width;
      el.style.height = prevStyles.height;
      el.style.maxHeight = prevStyles.maxHeight;
      el.style.maxWidth = prevStyles.maxWidth;
    }
  }

  useEffect(() => {
    if (!ref.current) return;

    checkElement();

    window.addEventListener('scroll', checkElement);
    window.addEventListener('resize', checkElement);

    return () => {
      window.removeEventListener('scroll', checkElement);
      window.removeEventListener('resize', checkElement);
    };
  }, [ref.current]);

  return ref;
}
