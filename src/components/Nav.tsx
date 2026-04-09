'use client';

import { useContext, useState, useEffect } from 'react';
import { LangContext } from '@/context/LangContext';

export default function Nav() {
  const { lang, setLang } = useContext(LangContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#o-nama', sr: 'O nama', en: 'About' },
    { href: '#apartmani', sr: 'Apartmani', en: 'Apartments' },
    { href: '#restoran', sr: 'Restoran', en: 'Restaurant' },
    { href: '#destinacija', sr: 'Destinacija', en: 'Destination' },
    { href: '#galerija', sr: 'Galerija', en: 'Gallery' },
    { href: '#kontakt', sr: 'Kontakt', en: 'Contact' },
  ];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="mainNav">
        <a href="/" className="nav-logo">
          <img
            src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/logo-goldenview.png"
            alt="Goldenview"
            className="nav-logo-img"
          />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                {lang === 'sr' ? link.sr : link.en}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="tel:063604808" className="nav-phone">
            063 / 604-808
          </a>
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === 'sr' ? 'active' : ''}`}
              onClick={() => setLang('sr')}
            >
              SR
            </button>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="nav-hamburger"
          id="hamburger"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`} id="mobileNav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileNavOpen(false)}
          >
            {lang === 'sr' ? link.sr : link.en}
          </a>
        ))}
        <a
          href="tel:063604808"
          style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}
        >
          063 / 604-808
        </a>
      </div>
    </>
  );
}
