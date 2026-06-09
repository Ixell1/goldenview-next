'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const root = document.body;

    // Immediately reveal anything already in (or above) the viewport so users on
    // slow networks don't stare at a blank page if the observer is sluggish.
    const revealVisible = () => {
      const els = root.querySelectorAll<HTMLElement>('[class*="reveal"]:not(.revealed)');
      const vh = window.innerHeight;
      els.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < vh - 40) el.classList.add('revealed');
      });
    };
    revealVisible();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );

    root.querySelectorAll('[class*="reveal"]:not(.revealed)').forEach((el) => observer.observe(el));

    // Hard fallback: if anything is still hidden after 2.5s (broken observer,
    // unusual browser), force-reveal so content never stays invisible.
    const fallback = window.setTimeout(() => {
      root.querySelectorAll('[class*="reveal"]:not(.revealed)').forEach((el) => el.classList.add('revealed'));
    }, 1000);

    // Counter animation
    const counters = root.querySelectorAll<HTMLElement>('.counter');
    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0', 10);
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          const id = window.setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = cur.toString();
            if (cur >= target) window.clearInterval(id);
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
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
