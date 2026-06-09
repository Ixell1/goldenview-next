'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

const DEFAULT_TOKEN = '543675979618b77d1fca1d09d889baf73fa7a';
const CSS_HREF = 'https://api.mobile-calendar.com/v1/static/css/mcbe-widget.min.css';
const JS_SRC = 'https://api.mobile-calendar.com/v1/static/js/mcbe-widget.min.js';

type Props = {
  token?: string;
  primaryColor?: string;
  showGuests?: boolean;
  darkMode?: boolean;
  className?: string;
};

declare global {
  interface Window {
    mcbeWidget?: { init?: () => void; render?: () => void };
    MCBE?: { init?: () => void; render?: () => void };
  }
}

export default function MobileCalendarWidget({
  token = DEFAULT_TOKEN,
  primaryColor = '#C9A84C',
  showGuests = true,
  darkMode = false,
  className,
}: Props) {
  const mountedRef = useRef(false);

  // When Next.js client-side navigates to a page that mounts this widget for
  // the first time on that route, the global mcbe-widget.min.js script may
  // have already executed and skipped our new <div>. Try to re-invoke any
  // public init the widget exposes — names guessed since the library is
  // closed source. Safe no-op if none of these exist.
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    const tryInit = () => {
      const w = window;
      const candidate = w.mcbeWidget ?? w.MCBE;
      if (candidate?.init) candidate.init();
      else if (candidate?.render) candidate.render();
    };
    const t1 = window.setTimeout(tryInit, 400);
    const t2 = window.setTimeout(tryInit, 1500);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* React 19 deduplicates by href so multiple instances are safe */}
      <link rel="stylesheet" href={CSS_HREF} precedence="default" />
      <div
        className={`mcbe-widget-searchbar${className ? ` ${className}` : ''}`}
        data-token={token}
        data-primary-color={primaryColor}
        data-show-guests={String(showGuests)}
        data-dark-mode={String(darkMode)}
      />
      <Script src={JS_SRC} strategy="afterInteractive" />
    </>
  );
}
