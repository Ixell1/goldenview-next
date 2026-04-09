'use client';

import { useRef } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const { lang } = useLang();

  // useReveal for left content
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subtitleRef = useRef(null);
  const btnsRef = useRef(null);
  const trustRef = useRef(null);

  useReveal(badgeRef);
  useReveal(h1Ref);
  useReveal(subtitleRef);
  useReveal(btnsRef);
  useReveal(trustRef);

  // useReveal for right image
  const imageWrapRef = useRef(null);
  useReveal(imageWrapRef);

  return (
    <section>
      <div className="hero">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-badge-booking reveal" ref={badgeRef}>
            <span className="stars">★★★★★</span>
            <span className="score">9.9</span>
            <span style={{ opacity: 0.6, fontWeight: 500, fontSize: '0.75rem' }}>
              {lang === 'sr'
                ? 'na Booking.com · 190+ recenzija'
                : 'on Booking.com · 190+ reviews'}
            </span>
          </div>

          <h1 className="hero-h1 reveal delay-1" ref={h1Ref}>
            <span>
              {lang === 'sr' ? 'Vaš privatni kutak' : 'Your private retreat'}
            </span>
            <span className="line2">
              {lang === 'sr' ? 'mira u Sokobanji' : 'in Sokobanja'}
            </span>
          </h1>

          <p className="hero-sub reveal delay-2" ref={subtitleRef}>
            {lang === 'sr'
              ? 'Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda.'
              : 'Modern apartments with pool, a restaurant serving homemade food, and the peace you deserve — all in one place, 2.5 hours from Belgrade.'}
          </p>

          <div className="hero-btns reveal delay-3" ref={btnsRef}>
            <a href="tel:063604808" className="btn btn-gold">
              {lang === 'sr' ? 'Proveri dostupnost' : 'Check availability'}
            </a>
            <a href="#apartmani" className="btn btn-outline">
              {lang === 'sr' ? 'Pogledaj apartmane' : 'View apartments'}
            </a>
          </div>

          <div className="hero-trust reveal delay-4" ref={trustRef}>
            <span>{lang === 'sr' ? 'Besplatan parking' : 'Free parking'}</span>
            <div className="hero-trust-dot"></div>
            <span>{lang === 'sr' ? 'Bazen za sve goste' : 'Pool for all guests'}</span>
            <div className="hero-trust-dot"></div>
            <span>{lang === 'sr' ? 'Direktna rezervacija' : 'Book direct'}</span>
          </div>
        </div>

        {/* Right: Image + floating cards */}
        <div className="hero-image-wrap reveal-right" ref={imageWrapRef}>
          <img
            src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/Hero-goldenview.webp"
            alt="Goldenview Spa & Wellness"
          />

          <div className="hero-float hero-float-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>{lang === 'sr' ? 'Moderan SPA' : 'Modern SPA'}</span>
          </div>

          <div className="hero-float hero-float-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>{lang === 'sr' ? 'Prostrani apartmani' : 'Spacious apartments'}</span>
          </div>

          <div className="hero-float hero-float-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{lang === 'sr' ? 'Restoran u objektu' : 'On-site restaurant'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
