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
  /** MCBE has its own i18n keyed on navigator.language (falls back to 'en').
   *  Force Serbian so the bar reads "Pretraga / Odrasli / Deca" for every
   *  visitor, matching the site's default language. */
  lang?: string;
  className?: string;
};

declare global {
  interface Window {
    // Real API exposed by mcbe-widget.min.js. init()/refresh() both scan the
    // DOM for .mcbe-widget-searchbar / .mcbe-widget-button and render any that
    // aren't yet marked data-mcbe-initialized — so calling them repeatedly is
    // safe (idempotent) and never duplicates a calendar.
    MCBEWidget?: { init: () => void; refresh: () => void };
  }
}

export default function MobileCalendarWidget({
  token = DEFAULT_TOKEN,
  primaryColor = '#1A1815',
  showGuests = true,
  darkMode = false,
  lang = 'sr',
  className,
}: Props) {
  const barRef = useRef<HTMLDivElement>(null);

  // Why this exists: the MCBE script auto-runs init() exactly ONCE on load by
  // scanning the document. Loaded via next/script (afterInteractive), that scan
  // can fire before React has committed our searchbar <div> — and it never
  // re-runs on client-side navigation — so the booking widget intermittently
  // failed to appear ("nekad izađe, nekad ne"). The previous fallback also
  // called the wrong globals (window.mcbeWidget / window.MCBE). Fix: once the
  // div is mounted, poll window.MCBEWidget.init() until OUR bar is populated.
  // init() is idempotent, so re-calling it is harmless.
  useEffect(() => {
    let tries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const ensureRendered = () => {
      tries += 1;
      const bar = barRef.current;
      const done =
        !!bar && (bar.dataset.mcbeInitialized === 'true' || bar.childElementCount > 0);
      if (!done) {
        try {
          window.MCBEWidget?.init();
        } catch {
          /* script not ready yet — retry below */
        }
      }
      // ~12s of 200ms ticks: covers a slow/late script without polling forever.
      if (!done && tries < 60) timer = setTimeout(ensureRendered, 200);
    };
    ensureRendered();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* React 19 dedups stylesheet by href, so multiple instances are safe */}
      <link rel="stylesheet" href={CSS_HREF} precedence="default" />
      <div
        ref={barRef}
        className={`mcbe-widget-searchbar${className ? ` ${className}` : ''}`}
        data-token={token}
        data-lang={lang}
        data-primary-color={primaryColor}
        data-show-guests={String(showGuests)}
        data-dark-mode={String(darkMode)}
      />
      <Script
        src={JS_SRC}
        strategy="afterInteractive"
        onReady={() => {
          // Fires after the script loads AND on every remount (client nav).
          try {
            window.MCBEWidget?.init();
          } catch {
            /* the useEffect poll is the backstop */
          }
        }}
      />
    </>
  );
}
