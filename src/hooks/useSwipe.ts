'use client';

import { useEffect, RefObject } from 'react';

const SWIPE_THRESHOLD = 40;

export function useSwipe(
  ref: RefObject<HTMLElement | null>,
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentX = e.touches[0].clientX;
      const diffX = Math.abs(touchCurrentX - touchStartX);
      const diffY = Math.abs(e.touches[0].clientY - touchStartY);

      // If horizontal swipe is larger than vertical, prevent vertical scroll
      if (diffX > diffY) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          // Swiped left
          onSwipeLeft?.();
        } else {
          // Swiped right
          onSwipeRight?.();
        }
      }

      // Restore transition after swipe
      element.style.transition = '';
    };

    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, false);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight]);
}
