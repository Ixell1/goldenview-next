'use client';

import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

export default function PromoPackages() {
  const { lang } = useLang();
  const revealRef = useReveal();

  const packages = [
    {
      id: 1,
      image: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg',
      alt: 'Uskrs u Goldenview',
      period: {
        sr: '10 - 14. april 2026.',
        en: 'April 10 - 14, 2026',
      },
      price: {
        sr: '19000 rsd',
        en: 'Call us',
      },
      title: {
        prefix: {
          sr: 'Uskrs u',
          en: 'Easter at',
        },
        cursive: 'Goldenview',
      },
      description: {
        sr: 'Izaberite idealnu destinaciju za odmor tokom Uskrsa. Paket važi za 3 noći u periodu 10-14. april.',
        en: 'Choose the ideal destination for your Easter holiday. Package valid for 3 nights, April 10-14.',
      },
      tags: [
        { sr: '3 noćenja', en: '3 nights' },
        { sr: 'Bazen', en: 'Pool' },
        { sr: 'Parking', en: 'Parking' },
      ],
      delay: '',
    },
    {
      id: 2,
      image: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg',
      alt: 'Prvi maj u Goldenview',
      period: {
        sr: '30. apr - 03. maj 2026.',
        en: 'Apr 30 - May 03, 2026',
      },
      price: {
        sr: '22 000 rsd',
        en: 'Call us',
      },
      title: {
        prefix: {
          sr: 'Prvi maj u',
          en: 'May Day at',
        },
        cursive: 'Goldenview',
      },
      description: {
        sr: 'Izaberite idealnu destinaciju za odmor tokom Prvomajskih praznika i provedite kvalitetno vreme sa dragim osobama. Paket važi za 3 noći u periodu 30.04-03.05.2026.',
        en: 'Choose the ideal destination for your May Day holiday and spend quality time with loved ones. Package valid for 3 nights, Apr 30 - May 03, 2026.',
      },
      tags: [
        { sr: '3 noćenja', en: '3 nights' },
        { sr: 'Bazen', en: 'Pool' },
        { sr: 'Parking', en: 'Parking' },
      ],
      delay: 'delay-1',
    },
    {
      id: 3,
      image: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-1-scaled.webp',
      alt: 'Produzi i ustedi',
      period: {
        sr: 'Radnim danima · 2 osobe',
        en: 'Weekdays · 2 persons',
      },
      price: {
        sr: '18 000 rsd',
        en: 'Call us',
      },
      title: {
        prefix: {
          sr: 'Produži i',
          en: 'Stay longer &',
        },
        cursive: {
          sr: 'uštedi',
          en: 'save',
        },
      },
      description: {
        sr: 'Pravo je vreme za kratak predah tokom radnih dana u okviru našeg promo paketa. Cena se odnosi na 3 noćenja radnim danima za 2 osobe.',
        en: 'The perfect time for a short break during weekdays with our promo package. Price is for 3 nights on weekdays for 2 persons.',
      },
      tags: [
        { sr: '3 noćenja', en: '3 nights' },
        { sr: 'Bazen', en: 'Pool' },
        { sr: 'Parking', en: 'Parking' },
      ],
      delay: 'delay-2',
    },
  ];

  return (
    <section className="promo-section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">
            {lang === 'sr' ? 'Promo Paketi' : 'Promo Packages'}
          </span>
          <h2>
            <span>
              {lang === 'sr' ? 'Specijalne ponude' : 'Special offers'}
            </span>
            <br />
            <span className="cursive">
              {lang === 'sr' ? 'za savršen odmor' : 'for a perfect getaway'}
            </span>
          </h2>
        </div>
        <div className="promo-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`promo-card reveal ${pkg.delay}`}
            >
              <div className="promo-img">
                <img src={pkg.image} alt={pkg.alt} />
                <div className="promo-period">
                  {lang === 'sr' ? pkg.period.sr : pkg.period.en}
                </div>
                <div className="promo-price-badge">
                  <span className="promo-price-label">
                    {lang === 'sr' ? 'od' : 'from'}
                  </span>
                  <span>
                    {lang === 'sr' ? pkg.price.sr : pkg.price.en}
                  </span>
                </div>
              </div>
              <div className="promo-body">
                <h3>
                  <span>
                    {lang === 'sr'
                      ? pkg.title.prefix.sr
                      : pkg.title.prefix.en}
                  </span>
                  <span className="cursive">
                    {typeof pkg.title.cursive === 'string'
                      ? pkg.title.cursive
                      : lang === 'sr'
                        ? pkg.title.cursive.sr
                        : pkg.title.cursive.en}
                  </span>
                </h3>
                <p className="promo-desc">
                  {lang === 'sr'
                    ? pkg.description.sr
                    : pkg.description.en}
                </p>
                <div className="promo-divider"></div>
                <div className="promo-includes">
                  {pkg.tags.map((tag, idx) => (
                    <span key={idx} className="promo-include-tag">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        {lang === 'sr' ? tag.sr : tag.en}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="promo-btns">
                  <a
                    href="#apartmani"
                    className="btn btn-outline-green"
                  >
                    {lang === 'sr' ? 'Saznaj više' : 'Learn more'}
                  </a>
                  <a
                    href="tel:063604808"
                    className="btn btn-dark-green"
                  >
                    {lang === 'sr' ? 'Rezerviši odmah' : 'Book now'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
