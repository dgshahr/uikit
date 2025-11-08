'use client';

import { useEffect, useRef } from 'react';
import { isBrowser } from '@/src/utils/isBrowser';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isBrowser()) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document?.addEventListener('click', handleClick, true);

    return () => {
      document?.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};
