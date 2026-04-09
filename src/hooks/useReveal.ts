'use client';

import { useEffect, useRef, RefObject } from 'react';

export function useReveal(externalRef?: RefObject<HTMLElement | null>): RefObject<any> {
  const internalRef = useRef<HTMLElement>(null);
  const ref = externalRef || internalRef;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
