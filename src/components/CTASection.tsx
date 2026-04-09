'use client';

import { useLang } from '../context/LangContext';

const translations = {
  sr: {
    heading: 'Rezerviši sada i dobij najbolju cenu',
    note: 'Odgovaramo najkasnije do 1h.',
    button: 'Pozovi nas',
  },
  en: {
    heading: 'Book now and get the best price',
    note: 'We respond within 1 hour at the latest.',
    button: 'Call us',
  },
};

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

export default function CTASection() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];

  return (
    <section
      className="cta-section"
      style={{
        position: 'relative',
        padding: '6rem 2rem',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="cta-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('${BASE_URL}spa-1-scaled.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2,
        }}
      ></div>

      <div
        className="cta-content"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'bold' }}>{t.heading}</h2>

        <div className="cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <a
            href="tel:063604808"
            className="btn btn-gold"
            style={{
              backgroundColor: '#d4af37',
              color: '#000',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            {t.button}
          </a>
          <a
            href="https://wa.me/381636048080"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{
              backgroundColor: '#25D366',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            WhatsApp
          </a>
        </div>

        <p className="cta-note" style={{ fontSize: '0.875rem', fontStyle: 'italic', opacity: 0.9 }}>
          {t.note}
        </p>
      </div>
    </section>
  );
}
