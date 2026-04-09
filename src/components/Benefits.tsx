'use client';

import { useRef } from 'react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

const translations = {
  sr: {
    sectionTitle: 'Zašto baš Goldenview',
    heading: 'Ono što veliki hoteli ne mogu da vam pruže',
    benefit1Title: 'Boutique atmosfera',
    benefit1Desc:
      'Novi apartmani 32–51 m² sa opremljenom kuhinjom i terasom. Bez hodnika sa stotinu vrata.',
    benefit2Title: 'Domaća kuhinja',
    benefit2Desc:
      'Doručak od lokalnih namirnica, specijaliteti srpske kuhinje, domaća vina. Hrana koju nećete naći u hotelskom bifeu.',
    benefit3Title: 'Pogled na Rtanj',
    benefit3Desc:
      'Zlatni pogled po kome nosimo ime — probudite se uz panoramu mistične piramide Rtnja pravo sa vaše terase.',
    benefit4Title: 'Besplatan parking',
    benefit4Desc:
      'Bez lutanja, bez doplate. Parkirajte i zaboravite na auto do odlaska.',
  },
  en: {
    sectionTitle: 'Why Goldenview',
    heading: 'What large hotels can't give you',
    benefit1Title: 'Boutique atmosphere',
    benefit1Desc:
      'New apartments 32–51 m² with equipped kitchen and terrace. No corridors with a hundred doors.',
    benefit2Title: 'Home-style kitchen',
    benefit2Desc:
      'Breakfast from local ingredients, Serbian specialties, local wines. Food you won't find in a hotel buffet.',
    benefit3Title: 'View of Mt. Rtanj',
    benefit3Desc:
      'The golden view we're named after — wake up to the panorama of the mystical Rtanj pyramid right from your terrace.',
    benefit4Title: 'Free parking',
    benefit4Desc:
      'No searching, no extra charge. Park and forget about your car until departure.',
  },
};

export default function Benefits() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const revealRef = useReveal();

  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">{t.sectionTitle}</span>
          <h2>{t.heading}</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card reveal">
            <div className="benefit-icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3>{t.benefit1Title}</h3>
            <p>{t.benefit1Desc}</p>
          </div>
          <div className="benefit-card reveal delay-1">
            <div className="benefit-icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M18 8h1a4 4 0 010 8h-1" />
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <h3>{t.benefit2Title}</h3>
            <p>{t.benefit2Desc}</p>
          </div>
          <div className="benefit-card reveal delay-2">
            <div className="benefit-icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                <path d="M2 22l4-6 4 3 4-5 4 4 4-3" />
              </svg>
            </div>
            <h3>{t.benefit3Title}</h3>
            <p>{t.benefit3Desc}</p>
          </div>
          <div className="benefit-card reveal delay-3">
            <div className="benefit-icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3>{t.benefit4Title}</h3>
            <p>{t.benefit4Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
