'use client';

import { useRef, useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { useSwipe } from '../hooks/useSwipe';

const translations = {
  sr: {
    sectionTitle: 'Gosti kažu',
  },
  en: {
    sectionTitle: 'Guests Say',
  },
};

const testimonials = [
  {
    sr: {
      quote: 'Prelep smeštaj za svaku preporuku',
      author: 'Snežana',
      type: 'Porodica',
      date: 'Jun 2025',
    },
    en: {
      quote: 'Beautiful accommodation, highly recommended',
      author: 'Snežana',
      type: 'Family',
      date: 'Jun 2025',
    },
    rating: 5,
  },
  {
    sr: {
      quote: 'Izuzetan',
      author: 'Stefan',
      type: 'Par',
      date: 'Maj 2024',
    },
    en: {
      quote: 'Exceptional',
      author: 'Stefan',
      type: 'Couple',
      date: 'May 2024',
    },
    rating: 5,
  },
  {
    sr: {
      quote: 'Best place in Soko Banja',
      author: 'Miomir',
      type: 'Porodica',
      date: 'Jul 2023',
    },
    en: {
      quote: 'Best place in Soko Banja',
      author: 'Miomir',
      type: 'Family',
      date: 'Jul 2023',
    },
    rating: 5,
  },
  {
    sr: {
      quote: 'Prelepo, bazen čist i topau',
      author: 'Sonja',
      type: 'Porodica',
      date: 'Jul 2024',
    },
    en: {
      quote: 'Beautiful, pool is clean and warm',
      author: 'Sonja',
      type: 'Family',
      date: 'Jul 2024',
    },
    rating: 5,
  },
  {
    sr: {
      quote: 'Overall a great experience',
      author: 'Harding',
      type: 'Par',
      date: 'Sep 2025',
    },
    en: {
      quote: 'Overall a great experience',
      author: 'Harding',
      type: 'Couple',
      date: 'Sep 2025',
    },
    rating: 5,
  },
  {
    sr: {
      quote: 'Čist, potpuno nov apartman',
      author: 'Katarina',
      type: 'Par',
      date: 'Feb 2024',
    },
    en: {
      quote: 'Clean, completely new apartment',
      author: 'Katarina',
      type: 'Couple',
      date: 'Feb 2024',
    },
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;
  const totalItems = testimonials.length;

  // Handle swipe
  useSwipe(
    trackRef,
    () => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    },
    () => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }
  );

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testi-section section-pad">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">{t.sectionTitle}</span>
        </div>

        <div
          className="booking-authority"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div className="booking-logo-text" style={{ fontSize: '0.875rem', color: '#666' }}>
              Booking.com
            </div>
            <div className="booking-score-big" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003580' }}>
              9.9
            </div>
            <div style={{ fontSize: '0.875rem', color: '#666' }}>190+ reviews</div>
          </div>
          <div className="booking-divider" style={{ width: '1px', height: '60px', backgroundColor: '#ddd' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', color: '#666' }}>Google</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f57c00' }}>5.0</div>
            <div style={{ fontSize: '0.875rem', color: '#666' }}>★★★★★</div>
          </div>
        </div>

        <div
          className="testi-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="testi-carousel-wrap">
            <div
              ref={trackRef}
              className="testi-track"
              style={{
                display: 'flex',
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              {testimonials.map((testi, idx) => (
                <div
                  key={idx}
                  className="testi-card"
                  style={{
                    minWidth: `${100 / itemsPerView}%`,
                    padding: '0 1rem',
                  }}
                >
                  <div className="testi-stars">
                    {Array.from({ length: testi.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testi-quote">{(testi as any)[lang].quote}</p>
                  <div className="testi-author">
                    <div className="testi-headline">{(testi as any)[lang].author}</div>
                    <div className="testi-meta">
                      {(testi as any)[lang].type} • {(testi as any)[lang].date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-controls">
            <button className="testi-btn testi-prev" onClick={handlePrev} aria-label="Previous testimonial">
              ←
            </button>
            <button className="testi-btn testi-next" onClick={handleNext} aria-label="Next testimonial">
              →
            </button>
          </div>

          <div className="testi-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testi-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
