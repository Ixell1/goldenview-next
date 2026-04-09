'use client';

import { useLang } from '@/context/LangContext';

const translations = {
  sr: {
    tagline: 'Doživljaj koji će vas ostaviti bez daha',
    accommodations: 'SMEŠTAJ',
    apartments: 'Apartmani',
    prices: 'Cene',
    benefits: 'Povoljnosti',
    experience: 'DOŽIVLJAJ',
    restaurant: 'Restoran',
    wellness: 'Wellness & SPA',
    gallery: 'Galerija',
    contact: 'KONTAKT',
    address: 'Sokobanja, Rtanjska bb, Srbija',
    phone: '063/604-808',
    copyright: '© 2025 Goldenview. Sva prava su zadržana.',
  },
  en: {
    tagline: 'An experience that will leave you breathless',
    accommodations: 'ACCOMMODATIONS',
    apartments: 'Apartments',
    prices: 'Prices',
    benefits: 'Benefits',
    experience: 'EXPERIENCE',
    restaurant: 'Restaurant',
    wellness: 'Wellness & SPA',
    gallery: 'Gallery',
    contact: 'CONTACT',
    address: 'Sokobanja, Rtanjska bb, Serbia',
    phone: '063/604-808',
    copyright: '© 2025 Goldenview. All rights reserved.',
  },
};

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="footer" style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '3rem 2rem 1rem' }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <div className="footer-logo" style={{ marginBottom: '1rem' }}>
              <img
                src={`${BASE_URL}logo-goldenview.png`}
                alt="Goldenview"
                style={{ height: '40px', marginBottom: '1rem' }}
              />
            </div>
            <p style={{ fontSize: '0.875rem', color: '#ccc', marginBottom: '1.5rem' }}>{t.tagline}</p>
            <div className="footer-socials" style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://instagram.com/goldenview"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: '#000',
                  fontWeight: 'bold',
                }}
              >
                f
              </a>
              <a
                href="https://facebook.com/goldenview"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: '#000',
                  fontWeight: 'bold',
                }}
              >
                i
              </a>
            </div>
          </div>

          {/* Column 2: Accommodations */}
          <div className="footer-col">
            <h4 className="eyebrow" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {t.accommodations}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#apartmani" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.apartments}
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#cene" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.prices}
                </a>
              </li>
              <li>
                <a href="#povoljnosti" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.benefits}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Experience */}
          <div className="footer-col">
            <h4 className="eyebrow" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {t.experience}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#restoran" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.restaurant}
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#wellness" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.wellness}
                </a>
              </li>
              <li>
                <a href="#galerija" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem' }}>
                  {t.gallery}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="eyebrow" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {t.contact}
            </h4>
            <div className="footer-contact-row" style={{ marginBottom: '1rem' }}>
              <div className="footer-contact-icon" style={{ marginBottom: '0.5rem' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginRight: '0.5rem', display: 'inline' }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#ccc', margin: 0 }}>{t.address}</p>
            </div>
            <div className="footer-contact-row">
              <div className="footer-contact-icon" style={{ marginBottom: '0.5rem' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginRight: '0.5rem', display: 'inline' }}
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <a href="tel:063604808" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 'bold' }}>
                {t.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid #333',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#999',
          }}
        >
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
