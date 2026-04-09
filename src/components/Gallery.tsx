'use client';

import { useRef, useState } from 'react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { useSwipe } from '@/hooks/useSwipe';

const translations = {
  sr: {
    sectionTitle: 'Galerija',
    heading: 'Vizuelni pregled Goldenview-a',
  },
  en: {
    sectionTitle: 'Gallery',
    heading: 'Visual tour of Goldenview',
  },
};

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

const galleryImages = [
  { name: 'bazen-1-scaled.webp', alt: 'Bazen 1' },
  { name: 'spa-2-scaled.webp', alt: 'Spa 2' },
  { name: 'restoran-1-scaled.webp', alt: 'Restoran 1' },
  { name: 'apartman-1.webp', alt: 'Apartman 1' },
  { name: 'spa-3-scaled.webp', alt: 'Spa 3' },
  { name: 'restoran-3-scaled.webp', alt: 'Restoran 3' },
  { name: 'apartman-3.webp', alt: 'Apartman 3' },
  { name: 'bazen-2-scaled.webp', alt: 'Bazen 2' },
  { name: 'bazen-3-scaled.webp', alt: 'Bazen 3' },
];

export default function Gallery() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const revealRef = useReveal();

  const itemsPerView = typeof window !== 'undefined' ? (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3) : 3;
  const totalImages = galleryImages.length;

  useSwipe(
    trackRef,
    () => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    },
    () => {
      setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleLightboxClose = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + totalImages) % totalImages);
    }
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % totalImages);
    }
  };

  return (
    <section id="galerija" className="gallery-section section-pad">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">{t.sectionTitle}</span>
          <h2>{t.heading}</h2>
        </div>

        <div className="gallery-slider-wrap">
          <div
            ref={trackRef}
            className="gallery-slider-track"
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-slide"
                style={{
                  minWidth: `${100 / itemsPerView}%`,
                  padding: '0 1rem',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(idx)}
                data-src={`${BASE_URL}${img.name}`}
              >
                <img
                  src={`${BASE_URL}${img.name}`}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="gallery-nav">
            <button className="gallery-btn gallery-prev" onClick={handlePrev} aria-label="Previous image">
              ←
            </button>
            <button className="gallery-btn gallery-next" onClick={handleNext} aria-label="Next image">
              →
            </button>
          </div>

          <div className="gallery-dots">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to image ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={handleLightboxClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <button
            className="lightbox-prev"
            onClick={handleLightboxPrev}
            style={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 10000,
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <img
            src={`${BASE_URL}${galleryImages[lightboxIndex].name}`}
            alt={galleryImages[lightboxIndex].alt}
            className="lightboxImg"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          />

          <button
            className="lightbox-next"
            onClick={handleLightboxNext}
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 10000,
            }}
            aria-label="Next image"
          >
            →
          </button>

          <button
            onClick={handleLightboxClose}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 10000,
            }}
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
