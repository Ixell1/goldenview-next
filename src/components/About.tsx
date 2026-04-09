'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

const BASE_URL = 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/';

interface CounterProps {
  target: number;
  label: string;
  delayClass?: string;
}

const Counter = ({ target, label, delayClass = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const interval = setInterval(() => {
            setCount((prev) => {
              if (prev >= target) {
                clearInterval(interval);
                return target;
              }
              return prev + Math.ceil(target / 30);
            });
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return (
    <div ref={ref} className={`stat-item reveal ${delayClass}`}>
      <span className="stat-number">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default function About() {
  const { lang } = useLang();
  const imagesRef = useReveal();
  const contentRef = useReveal();

  const labels = {
    sr: {
      eyebrow: 'O nama',
      title1: 'Mesto gde se odmor pravi',
      title2: 'po vašoj meri',
      description:
        'Goldenview nije tipičan smeštaj u Sokobanji. Zamislili smo ga kao mesto gde svaki gost ima dovoljno prostora, privatnosti i pažnje — bez onog osećaja da ste jedan od stotinu. Apartmani su potpuno novi, svaki opremljen kuhinjom, klima-uređajem, smart TV-om i terasom. Ispred vas je bazen za opuštanje, a u prizemlju restoran koji služi domaću hranu od svežih, lokalnih namirnica.',
      apartments: 'Tipova apartmana (32–51 m²)',
      reviews: '+ recenzija gostiju',
      reviewsScore: 'Recenzija sa ocenom 10/10',
      distance: 'Od Beograda',
    },
    en: {
      eyebrow: 'About us',
      title1: 'A stay designed',
      title2: 'around you',
      description:
        "Goldenview isn't your typical Sokobanja accommodation. We built it as a place where every guest gets enough space, privacy, and attention — without feeling like one of a hundred. Brand new apartments, each with a kitchen, AC, smart TV, and a terrace. A pool just for our guests. A restaurant serving fresh, local Serbian food.",
      apartments: 'Apartment types (32–51 m²)',
      reviews: '+ guest reviews',
      reviewsScore: 'Reviews rated 10/10',
      distance: 'From Belgrade',
    },
  };

  const currentLabels = lang === 'sr' ? labels.sr : labels.en;

  return (
    <section id="o-nama" className="section-pad">
      <div className="container">
        <div className="about-grid">
          {/* Images Section */}
          <div ref={imagesRef} className="about-images reveal-left">
            <div className="about-blob"></div>
            <div className="about-img-main">
              <img
                src={`${BASE_URL}apartman-1.jpg`}
                alt="Goldenview apartman"
              />
            </div>
            <div className="about-img-sec">
              <img
                src={`${BASE_URL}apartman-2.jpg`}
                alt="Goldenview kuhinja i trpezarija"
              />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="about-content reveal-right">
            <span className="eyebrow">{currentLabels.eyebrow}</span>
            <h2>
              <span>{currentLabels.title1}</span>
              <br />
              <span className="cursive">{currentLabels.title2}</span>
            </h2>
            <p className="about-text">{currentLabels.description}</p>

            {/* Stats Grid */}
            <div className="stats-grid">
              <Counter
                target={12}
                label={currentLabels.apartments}
                delayClass="delay-1"
              />
              <Counter
                target={190}
                label={currentLabels.reviews}
                delayClass="delay-2"
              />
              <div className="stat-item reveal delay-3">
                <span className="stat-number">100%</span>
                <span className="stat-label">{currentLabels.reviewsScore}</span>
              </div>
              <div className="stat-item reveal delay-4">
                <span className="stat-number">2.5h</span>
                <span className="stat-label">{currentLabels.distance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
