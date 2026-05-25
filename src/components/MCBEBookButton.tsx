'use client';

import { ReactNode } from 'react';
import Script from 'next/script';

const TOKEN = '543675979618b77d1fca1d09d889baf73fa7a';
const JS_SRC = 'https://api.mobile-calendar.com/v1/static/js/mcbe-widget.min.js';
const CSS_HREF = 'https://api.mobile-calendar.com/v1/static/css/mcbe-widget.min.css';

type Props = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

// Visible button uses our brand styling; the real MCBE button is layered
// on top with opacity 0 so MCBE's own click handler fires and opens the
// booking modal, but the user sees and hovers our brand button.
export default function MCBEBookButton({
  children,
  className = 'btn btn-gold',
  fullWidth = false,
}: Props) {
  // Safety net: if the user happens to click outside the inner MCBE
  // button (e.g. clicked the padding area of our gold pill), forward
  // the click to MCBE's injected <button>.
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.mcbe-booking-button, .mc-booking-engine')) return;
    const inner = e.currentTarget.querySelector<HTMLButtonElement>(
      '.mcbe-booking-button, .mc-booking-engine'
    );
    if (inner) {
      e.preventDefault();
      e.stopPropagation();
      inner.click();
    }
  };

  return (
    <>
      <link rel="stylesheet" href={CSS_HREF} precedence="default" />
      <span
        className={`mcbe-overlay-wrap${fullWidth ? ' mcbe-overlay-block' : ''}`}
        onClick={handleClick}
      >
        <span className={`${className} mcbe-overlay-visible`}>{children}</span>
        <div className="mcbe-widget-button mcbe-overlay-hidden" data-token={TOKEN} />
      </span>
      <Script src={JS_SRC} strategy="afterInteractive" />
    </>
  );
}
