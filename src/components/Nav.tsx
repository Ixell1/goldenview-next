'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLang } from '@/context/LangContext';

type NavLink = { href: string; sr: string; en: string };

const LINKS: NavLink[] = [
  { href: '/#o-nama', sr: 'O nama', en: 'About' },
  { href: '/apartmani', sr: 'Apartmani', en: 'Apartments' },
  { href: '/restoran', sr: 'Restoran', en: 'Restaurant' },
  { href: '/#destinacija', sr: 'Destinacija', en: 'Destination' },
  { href: '/wellness', sr: 'Wellness', en: 'Wellness' },
  { href: '/galerija', sr: 'Galerija', en: 'Gallery' },
  { href: '/vesti-i-objave', sr: 'Blog', en: 'Blog' },
  { href: '/kontakt', sr: 'Kontakt', en: 'Contact' },
];

export default function Nav({ active, onDarkHero }: { active?: string; onDarkHero?: boolean } = {}) {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onDarkHero ? 'nav-on-hero' : ''}`} id="mainNav">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo-goldenview.png"
            alt="Goldenview"
            width={140}
            height={44}
            className="nav-logo-img"
            priority
          />
        </Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={active === l.href ? { color: 'var(--gold)' } : undefined}
              >
                <span data-sr={l.sr} data-en={l.en}>{l.sr}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="tel:063604808" className="nav-phone">063 / 604-808</a>
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === 'sr' ? 'active' : ''}`}
              onClick={() => setLang('sr')}
              aria-label="Srpski"
            >SR</button>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="English"
            >EN</button>
          </div>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
          >
            <span data-sr={l.sr} data-en={l.en}>{l.sr}</span>
          </Link>
        ))}
        <a
          href="tel:063604808"
          style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}
        >063 / 604-808</a>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button
            className={`lang-btn ${lang === 'sr' ? 'active' : ''}`}
            onClick={() => setLang('sr')}
          >SR</button>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >EN</button>
        </div>
      </div>
    </>
  );
}
