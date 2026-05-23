'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('[class*="reveal"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    els.forEach((el) => observer.observe(el));

    const counters = document.querySelectorAll('.counter');
    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0', 10);
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          const id = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = cur.toString();
            if (cur >= target) clearInterval(id);
          }, 25);
          cObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cObserver.observe(el));

    return () => {
      observer.disconnect();
      cObserver.disconnect();
    };
  }, []);

  return null;
}
