'use client';

import Image from 'next/image';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';

type Cat = 'all' | 'apartmani' | 'restoran' | 'wellness';

const APT_IMAGES = [
  '/apt-images/apartman-1.webp',
  '/apt-images/apartman-2.webp',
  '/apt-images/apartman-3.webp',
  '/apt-images/apartman-4.webp',
  '/apt-images/apartman-5.webp',
  '/apt-images/apt-6.webp',
  '/apt-images/apt-7.webp',
  '/apt-images/apt-8.webp',
  '/apt-images/apt-9.webp',
  '/apt-images/apt-10.webp',
  '/apt-images/apt-11.webp',
  '/apt-images/apt-12.webp',
  '/apartmangrid.webp',
];

const REST_IMAGES = [
  '/rest-images/new/ambient-1.webp',
  '/rest-images/new/ambient-2.webp',
  '/rest-images/new/lounge-1.webp',
  '/rest-images/new/lounge-2.webp',
  '/rest-images/new/lounge-3.webp',
  '/rest-images/new/food-hero.webp',
  '/rest-images/new/food-steak.webp',
  '/rest-images/new/food-pasta.webp',
  '/rest-images/new/food-salmon.webp',
  '/rest-images/new/food-cevapi.webp',
  '/rest-images/new/food-cevapi2.webp',
  '/rest-images/new/food-chicken.webp',
  '/rest-images/new/food-chicken2.webp',
  '/rest-images/new/food-meze.webp',
  '/rest-images/new/food-bruschetta.webp',
  '/rest-images/new/food-burger.webp',
  '/rest-images/new/food-halloumi.webp',
  '/rest-images/new/food-salad.webp',
  '/rest-images/new/dorucak-1.webp',
  '/rest-images/new/dorucak-2.webp',
  '/rest-images/new/desert-1.webp',
  '/rest-images/new/desert-2.webp',
  '/rest-images/new/koktel-1.webp',
  '/rest-images/new/koktel-2.webp',
  '/rest-images/new/koktel-3.webp',
  '/rest-images/new/koktel-4.webp',
  '/rest-images/new/koktel-5.webp',
  '/restoran-1-scaled.webp',
];

const SPA_IMAGES = [
  '/spa-images/new/ambijent-spa.webp',
  '/spa-images/new/bazen-otvoreni.webp',
  '/spa-images/new/bazen-zatvoreni.webp',
  '/spa-images/new/sauna.webp',
  '/spa-images/new/sauna-2.webp',
  '/spa-images/new/djakuzi.webp',
  '/spa-images/new/djakuzi-2.webp',
  '/spa-images/new/djakuzi-close.webp',
  '/spa-images/new/djakuzi-terasa.webp',
  '/spa-images/new/kaldarijum.webp',
  '/spa-images/new/parno.webp',
  '/spa-images/new/lezaljke.webp',
  '/spa-images/new/bure.webp',
  '/spa-images/new/tusevi.webp',
  '/spa-images/new/masaza.webp',
  '/spa-images/new/masaza-soba.webp',
  '/spa-images/new/masaza-lice.webp',
  '/spa-1-scaled.webp',
];

const CATEGORIES: { id: Cat; sr: string; en: string; images: string[] }[] = [
  { id: 'apartmani', sr: 'Apartmani', en: 'Apartments', images: APT_IMAGES },
  { id: 'restoran',  sr: 'Restoran',  en: 'Restaurant', images: REST_IMAGES },
  { id: 'wellness',  sr: 'Wellness',  en: 'Wellness',   images: SPA_IMAGES },
];

const TABS: { id: Cat; sr: string; en: string }[] = [
  { id: 'all',       sr: 'Sve',        en: 'All' },
  { id: 'apartmani', sr: 'Apartmani',  en: 'Apartments' },
  { id: 'restoran',  sr: 'Restoran',   en: 'Restaurant' },
  { id: 'wellness',  sr: 'Wellness',   en: 'Wellness' },
];

export default function GalerijaPage() {
  const [tab, setTab] = useState<Cat>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visibleCategories = tab === 'all' ? CATEGORIES : CATEGORIES.filter((c) => c.id === tab);

  return (
    <>
      <Nav active="/galerija" onDarkHero />
      <RevealOnScroll />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/Hero-goldenview.webp" alt="Goldenview" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero-content">
          <span className="eyebrow"><span data-sr="Galerija" data-en="Gallery">Galerija</span></span>
          <h1>
            <span data-sr="Svaki detalj" data-en="Every detail">Svaki detalj</span>
            <span className="cursive" data-sr="govori za sebe" data-en="speaks for itself">govori za sebe</span>
          </h1>
          <p>
            <span data-sr="Pogledajte sve prostore Goldenview-a — apartmane, restoran i wellness & SPA zonu."
                  data-en="Browse all Goldenview spaces — apartments, restaurant and wellness & SPA zone.">
              Pogledajte sve prostore Goldenview-a — apartmane, restoran i wellness & SPA zonu.
            </span>
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="section-pad">
        <div className="container">
          <div className="gallery-tabs reveal">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`gallery-tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <span data-sr={t.sr} data-en={t.en}>{t.sr}</span>
              </button>
            ))}
          </div>

          {/* CATEGORIES */}
          {visibleCategories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '4rem' }}>
              <div className="gallery-category-header reveal">
                <h3>
                  <span data-sr={cat.sr} data-en={cat.en}>{cat.sr}</span>
                  <span className="gallery-count">{cat.images.length}</span>
                </h3>
              </div>
              <div className="gallery-masonry">
                {cat.images.map((src, i) => (
                  <div
                    key={src}
                    className="gallery-tile reveal"
                    onClick={() => setLightbox(src)}
                    style={{ animationDelay: `${(i % 6) * 0.05}s` }}
                  >
                    <Image
                      src={src}
                      alt={`${cat.sr} ${i + 1}`}
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        titleSr="Vidimo se u "
        titleEn="See you in "
        titleCursiveSr="Sokobanji"
        titleCursiveEn="Sokobanja"
        bodySr="Pozovite nas za rezervaciju apartmana ili stola u restoranu."
        bodyEn="Call us to book an apartment or a table at the restaurant."
      />

      <Footer />

      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">×</button>
          <Image
            src={lightbox}
            alt="Gallery"
            width={1600}
            height={1200}
            sizes="90vw"
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', width: 'auto', height: 'auto' }}
          />
        </div>
      )}
    </>
  );
}
