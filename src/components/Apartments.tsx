'use client';

import { useRef, useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { useSwipe } from '@/hooks/useSwipe';

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

interface Apartment {
  id: string;
  badge: { sr: string; en: string };
  nameDisplay: { sr: string; en: string };
  size: string;
  guests: { sr: string; en: string };
  image: string;
  price: string;
}

export const Apartments = () => {
  const { lang } = useLang();
  const headerRef = useReveal();
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Determine items per view based on window width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setItemsPerView(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2);
        } else {
          setItemsPerView(3);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const apartments: Apartment[] = [
    {
      id: 'a1',
      badge: { sr: 'A1 Duplex', en: 'A1 Duplex' },
      nameDisplay: { sr: 'A1 Duplex', en: 'A1 Duplex' },
      size: '42',
      guests: { sr: 'do 4 gosta', en: 'up to 4 guests' },
      image: `${BASE_URL}apartman-2.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'a2',
      badge: { sr: 'A2 Duplex', en: 'A2 Duplex' },
      nameDisplay: { sr: 'A2 Duplex', en: 'A2 Duplex' },
      size: '42',
      guests: { sr: 'do 4 gosta', en: 'up to 4 guests' },
      image: `${BASE_URL}apartman-4.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b2',
      badge: { sr: 'B2 Jednosobni', en: 'B2 One-bedroom' },
      nameDisplay: { sr: 'B2 Jednosobni', en: 'B2 One-bedroom' },
      size: '35',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-5.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b3',
      badge: { sr: 'B3 Dvosobni', en: 'B3 Two-bedroom' },
      nameDisplay: { sr: 'B3 Dvosobni', en: 'B3 Two-bedroom' },
      size: '51',
      guests: { sr: 'do 5 gostiju', en: 'up to 5 guests' },
      image: `${BASE_URL}apartman-3.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b4',
      badge: { sr: 'B4 Studio', en: 'B4 Studio' },
      nameDisplay: { sr: 'B4 Studio', en: 'B4 Studio' },
      size: '32',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-1.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b5',
      badge: { sr: 'B5 Studio', en: 'B5 Studio' },
      nameDisplay: { sr: 'B5 Studio', en: 'B5 Studio' },
      size: '32',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-2.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b6',
      badge: { sr: 'B6 Dvosobni', en: 'B6 Two-bedroom' },
      nameDisplay: { sr: 'B6 Dvosobni', en: 'B6 Two-bedroom' },
      size: '49',
      guests: { sr: 'do 4 gosta', en: 'up to 4 guests' },
      image: `${BASE_URL}apartman-4.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'b7',
      badge: { sr: 'B7 Jednosobni', en: 'B7 One-bedroom' },
      nameDisplay: { sr: 'B7 Jednosobni', en: 'B7 One-bedroom' },
      size: '35',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-5.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'c2',
      badge: { sr: 'C2 Jednosobni', en: 'C2 One-bedroom' },
      nameDisplay: { sr: 'C2 Jednosobni', en: 'C2 One-bedroom' },
      size: '35',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-3.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'c3',
      badge: { sr: 'C3 Jednosobni', en: 'C3 One-bedroom' },
      nameDisplay: { sr: 'C3 Jednosobni', en: 'C3 One-bedroom' },
      size: '35',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-1.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'c4',
      badge: { sr: 'C4 Jednosobni', en: 'C4 One-bedroom' },
      nameDisplay: { sr: 'C4 Jednosobni', en: 'C4 One-bedroom' },
      size: '35',
      guests: { sr: 'do 2 gosta', en: 'up to 2 guests' },
      image: `${BASE_URL}apartman-2.jpg`,
      price: '8300 rsd',
    },
    {
      id: 'placeholder',
      badge: { sr: 'Uskoro', en: 'Coming soon' },
      nameDisplay: { sr: 'Novi Apartman', en: 'New Apartment' },
      size: '—',
      guests: { sr: 'uskoro', en: 'coming soon' },
      image: `${BASE_URL}apartman-4.jpg`,
      price: 'kontakt',
    },
  ];

  const labels = {
    sr: {
      eyebrow: 'Smeštaj',
      title: 'Izaberite apartman koji vam odgovara',
      description:
        'Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu.',
      priceLabel: 'Cena po noći',
      book: 'Rezerviši',
      kitchen: 'Kuhinja',
      ac: 'Klima',
      terrace: 'Terasa',
    },
    en: {
      eyebrow: 'Accommodation',
      title: 'Choose your perfect apartment',
      description:
        'Twelve apartments — from a compact studio to a family duplex. All with kitchen, AC, smart TV and pool access.',
      priceLabel: 'Price per night',
      book: 'Book',
      kitchen: 'Kitchen',
      ac: 'A/C',
      terrace: 'Terrace',
    },
  };

  const currentLabels = lang === 'sr' ? labels.sr : labels.en;

  const maxIndex = Math.max(0, apartments.length - itemsPerView);

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Swipe support
  useSwipe(sliderRef, goToNext, goToPrev);

  // Translate track
  const translateX =
    itemsPerView === 1
      ? currentIndex * -100
      : itemsPerView === 2
        ? currentIndex * -50
        : currentIndex * -33.333;

  // Get apartment name parts for display
  const getNameParts = (apt: Apartment) => {
    const fullName = apt.nameDisplay[lang];
    const parts = fullName.split(' ');
    return { first: parts[0], rest: parts.slice(1).join(' ') };
  };

  return (
    <section id="apartmani" className="apts-section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="eyebrow">{currentLabels.eyebrow}</span>
        <h2>{currentLabels.title}</h2>
        <p>{currentLabels.description}</p>
      </div>

      <div className="apt-slider-wrap container">
        <div
          ref={sliderRef}
          className="apt-slider"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div
            ref={trackRef}
            className="apt-slider-track"
            id="aptTrack"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${apartments.length}, calc(100% / ${itemsPerView}))`,
              transition: 'transform 0.4s ease-out',
              transform: `translateX(${translateX}%)`,
            }}
          >
            {apartments.map((apt) => {
              const nameParts = getNameParts(apt);
              return (
                <div key={apt.id} className="apt-card">
                  <div className="apt-img">
                    <img src={apt.image} alt={apt.badge[lang]} />
                    <span className="apt-badge">{apt.badge[lang]}</span>
                  </div>
                  <div className="apt-body">
                    <h3>
                      <span className="cursive">{nameParts.first}</span>{' '}
                      {nameParts.rest}
                    </h3>
                    <p className="apt-meta">
                      {apt.size} m&sup2; &middot; {apt.guests[lang]}
                    </p>
                    <div className="apt-pills">
                      <span className="apt-pill">WiFi</span>
                      <span className="apt-pill">{currentLabels.ac}</span>
                      <span className="apt-pill">Smart TV</span>
                      <span className="apt-pill">{currentLabels.kitchen}</span>
                      <span className="apt-pill">{currentLabels.terrace}</span>
                    </div>
                    <div className="apt-footer">
                      <div className="apt-price-wrap">
                        <span className="price-from">
                          {currentLabels.priceLabel}
                        </span>
                        <span className="price-amount">{apt.price}</span>
                      </div>
                      <a
                        href="tel:063604808"
                        className="btn btn-gold apt-cta"
                      >
                        {currentLabels.book}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls */}
        <button
          className="apt-slider-btn apt-slider-prev"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          aria-label="Previous apartments"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="apt-slider-btn apt-slider-next"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next apartments"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};
