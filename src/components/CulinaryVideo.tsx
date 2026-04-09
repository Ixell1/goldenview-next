'use client';

import { useRef } from 'react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

const translations = {
  sr: {
    sectionTitle: 'Iz naše kuhinje',
    heading: 'Pogledajte kako nastaju ukusi Goldenview-a',
  },
  en: {
    sectionTitle: 'From our kitchen',
    heading: 'Watch how Goldenview flavors are created',
  },
};

export default function CulinaryVideo() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const revealRef = useReveal();

  return (
    <section className="video-section section-pad">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">{t.sectionTitle}</span>
          <h2>{t.heading}</h2>
        </div>

        <div className="video-wrap reveal">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/FUzXlzyzhy0?modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
            title="Goldenview culinary"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
