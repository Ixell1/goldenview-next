'use client';

import { useRef } from 'react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

const translations = {
  sr: {
    sectionTitle: 'Restoran',
    heading: 'Domaća kuhinja sa dušom',
    description:
      'Naš restoran nije samo mesto za hranu — to je doživljaj. Svaki obrok je svetinja, od pečenja na roštilju do najjednostavnijeg kajmaka. Koristimo samo lokalne, sezonske sastojke, a recepte čuvamo kao porodinu tajnu.',
    tag1: 'Domaći kajmak i sir',
    tag2: 'Posni meni',
    tag3: 'Vrhunski roštilj',
    tag4: 'Sezonski meni',
    menuButton: 'Pogledaj jelovnik',
  },
  en: {
    sectionTitle: 'Restaurant',
    heading: 'Home-style cuisine with soul',
    description:
      'Our restaurant is not just a place for food — it\'s an experience. Every meal is sacred, from grilled meats to the simplest fresh cheese. We use only local, seasonal ingredients, and keep our recipes like family secrets.',
    tag1: 'Fresh kajmak and cheese',
    tag2: 'Fasting menu',
    tag3: 'Premium grilled meats',
    tag4: 'Seasonal dishes',
    menuButton: 'View menu',
  },
};

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

export default function Restaurant() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const revealRef = useReveal();

  return (
    <section id="restoran" className="rest-section section-pad">
      <div className="container">
        <div className="rest-grid">
          <div className="rest-mosaic">
            <div className="mosaic-item item-1">
              <img
                src={`${BASE_URL}restoran-1-scaled.webp`}
                alt="Restoran 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="mosaic-item item-2">
              <img
                src={`${BASE_URL}restoran-2-scaled.webp`}
                alt="Restoran 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="mosaic-item item-3">
              <img
                src={`${BASE_URL}restoran-3-scaled.webp`}
                alt="Restoran 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="mosaic-item item-4">
              <img
                src={`${BASE_URL}restoran-4-scaled.webp`}
                alt="Restoran 4"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="rest-content reveal-right" ref={revealRef}>
            <span className="eyebrow">{t.sectionTitle}</span>
            <h2>{t.heading}</h2>
            <p>{t.description}</p>

            <div className="rest-tags">
              <span className="rest-tag">{t.tag1}</span>
              <span className="rest-tag">{t.tag2}</span>
              <span className="rest-tag">{t.tag3}</span>
              <span className="rest-tag">{t.tag4}</span>
            </div>

            <a href="/Jelovnik.pdf" className="btn btn-gold" download>
              {t.menuButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
