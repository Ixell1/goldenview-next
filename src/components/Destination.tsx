'use client';

import { useRef } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

const translations = {
  sr: {
    location: 'Lokacija',
    title1: 'Zeleno srce Srbije,',
    title2: 'na dohvat ruke',
    description:
      'Sokobanja leži ušuškana između Ozrena i Rtnja, na obalama reke Moravice. Njene termalne vode koriste se za lečenje još od rimskog doba — a čist vazduh, bogat negativnim jonima, čini je jedinom vazdušnom banjom u jugoistočnoj Evropi.',
    feature1Title: '5 minuta od centra',
    feature1Desc: 'Blizina svega što vam treba, a opet mir i privatnost.',
    feature2Title: 'Čist vazduh i termalna voda',
    feature2Desc:
      'Termalni izvori do 53°C, mineralne vode bogate sumporom i jodom.',
    feature3Title: 'Priroda i avantura',
    feature3Desc:
      'Sokograd, Ripaljka, Bovansko jezero — sve unutar 15 minuta.',
  },
  en: {
    location: 'Location',
    title1: 'Green heart of Serbia,',
    title2: 'within easy reach',
    description:
      'Sokobanja nestles between Ozren and Rtanj mountains, on the banks of the Moravica river. Its thermal waters have been used for healing since Roman times — and the air, rich in negative ions, makes it the only air spa in Southeast Europe.',
    feature1Title: '5 min from the center',
    feature1Desc: 'Close to everything you need, yet peaceful and private.',
    feature2Title: 'Fresh air and thermal water',
    feature2Desc:
      'Thermal springs up to 53°C, mineral waters rich in sulphur and iodine.',
    feature3Title: 'Nature and adventure',
    feature3Desc:
      'Sokograd, Ripaljka waterfall, Bovansko lake — all within 15 minutes.',
  },
};

export default function Destination() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const revealRef = useReveal();
  const revealRightRef = useReveal();

  return (
    <section id="destinacija" className="dest-section" style={{ marginTop: '3rem' }}>
      <div className="dest-grid">
        <div className="dest-content">
          <span className="eyebrow">{t.location}</span>
          <h2>
            <span>{t.title1}</span>
            <br />
            <span className="cursive">{t.title2}</span>
          </h2>
          <p className="dest-text">{t.description}</p>
          <div className="dest-features">
            <div className="dest-feat reveal" ref={revealRef}>
              <div className="dest-feat-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4>{t.feature1Title}</h4>
                <p>{t.feature1Desc}</p>
              </div>
            </div>
            <div className="dest-feat reveal delay-2">
              <div className="dest-feat-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>{t.feature2Title}</h4>
                <p>{t.feature2Desc}</p>
              </div>
            </div>
            <div className="dest-feat reveal delay-3">
              <div className="dest-feat-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h4>{t.feature3Title}</h4>
                <p>{t.feature3Desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dest-image reveal-right" ref={revealRightRef}>
          <img
            src="https://www.vaucerisrbija.com/images/news/189/thumb/sokobanja-centar.jpg"
            alt="Sokobanja centar"
            style={{ maxHeight: '520px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
