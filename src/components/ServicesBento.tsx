'use client';

import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

interface BentoCard {
  id: string;
  image: string;
  pill: { sr: string; en: string };
  title: { sr: string; en: string };
  link: string;
  linkText: { sr: string; en: string };
  delayClass: string;
}

export default function ServicesBento() {
  const { lang } = useLang();
  const headerRef = useReveal();

  const bentoCards: BentoCard[] = [
    {
      id: 'apartmani',
      image: `${BASE_URL}apartman-3.jpg`,
      pill: { sr: 'APARTMANI', en: 'APARTMENTS' },
      title: { sr: 'Prostor koji diše', en: 'Space to breathe' },
      link: '#apartmani',
      linkText: { sr: 'Izaberi apartman →', en: 'Choose apartment →' },
      delayClass: '',
    },
    {
      id: 'wellness',
      image: `${BASE_URL}spa-1-scaled.webp`,
      pill: { sr: 'WELLNESS & SPA', en: 'WELLNESS & SPA' },
      title: { sr: 'Privatna oaza opuštanja', en: 'Private relaxation oasis' },
      link: '#o-nama',
      linkText: { sr: 'Saznaj više →', en: 'Learn more →' },
      delayClass: 'delay-2',
    },
    {
      id: 'restoran',
      image: `${BASE_URL}restoran-1-scaled.webp`,
      pill: { sr: 'RESTORAN', en: 'RESTAURANT' },
      title: { sr: 'Ukusi koji se pamte', en: 'Flavours to remember' },
      link: '#restoran',
      linkText: { sr: 'Pogledaj meni →', en: 'View menu →' },
      delayClass: 'delay-3',
    },
  ];

  const headerLabels = {
    sr: {
      eyebrow: 'Sve na jednom mestu',
      title: 'Tri razloga zašto gosti dolaze ponovo',
    },
    en: {
      eyebrow: 'Everything in one place',
      title: 'Three reasons guests keep coming back',
    },
  };

  const currentHeaderLabels =
    lang === 'sr' ? headerLabels.sr : headerLabels.en;

  return (
    <section className="section-pad services-section">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow">{currentHeaderLabels.eyebrow}</span>
          <h2>{currentHeaderLabels.title}</h2>
        </div>

        <div className="bento-grid">
          {bentoCards.map((card) => (
            <div key={card.id} className={`bento-card reveal ${card.delayClass}`}>
              <img src={card.image} alt={card.title[lang]} />
              <div className="bento-overlay">
                <div className="bento-pill">{card.pill[lang]}</div>
                <div className="bento-title">{card.title[lang]}</div>
                <a href={card.link} className="bento-link">
                  {card.linkText[lang]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
