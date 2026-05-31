'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileCalendarWidget from '@/components/MobileCalendarWidget';
import MCBEBookButton from '@/components/MCBEBookButton';
import AptVideoBox from '@/components/AptVideoBox';
import YouTubeFacade from '@/components/YouTubeFacade';
import RevealOnScroll from '@/components/RevealOnScroll';

type HomeApt = {
  id: string;
  name_sr: string; name_en: string;
  img: string;
  video?: string;
  size: string;
  cap_sr: string; cap_en: string;
  featured?: boolean;
  featuredLabel_sr?: string;
  featuredLabel_en?: string;
  extra_sr?: string;
  extra_en?: string;
};

// Guest capacities reflect Mobile-Calendar room data (source of truth).
const APTS: HomeApt[] = [
  { id: 'A1', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-2.webp', video: '/apt-videos/a1.mp4', size: '42', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'A2', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-4.webp', video: '/apt-videos/a2.mp4', size: '42', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B2', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-8.webp', video: '/apt-videos/b2.mp4', size: '35', cap_sr: 'do 3 gosta', cap_en: 'up to 3 guests' },
  { id: 'B3', name_sr: 'Dvosobni', name_en: 'Two-bedroom', img: '/apt-images/apartman-3.webp', video: '/apt-videos/b3.mp4', size: '51', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests' },
  { id: 'B4', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apartman-1.webp', video: '/apt-videos/b4.mp4', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B5', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apt-6.webp', video: '/apt-videos/b5.mp4', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  {
    id: 'B6', name_sr: 'Dvosobni', name_en: 'Two-bedroom',
    img: '/apt-images/apt-7.webp', video: '/apt-videos/b6.mp4', size: '49',
    cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests',
    featured: true,
    featuredLabel_sr: 'Najtraženiji', featuredLabel_en: 'Most popular',
    extra_sr: 'Terasa 70m²', extra_en: 'Terrace 70m²',
  },
  { id: 'B7', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-8.webp', video: '/apt-videos/b7.mp4', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C1', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apartman-3.webp', video: '/apt-videos/c1.mp4', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C2', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-9.webp', video: '/apt-videos/c2.mp4', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C3', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-10.webp', video: '/apt-videos/c3.mp4', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C4', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-11.webp', video: '/apt-videos/c4.mp4', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
];

// Curated trio for the home showcase: the most popular (B6),
// the largest (B3 - 51 m²), and a compact studio (B4 - 32 m²).
const FEATURED_IDS = ['B6', 'B3', 'B4'];
const FEATURED_APTS = FEATURED_IDS
  .map((id) => APTS.find((a) => a.id === id))
  .filter((a): a is HomeApt => Boolean(a));

const TESTIMONIALS = [
  {
    headline_sr: 'Prelep smeštaj za svaku preporuku', headline_en: 'Beautiful accommodation',
    text_sr: 'Sve nam se svidelo, smeštaj je za svaku preporuku naročito za porodice sa decom zbog prelepog bazena. Prelepo osmišljen, uredan i elegantan prostor. Jedan od najlepših smeštaja u Soko Banji!',
    text_en: 'Everything was wonderful, the accommodation is highly recommended especially for families with children because of the beautiful pool. Beautifully designed, tidy and elegant space. One of the most beautiful accommodations in Soko Banja!',
    author: 'Snežana',
    meta_sr: 'Apartman sa pogledom · Porodica · jun 2025. · 10/10',
    meta_en: 'Mountain view apt · Family · Jun 2025 · 10/10',
  },
  {
    headline_sr: 'Izuzetan', headline_en: 'Exceptional',
    text_sr: 'Domaćini su toliko prijatni da smo se osećali kao da smo u svom objektu. O tišini, miru, čistoći, kao i celokupnom izgledu kompleksa — prelepo. Apsolutno sve preporuke, i po meni najbolji izbor za odsedanje u banji!',
    text_en: 'The hosts were so warm we felt like we were in our own place. The peace, cleanliness, and overall look of the complex — beautiful. Absolutely all recommendations, in my opinion the best choice for a stay in the spa town!',
    author: 'Stefan',
    meta_sr: 'Apartman sa bazenom · Par · maj 2024. · 10/10',
    meta_en: 'Pool view apt · Couple · May 2024 · 10/10',
  },
  {
    headline_sr: 'Best place in Soko Banja', headline_en: 'Best place in Soko Banja',
    text_sr: 'Everything was on the highest level. The hosts were super friendly, rooms were clean and comfy, facilities were beautiful. I really enjoyed every moment there. If you want to run away from a busy city — this is the right place.',
    text_en: 'Everything was on the highest level. The hosts were super friendly, rooms were clean and comfy, facilities were beautiful. I really enjoyed every moment there. If you want to run away from a busy city — this is the right place.',
    author: 'Miomir',
    meta_sr: 'Pool view apt · Family · Jul 2023 · 10/10',
    meta_en: 'Pool view apt · Family · Jul 2023 · 10/10',
  },
  {
    headline_sr: 'Prelepo, bazen čist i topao', headline_en: 'Beautiful, pool clean and warm',
    text_sr: 'Čistoća celog objekta i unutra i spolja — sve je novo lepo čisto uredno. Bazen se čisti svako veče, voda je topla. Dvorište lepo uređeno i sasvim dovoljno mesta za odmor, sunčanje i druge aktivnosti.',
    text_en: 'Cleanliness of the whole property inside and out — everything is new, clean and tidy. The pool is cleaned every evening, the water is warm. The yard is beautifully arranged with plenty of space for relaxation and sunbathing.',
    author: 'Sonja',
    meta_sr: 'Studio King · Porodica · jul 2024. · 10/10',
    meta_en: 'Studio King · Family · Jul 2024 · 10/10',
  },
  {
    headline_sr: 'Overall a great experience', headline_en: 'Overall a great experience',
    text_sr: 'The people we dealt with at the property were friendly and responsive. It was a pleasure to deal with them.',
    text_en: 'The people we dealt with at the property were friendly and responsive. It was a pleasure to deal with them.',
    author: 'Harding',
    meta_sr: '2-bedroom apt · Sep 2025 · 10/10',
    meta_en: '2-bedroom apt · Sep 2025 · 10/10',
  },
  {
    headline_sr: 'Čist, potpuno nov apartman', headline_en: 'Clean, brand new apartment',
    text_sr: 'Čist, potpuno nov apartman, prvoklasno sređen sa prelepim pogledom na planine. Jako ljubazni i predusretljivi domaćini. Sve je bilo sjajno!',
    text_en: 'Clean, brand new apartment, first-class condition with a beautiful mountain view. Very friendly and attentive hosts. Everything was great!',
    author: 'Katarina',
    meta_sr: 'Pogled na planinu · Par · feb 2024. · 10/10',
    meta_en: 'Mountain view · Couple · Feb 2024 · 10/10',
  },
];

const GALLERY = [
  '/spa-images/new/bazen-otvoreni.webp',
  '/spa-images/new/ambijent-spa.webp',
  '/rest-images/new/ambient-1.webp',
  '/apt-images/apartman-1.webp',
  '/spa-images/new/djakuzi.webp',
  '/rest-images/new/lounge-1.webp',
  '/apt-images/apartman-3.webp',
  '/spa-images/new/bazen-zatvoreni.webp',
  '/spa-images/new/sauna.webp',
];

type Promo = {
  img: string;
  period_sr: string; period_en: string;
  title_sr: string; title_en: string;
  cursive_sr?: string; cursive_en?: string;
  desc_sr: string; desc_en: string;
  tags?: string[];
  tagsEn?: string[];
};

const PROMO_PACKAGES: Promo[] = [
  {
    img: '/apt-images/apartman-1.webp',
    period_sr: '10 - 14. april 2026.', period_en: 'April 10 - 14, 2026',
    title_sr: 'Uskrs u', title_en: 'Easter at',
    desc_sr: 'Izaberite idealnu destinaciju za odmor tokom Uskrsa. Paket važi za 3 noći u periodu 10-14. april.',
    desc_en: 'Choose the ideal destination for your Easter holiday. Package valid for 3 nights, April 10-14.',
    tags: ['3 noćenja', 'Doručak', 'Bazen'],
    tagsEn: ['3 nights', 'Breakfast', 'Pool'],
  },
  {
    img: '/apt-images/apartman-3.webp',
    period_sr: '30. apr - 03. maj 2026.', period_en: 'Apr 30 - May 03, 2026',
    title_sr: 'Prvi maj u', title_en: 'May Day at',
    desc_sr: 'Izaberite idealnu destinaciju za odmor tokom Prvomajskih praznika i provedite kvalitetno vreme sa dragim osobama. Paket važi za 3 noći u periodu 30.04-03.05.2026.',
    desc_en: 'Choose the ideal destination for your May Day holiday and spend quality time with loved ones. Package valid for 3 nights, Apr 30 - May 03, 2026.',
    tags: ['3 noćenja', 'Doručak', 'Bazen'],
    tagsEn: ['3 nights', 'Breakfast', 'Pool'],
  },
  {
    img: '/spa-images/new/lezaljke.webp',
    period_sr: '2 noći · za dvoje', period_en: '2 nights · for two',
    title_sr: 'Spa vikend za', title_en: 'Spa weekend for',
    cursive_sr: 'dvoje', cursive_en: 'two',
    desc_sr: 'Vikend osmišljen za potpuno opuštanje — 2 noćenja sa doručkom, profesionalna masaža i neograničeno korišćenje spa centra (bazeni, sauna, đakuzi, kaldarijum).',
    desc_en: 'A weekend built for total relaxation — 2 nights with breakfast, a professional massage and unlimited spa access (pools, sauna, jacuzzi, caldarium).',
    tags: ['2 noći', 'Doručak', 'Masaža', 'SPA centar'],
    tagsEn: ['2 nights', 'Breakfast', 'Massage', 'SPA access'],
  },
];

export default function Home() {
  const testiTrackRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const [testiIdx, setTestiIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const testiVis = () => (typeof window === 'undefined' ? 2 : window.innerWidth < 768 ? 1 : 2);
  const galVis = () => (typeof window === 'undefined' ? 3 : window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);

  const goTesti = (i: number) => {
    const v = testiVis();
    const pages = Math.ceil(TESTIMONIALS.length / v);
    const p = ((i % pages) + pages) % pages;
    setTestiIdx(p);
    if (testiTrackRef.current) testiTrackRef.current.style.transform = `translateX(${-p * 100}%)`;
  };

  const goGal = (i: number) => {
    const v = galVis();
    const pages = Math.ceil(GALLERY.length / v);
    const p = ((i % pages) + pages) % pages;
    setGalIdx(p);
    if (galleryTrackRef.current) galleryTrackRef.current.style.transform = `translateX(${-p * 100}%)`;
  };

  useEffect(() => {
    const id = setInterval(() => setTestiIdx((i) => {
      const v = testiVis();
      const p = Math.ceil(TESTIMONIALS.length / v);
      const n = (i + 1) % p;
      if (testiTrackRef.current) testiTrackRef.current.style.transform = `translateX(${-n * 100}%)`;
      return n;
    }), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Nav active="/" />
      <RevealOnScroll />

      {/* ============ HERO ============ */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge-booking reveal">
              <span className="stars">★★★★★</span>
              <span className="score">9.9</span>
              <span style={{ opacity: 0.6, fontWeight: 500, fontSize: '0.75rem' }}>
                <span data-sr="na Booking.com · 190+ recenzija" data-en="on Booking.com · 190+ reviews">na Booking.com · 190+ recenzija</span>
              </span>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              <span data-sr="Vaš privatni kutak" data-en="Your private retreat">Vaš privatni kutak</span>
              <span className="line2" data-sr="mira u Sokobanji" data-en="in Sokobanja">mira u Sokobanji</span>
            </h1>
            <p className="hero-sub reveal delay-2">
              <span data-sr="Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda."
                    data-en="Modern apartments with pool, a restaurant serving homemade food, and the peace you deserve — all in one place, 2.5 hours from Belgrade.">
                Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda.
              </span>
            </p>
            <div className="hero-btns reveal delay-3">
              <MCBEBookButton>
                <span data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</span>
              </MCBEBookButton>
              <Link href="/apartmani" className="btn btn-outline">
                <span data-sr="Pogledaj apartmane" data-en="View apartments">Pogledaj apartmane</span>
              </Link>
            </div>
            <div className="hero-trust reveal delay-4">
              <span data-sr="Besplatan parking" data-en="Free parking">Besplatan parking</span>
              <div className="hero-trust-dot"></div>
              <span data-sr="Bazen za sve goste" data-en="Pool for all guests">Bazen za sve goste</span>
              <div className="hero-trust-dot"></div>
              <span data-sr="Direktna rezervacija" data-en="Book direct">Direktna rezervacija</span>
            </div>
          </div>
          <div className="hero-image-wrap reveal-right">
            <Image
              src="/Hero-goldenview.webp"
              alt="Goldenview Spa & Wellness"
              fill priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: 'cover', borderRadius: 'var(--r-lg)' }}
            />
            <div className="hero-float hero-float-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span data-sr="Moderan SPA" data-en="Modern SPA">Moderan SPA</span>
            </div>
            <div className="hero-float hero-float-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span data-sr="Prostrani apartmani" data-en="Comfortable beds">Prostrani apartmani</span>
            </div>
            <div className="hero-float hero-float-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span data-sr="Restoran u objektu" data-en="On-site restaurant">Restoran u objektu</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE CALENDAR BOOKING ENGINE — overlaps hero like the old availability bar */}
      <div className="mc-widget-wrap reveal">
        <MobileCalendarWidget />
      </div>

      {/* ============ MARQUEE ============ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="marquee-item">
              <span className="highlight">GOLDENVIEW</span><span className="marquee-dot"></span>
              SOKOBANJA<span className="marquee-dot"></span>
              APARTMANI<span className="marquee-dot"></span>
              BAZEN<span className="marquee-dot"></span>
              RESTORAN<span className="marquee-dot"></span>
              DOMAĆA KUHINJA<span className="marquee-dot"></span>
              MIR I TIŠINA<span className="marquee-dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ PROMO PACKAGES ============ */}
      <section className="promo-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Promo Paketi" data-en="Promo Packages">Promo Paketi</span></span>
            <h2>
              <span data-sr="Specijalne ponude" data-en="Special offers">Specijalne ponude</span><br />
              <span className="cursive" data-sr="za savršen odmor" data-en="for a perfect getaway">za savršen odmor</span>
            </h2>
          </div>
          <div className="promo-grid">
            {PROMO_PACKAGES.map((p, i) => (
              <div key={i} className={`promo-card reveal ${i === 1 ? 'delay-1' : i === 2 ? 'delay-2' : ''}`}>
                <div className="promo-img">
                  <Image src={p.img} alt={p.title_sr} fill sizes="(max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  <div className="promo-period"><span data-sr={p.period_sr} data-en={p.period_en}>{p.period_sr}</span></div>
                  <div className="promo-price-badge">
                    <span className="promo-price-label"><span data-sr="od" data-en="from">od</span></span>
                    <span data-sr="Pozovite nas" data-en="Call us">Pozovite nas</span>
                  </div>
                </div>
                <div className="promo-body">
                  <h3>
                    <span data-sr={p.title_sr} data-en={p.title_en}>{p.title_sr}</span>{' '}
                    {p.cursive_sr ? (
                      <span className="cursive" data-sr={p.cursive_sr} data-en={p.cursive_en}>{p.cursive_sr}</span>
                    ) : (
                      <span className="cursive">Goldenview</span>
                    )}
                  </h3>
                  <p className="promo-desc"><span data-sr={p.desc_sr} data-en={p.desc_en}>{p.desc_sr}</span></p>
                  <div className="promo-divider"></div>
                  <div className="promo-includes">
                    {(p.tags ?? ['3 noćenja', 'Doručak', 'Bazen']).map((t, ti) => (
                      <span key={ti} className="promo-include-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span data-sr={t} data-en={p.tagsEn?.[ti] ?? t}>{t}</span>
                      </span>
                    ))}
                  </div>
                  <div className="promo-btns">
                    <Link href="/apartmani" className="btn btn-outline-green"><span data-sr="Saznaj više" data-en="Learn more">Saznaj više</span></Link>
                    <MCBEBookButton className="btn btn-dark-green"><span data-sr="Rezerviši odmah" data-en="Book now">Rezerviši odmah</span></MCBEBookButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIDEO SECTION ============ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Pogledajte video" data-en="Watch video">Pogledajte video</span></span>
            <h2>
              <span data-sr="Doživite atmosferu" data-en="Experience the atmosphere">Doživite atmosferu</span><br />
              <span className="cursive" data-sr="pre dolaska" data-en="before you arrive">pre dolaska</span>
            </h2>
          </div>
          <div className="video-wrap reveal video-desktop">
            <iframe
              src="https://www.youtube.com/embed/N5dFkd2JIoo?autoplay=1&mute=1&loop=1&playlist=N5dFkd2JIoo&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
              allow="autoplay; encrypted-media" allowFullScreen loading="lazy" title="Goldenview video"
            />
          </div>
          <div className="video-wrap-vertical reveal video-mobile">
            <iframe
              src="https://www.youtube.com/embed/Wva-CCJvxyc?autoplay=1&mute=1&loop=1&playlist=Wva-CCJvxyc&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
              allow="autoplay; encrypted-media" allowFullScreen loading="lazy" title="Goldenview video mobile"
            />
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="o-nama" className="section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="about-images reveal-left">
              <div className="about-blob"></div>
              <div className="about-img-main">
                <Image src="/apt-images/apartman-1.webp" alt="Goldenview apartman" width={620} height={500} sizes="(max-width: 1024px) 80vw, 40vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="about-img-sec">
                <Image src="/apt-images/apartman-2.webp" alt="Goldenview kuhinja" width={420} height={320} sizes="(max-width: 1024px) 50vw, 25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="about-content reveal-right">
              <span className="eyebrow"><span data-sr="O nama" data-en="About us">O nama</span></span>
              <h2>
                <span data-sr="Mesto gde se odmor pravi" data-en="A stay designed">Mesto gde se odmor pravi</span><br />
                <span className="cursive" data-sr="po vašoj meri" data-en="around you">po vašoj meri</span>
              </h2>
              <p className="about-text">
                <span data-sr="Goldenview nije tipičan smeštaj u Sokobanji. Zamislili smo ga kao mesto gde svaki gost ima dovoljno prostora, privatnosti i pažnje — bez onog osećaja da ste jedan od stotinu. Apartmani su potpuno novi, svaki opremljen kuhinjom, klima-uređajem, smart TV-om i terasom. Ispred vas je bazen za opuštanje, a u prizemlju restoran koji služi domaću hranu od svežih, lokalnih namirnica."
                      data-en="Goldenview isn't your typical Sokobanja accommodation. We built it as a place where every guest gets enough space, privacy, and attention — without feeling like one of a hundred. Brand new apartments, each with a kitchen, AC, smart TV, and a terrace. A pool just for our guests. A restaurant serving fresh, local Serbian food.">
                  Goldenview nije tipičan smeštaj u Sokobanji. Zamislili smo ga kao mesto gde svaki gost ima dovoljno prostora, privatnosti i pažnje — bez onog osećaja da ste jedan od stotinu. Apartmani su potpuno novi, svaki opremljen kuhinjom, klima-uređajem, smart TV-om i terasom. Ispred vas je bazen za opuštanje, a u prizemlju restoran koji služi domaću hranu od svežih, lokalnih namirnica.
                </span>
              </p>
              <div className="stats-grid">
                <div className="stat-item reveal delay-1">
                  <span className="stat-number counter" data-target="6">0</span>
                  <span className="stat-label"><span data-sr="Tipova apartmana (32–51 m²)" data-en="Apartment types (32–51 m²)">Tipova apartmana (32–51 m²)</span></span>
                </div>
                <div className="stat-item reveal delay-2">
                  <span className="stat-number counter" data-target="190">0</span>
                  <span className="stat-label"><span data-sr="+ recenzija gostiju" data-en="+ guest reviews">+ recenzija gostiju</span></span>
                </div>
                <div className="stat-item reveal delay-3">
                  <span className="stat-number">100%</span>
                  <span className="stat-label"><span data-sr="Recenzija sa ocenom 10/10" data-en="Reviews rated 10/10">Recenzija sa ocenom 10/10</span></span>
                </div>
                <div className="stat-item reveal delay-4">
                  <span className="stat-number">2.5h</span>
                  <span className="stat-label"><span data-sr="Od Beograda" data-en="From Belgrade">Od Beograda</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES BENTO ============ */}
      <section className="section-pad services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Sve na jednom mestu" data-en="Everything in one place">Sve na jednom mestu</span></span>
            <h2><span data-sr="Tri razloga zašto gosti dolaze ponovo" data-en="Three reasons guests keep coming back">Tri razloga zašto gosti dolaze ponovo</span></h2>
          </div>
          <div className="bento-grid">
            <div className="bento-card reveal">
              <Image src="/apartmangrid.webp" alt="Apartmani Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay">
                <div className="bento-pill" data-sr="APARTMANI" data-en="APARTMENTS">APARTMANI</div>
                <div className="bento-title"><span data-sr="Prostor koji diše" data-en="Space to breathe">Prostor koji diše</span></div>
                <Link href="/apartmani" className="bento-link"><span data-sr="Izaberi apartman →" data-en="Choose apartment →">Izaberi apartman →</span></Link>
              </div>
            </div>
            <div className="bento-card reveal delay-2">
              <Image src="/spa-1-scaled.webp" alt="Bazen Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay">
                <div className="bento-pill">WELLNESS &amp; SPA</div>
                <div className="bento-title"><span data-sr="Privatna oaza opuštanja" data-en="Private relaxation oasis">Privatna oaza opuštanja</span></div>
                <Link href="/wellness" className="bento-link"><span data-sr="Saznaj više →" data-en="Learn more →">Saznaj više →</span></Link>
              </div>
            </div>
            <div className="bento-card reveal delay-3">
              <Image src="/restoran-1-scaled.webp" alt="Restoran Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay">
                <div className="bento-pill" data-sr="RESTORAN" data-en="RESTAURANT">RESTORAN</div>
                <div className="bento-title"><span data-sr="Ukusi koji se pamte" data-en="Flavours to remember">Ukusi koji se pamte</span></div>
                <Link href="/restoran" className="bento-link"><span data-sr="Pogledaj meni →" data-en="View menu →">Pogledaj meni →</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ APARTMENTS SHOWCASE ============ */}
      <section id="apartmani" className="apts-section">
        <div className="section-header reveal">
          <span className="eyebrow"><span data-sr="Smeštaj" data-en="Accommodation">Smeštaj</span></span>
          <h2><span data-sr="Izaberite apartman koji vam odgovara" data-en="Choose your perfect apartment">Izaberite apartman koji vam odgovara</span></h2>
          <p>
            <span data-sr="Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu."
                  data-en="Twelve apartments — from a compact studio to a family duplex. All with kitchen, AC, smart TV and pool access.">
              Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu.
            </span>
          </p>
          <div className="breakfast-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
            <span data-sr="Sve cene noćenja uključuju doručak. À la carte restoran je dostupan svim gostima tokom radnog vremena."
                  data-en="All night rates include breakfast. À la carte restaurant available to all guests during opening hours.">
              Sve cene noćenja uključuju doručak. À la carte restoran je dostupan svim gostima tokom radnog vremena.
            </span>
          </div>
        </div>

        {/* Desktop: 3 featured cards in a single row */}
        <div className="home-apt-grid container">
          {FEATURED_APTS.map((a, i) => (
            <div key={a.id} className={`apt-card reveal${a.featured ? ' apt-card-featured' : ''} ${i === 1 ? 'delay-1' : i === 2 ? 'delay-2' : ''}`}>
              <div className={`apt-img${a.video ? ' apt-img-video' : ''}`}>
                {a.video ? (
                  <AptVideoBox src={a.video} poster={a.img} alt={`${a.id} ${a.name_sr}`} />
                ) : (
                  <Image src={a.img} alt={`${a.id} ${a.name_sr}`} fill sizes="320px" style={{ objectFit: 'cover' }} />
                )}
                <span className="apt-badge">{a.id} {a.name_sr}</span>
                {a.featured && a.featuredLabel_sr && (
                  <span className="apt-featured-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.5 6.5L21 9l-5 4 1.5 7L12 16l-5.5 4L8 13l-5-4 6.5-.5z"/></svg>
                    <span data-sr={a.featuredLabel_sr} data-en={a.featuredLabel_en ?? a.featuredLabel_sr}>{a.featuredLabel_sr}</span>
                  </span>
                )}
              </div>
              <div className="apt-body">
                <h3><span className="cursive">{a.id}</span> <span data-sr={a.name_sr} data-en={a.name_en}>{a.name_sr}</span></h3>
                <p className="apt-meta">{a.size} m² · <span data-sr={a.cap_sr} data-en={a.cap_en}>{a.cap_sr}</span></p>
                {a.extra_sr && (
                  <div className="apt-extra-row">
                    <span className="apt-extra">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                      <span data-sr={a.extra_sr} data-en={a.extra_en ?? a.extra_sr}>{a.extra_sr}</span>
                    </span>
                  </div>
                )}
                <MCBEBookButton className="btn btn-gold apt-cta-full" fullWidth>
                  <span data-sr="Rezervacije i cenovnik" data-en="Reservations & pricing">Rezervacije i cenovnik</span>
                </MCBEBookButton>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll carousel of all 12 apartments
            (lazy-loaded via AptVideoBox IntersectionObserver) */}
        <div className="home-apt-scroll">
          <div className="home-apt-scroll-track">
            {APTS.map((a) => (
              <div key={a.id} className={`apt-card${a.featured ? ' apt-card-featured' : ''}`}>
                <div className={`apt-img${a.video ? ' apt-img-video' : ''}`}>
                  {a.video ? (
                    <AptVideoBox src={a.video} poster={a.img} alt={`${a.id} ${a.name_sr}`} />
                  ) : (
                    <Image src={a.img} alt={`${a.id} ${a.name_sr}`} fill sizes="280px" style={{ objectFit: 'cover' }} />
                  )}
                  <span className="apt-badge">{a.id} {a.name_sr}</span>
                  {a.featured && a.featuredLabel_sr && (
                    <span className="apt-featured-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.5 6.5L21 9l-5 4 1.5 7L12 16l-5.5 4L8 13l-5-4 6.5-.5z"/></svg>
                      <span data-sr={a.featuredLabel_sr} data-en={a.featuredLabel_en ?? a.featuredLabel_sr}>{a.featuredLabel_sr}</span>
                    </span>
                  )}
                </div>
                <div className="apt-body">
                  <h3><span className="cursive">{a.id}</span> <span data-sr={a.name_sr} data-en={a.name_en}>{a.name_sr}</span></h3>
                  <p className="apt-meta">{a.size} m² · <span data-sr={a.cap_sr} data-en={a.cap_en}>{a.cap_sr}</span></p>
                  {a.extra_sr && (
                    <div className="apt-extra-row">
                      <span className="apt-extra">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                        <span data-sr={a.extra_sr} data-en={a.extra_en ?? a.extra_sr}>{a.extra_sr}</span>
                      </span>
                    </div>
                  )}
                  <MCBEBookButton className="btn btn-gold apt-cta-full" fullWidth>
                    <span data-sr="Rezervacije i cenovnik" data-en="Reservations & pricing">Rezervacije i cenovnik</span>
                  </MCBEBookButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="apt-detail-btn">
          <Link href="/apartmani" className="btn btn-gold"><span data-sr="Pogledaj sve apartmane" data-en="View all apartments">Pogledaj sve apartmane</span></Link>
        </div>
      </section>

      {/* ============ DESTINATION ============ */}
      <section id="destinacija" className="dest-section">
        <div className="dest-grid">
          <div
            className="dest-bg-left"
            style={{ backgroundImage: "url('https://www.vaucerisrbija.com/images/news/189/thumb/sokobanja-centar.jpg')" }}
            role="img"
            aria-label="Sokobanja centar"
          />
          <div className="dest-content">
            <span className="eyebrow"><span data-sr="Lokacija" data-en="Location">Lokacija</span></span>
            <h2>
              <span data-sr="Zeleno srce Srbije," data-en="Green heart of Serbia,">Zeleno srce Srbije,</span><br />
              <span className="cursive" data-sr="na dohvat ruke" data-en="within easy reach">na dohvat ruke</span>
            </h2>
            <p className="dest-text">
              <span data-sr="Sokobanja leži ušuškana između Ozrena i Rtnja, na obalama reke Moravice. Njene termalne vode koriste se za lečenje još od rimskog doba — a čist vazduh, bogat negativnim jonima, čini je jedinom vazdušnom banjom u jugoistočnoj Evropi."
                    data-en="Sokobanja nestles between Ozren and Rtanj mountains, on the banks of the Moravica river. Its thermal waters have been used for healing since Roman times — and the air, rich in negative ions, makes it the only air spa in Southeast Europe.">
                Sokobanja leži ušuškana između Ozrena i Rtnja, na obalama reke Moravice. Njene termalne vode koriste se za lečenje još od rimskog doba — a čist vazduh, bogat negativnim jonima, čini je jedinom vazdušnom banjom u jugoistočnoj Evropi.
              </span>
            </p>
            <div className="dest-features">
              <div className="dest-feat reveal">
                <div className="dest-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h4><span data-sr="5 minuta od centra" data-en="5 min from the center">5 minuta od centra</span></h4>
                  <p><span data-sr="Blizina svega što vam treba, a opet mir i privatnost." data-en="Close to everything you need, yet peaceful and private.">Blizina svega što vam treba, a opet mir i privatnost.</span></p>
                </div>
              </div>
              <div className="dest-feat reveal delay-2">
                <div className="dest-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4><span data-sr="Čist vazduh i termalna voda" data-en="Fresh air and thermal water">Čist vazduh i termalna voda</span></h4>
                  <p><span data-sr="Termalni izvori do 53°C, mineralne vode bogate sumporom i jodom." data-en="Thermal springs up to 53°C, mineral waters rich in sulphur and iodine.">Termalni izvori do 53°C, mineralne vode bogate sumporom i jodom.</span></p>
                </div>
              </div>
              <div className="dest-feat reveal delay-3">
                <div className="dest-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                </div>
                <div>
                  <h4><span data-sr="Priroda i avantura" data-en="Nature and adventure">Priroda i avantura</span></h4>
                  <p><span data-sr="Sokograd, Ripaljka, Bovansko jezero — sve unutar 15 minuta." data-en="Sokograd, Ripaljka waterfall, Bovansko lake — all within 15 minutes.">Sokograd, Ripaljka, Bovansko jezero — sve unutar 15 minuta.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Zašto baš Goldenview" data-en="Why Goldenview">Zašto baš Goldenview</span></span>
            <h2><span data-sr="Ono što veliki hoteli ne mogu da vam pruže" data-en="What large hotels can't give you">Ono što veliki hoteli ne mogu da vam pruže</span></h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card reveal">
              <div className="benefit-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3><span data-sr="Boutique atmosfera" data-en="Boutique atmosphere">Boutique atmosfera</span></h3>
              <p><span data-sr="Novi apartmani 32–51 m² sa opremljenom kuhinjom i terasom. Bez hodnika sa stotinu vrata." data-en="New apartments 32–51 m² with equipped kitchen and terrace. No corridors with a hundred doors.">Novi apartmani 32–51 m² sa opremljenom kuhinjom i terasom. Bez hodnika sa stotinu vrata.</span></p>
            </div>
            <div className="benefit-card reveal delay-1">
              <div className="benefit-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <h3><span data-sr="Domaća kuhinja" data-en="Home-style kitchen">Domaća kuhinja</span></h3>
              <p><span data-sr="Doručak od lokalnih namirnica, specijaliteti srpske kuhinje, domaća vina. Hrana koju nećete naći u hotelskom bifeu." data-en="Breakfast from local ingredients, Serbian specialties, local wines. Food you won't find in a hotel buffet.">Doručak od lokalnih namirnica, specijaliteti srpske kuhinje, domaća vina. Hrana koju nećete naći u hotelskom bifeu.</span></p>
            </div>
            <div className="benefit-card reveal delay-2">
              <div className="benefit-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
              </div>
              <h3><span data-sr="Pogled na Rtanj" data-en="View of Mt. Rtanj">Pogled na Rtanj</span></h3>
              <p><span data-sr="Zlatni pogled po kome nosimo ime — probudite se uz panoramu mistične piramide Rtnja pravo sa vaše terase." data-en="The golden view we're named after — wake up to the panorama of the mystical Rtanj pyramid right from your terrace.">Zlatni pogled po kome nosimo ime — probudite se uz panoramu mistične piramide Rtnja pravo sa vaše terase.</span></p>
            </div>
            <div className="benefit-card reveal delay-3">
              <div className="benefit-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><text x="12" y="17" textAnchor="middle" fill="currentColor" stroke="none" fontSize="14" fontWeight="700">P</text></svg>
              </div>
              <h3><span data-sr="Besplatan parking" data-en="Free parking">Besplatan parking</span></h3>
              <p><span data-sr="Bez lutanja, bez doplate. Parkirajte i zaboravite na auto do odlaska." data-en="No searching, no extra charge. Park and forget about your car until departure.">Bez lutanja, bez doplate. Parkirajte i zaboravite na auto do odlaska.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESTAURANT ============ */}
      <section id="restoran" className="section-pad">
        <div className="container">
          <div className="rest-grid">
            <div className="rest-gallery reveal-left">
              <div className="rest-hero-row">
                <div className="rest-hero-img">
                  <Image src="/rest-images/new/lounge-3.webp" alt="Lounge prostor" fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="rest-hero-img">
                  <Image src="/rest-images/new/food-steak.webp" alt="Steak iz naše kuhinje" fill sizes="(max-width: 1024px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
            <div className="rest-content reveal-right">
              <span className="eyebrow"><span data-sr="Kulinarstvo" data-en="Culinary">Kulinarstvo</span></span>
              <h2>
                <span data-sr="Gde se tradicija sreće" data-en="Where tradition meets">Gde se tradicija sreće</span><br />
                <span className="cursive" data-sr="sa ukusom" data-en="with taste">sa ukusom</span>
              </h2>
              <p className="rest-text">
                <span data-sr="U našem restoranu nećete naći hotelski bife. Naći ćete hranu koja se pravi sa pažnjom — od lokalnih namirnica, po receptima koji ovde žive generacijama. Doručak sa domaćim kajmakom. Ručak uz jelo koje ste uvek tražili repete. Večera na terasi dok sunce zalazi iza brda."
                      data-en="In our restaurant you won't find a hotel buffet. You'll find food made with care — from local ingredients, following recipes that have lived here for generations. Breakfast with homemade kajmak. Lunch with dishes you always asked for seconds of. Dinner on the terrace as the sun sets behind the hills.">
                  U našem restoranu nećete naći hotelski bife. Naći ćete hranu koja se pravi sa pažnjom — od lokalnih namirnica, po receptima koji ovde žive generacijama. Doručak sa domaćim kajmakom. Ručak uz jelo koje ste uvek tražili repete. Večera na terasi dok sunce zalazi iza brda.
                </span>
              </p>
              <div className="rest-tags">
                <span className="rest-tag"><span data-sr="Domaći kajmak i sir" data-en="Homemade kajmak & cheese">Domaći kajmak i sir</span></span>
                <span className="rest-tag"><span data-sr="Posni meni" data-en="Lenten menu">Posni meni</span></span>
                <span className="rest-tag"><span data-sr="Vrhunski roštilj" data-en="Premium grill">Vrhunski roštilj</span></span>
                <span className="rest-tag"><span data-sr="Sezonski meni" data-en="Seasonal menu">Sezonski meni</span></span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="/rest-images/new/jelovnik.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  <span data-sr="Pogledaj jelovnik" data-en="View menu">Pogledaj jelovnik</span>
                </a>
                <Link href="/restoran" className="btn btn-outline">
                  <span data-sr="Saznaj više o restoranu" data-en="More about the restaurant">Saznaj više o restoranu</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPA & WELLNESS BENTO ============ */}
      <section id="spa" className="section-pad services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Wellness &amp; SPA</span>
            <h2>
              <span data-sr="Opustite se u našoj" data-en="Relax in our">Opustite se u našoj</span><br />
              <span className="cursive" data-sr="privatnoj oazi" data-en="private oasis">privatnoj oazi</span>
            </h2>
          </div>
          <div className="bento-grid">
            <div className="bento-card reveal">
              <Image src="/spa-images/new/bazen-otvoreni.webp" alt="Veliki otvoreni bazen Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay spa-overlay-clean">
                <div className="spa-card-title"><span data-sr="Veliki otvoreni bazen" data-en="Large outdoor pool">Veliki otvoreni bazen</span></div>
              </div>
            </div>
            <div className="bento-card reveal delay-2">
              <Image src="/spa-images/new/sauna.webp" alt="Finska sauna Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay spa-overlay-clean">
                <div className="spa-card-title"><span data-sr="Finska sauna" data-en="Finnish sauna">Finska sauna</span></div>
              </div>
            </div>
            <div className="bento-card reveal delay-3">
              <Image src="/spa-images/new/djakuzi.webp" alt="Zatvoreni bazen i jacuzzi Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="bento-overlay spa-overlay-clean">
                <div className="spa-card-title"><span data-sr="Zatvoreni bazen i jacuzzi" data-en="Indoor pool & jacuzzi">Zatvoreni bazen i jacuzzi</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CULINARY VIDEO ============ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Iz naše kuhinje" data-en="From our kitchen">Iz naše kuhinje</span></span>
            <h2>
              <span data-sr="Pogledajte kako nastaju" data-en="Watch how we create">Pogledajte kako nastaju</span><br />
              <span className="cursive" data-sr="ukusi Goldenview-a" data-en="Goldenview flavours">ukusi Goldenview-a</span>
            </h2>
          </div>
          <div className="video-wrap reveal">
            <iframe
              src="https://www.youtube.com/embed/FUzXlzyzhy0?autoplay=1&mute=1&loop=1&playlist=FUzXlzyzhy0&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
              allow="autoplay; encrypted-media" allowFullScreen loading="lazy" title="Culinary video"
            />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="utisci" className="testi-section">
        <div className="section-header reveal">
          <span className="eyebrow"><span data-sr="Utisci gostiju" data-en="Guest reviews">Utisci gostiju</span></span>
          <h2><span data-sr="Ocene naših gostiju govore sve" data-en="Our guest ratings speak for themselves">Ocene naših gostiju govore sve</span></h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="booking-authority reveal">
            <div>
              <div className="booking-logo-text">booking<span style={{ color: 'var(--gold)' }}>.</span>com</div>
              <div className="booking-reviews"><span data-sr="190+ verifikovanih recenzija" data-en="190+ verified reviews">190+ verifikovanih recenzija</span></div>
            </div>
            <div className="booking-divider"></div>
            <div>
              <div className="booking-score-big">9.9</div>
              <div className="booking-score-label"><span data-sr="IZUZETNO" data-en="EXCEPTIONAL">IZUZETNO</span></div>
            </div>
            <div className="booking-divider"></div>
            <div>
              <div style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>★★★★★</div>
              <div className="booking-reviews"><span data-sr="5.0 ocena na Google-u" data-en="5.0 rating on Google">5.0 ocena na Google-u</span></div>
            </div>
          </div>
        </div>
        <div className="testi-carousel container">
          <div className="testi-track" ref={testiTrackRef}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card" style={{ flex: '0 0 calc(50% - 0.75rem)' }}>
                <div className="testi-stars">★★★★★</div>
                <div className="testi-headline"><span data-sr={t.headline_sr} data-en={t.headline_en}>{t.headline_sr}</span></div>
                <p className="testi-quote"><span data-sr={t.text_sr} data-en={t.text_en}>{t.text_sr}</span></p>
                <div className="testi-author">{t.author}</div>
                <div className="testi-meta"><span data-sr={t.meta_sr} data-en={t.meta_en}>{t.meta_sr}</span></div>
              </div>
            ))}
          </div>
          <div className="testi-controls">
            <button className="testi-btn" onClick={() => goTesti(testiIdx - 1)} aria-label="Prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="testi-btn" onClick={() => goTesti(testiIdx + 1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="galerija" className="gallery-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Galerija" data-en="Gallery">Galerija</span></span>
            <h2>
              <span data-sr="Svaki detalj govori" data-en="Every detail speaks">Svaki detalj govori</span> <span className="cursive" data-sr="za sebe" data-en="for itself">za sebe</span>
            </h2>
          </div>
          <div className="gallery-slider-wrap">
            <div className="gallery-slider-track" ref={galleryTrackRef}>
              {GALLERY.map((src, i) => (
                <div key={i} className="gallery-slide" onClick={() => setLightbox(src)}>
                  <Image src={src} alt={`Gallery ${i + 1}`} width={400} height={520} sizes="(max-width: 768px) 80vw, 33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div className="gallery-nav">
              <button className="gallery-btn" onClick={() => goGal(galIdx - 1)} aria-label="Prev">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="gallery-btn" onClick={() => goGal(galIdx + 1)} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-section">
        <div className="cta-bg">
          <Image src="/rest-images/new/lounge-1.webp" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="cta-content">
          <span className="eyebrow"><span data-sr="Spreman za odmor?" data-en="Ready to unwind?">Spreman za odmor?</span></span>
          <h2><span data-sr="Rezerviši sada i dobij najbolju cenu" data-en="Book now and get the best rate">Rezerviši sada i dobij najbolju cenu</span></h2>
          <p><span data-sr="Proveri dostupnost i rezerviši direktno — garantovana najbolja cena kada preskočiš posrednika." data-en="Check availability and book directly — guaranteed best rate when you skip the middleman.">Proveri dostupnost i rezerviši direktno — garantovana najbolja cena kada preskočiš posrednika.</span></p>
          <div className="cta-btns">
            <MCBEBookButton className="btn btn-gold">
              <span data-sr="Proveri dostupnost i rezerviši →" data-en="Check availability & book →">Proveri dostupnost i rezerviši →</span>
            </MCBEBookButton>
            <a href="tel:063604808" className="btn btn-outline-white">
              <span data-sr="Pozovite: 063 / 604-808" data-en="Call: 063 / 604-808">Pozovite: 063 / 604-808</span>
            </a>
          </div>
          <div className="cta-note"><span data-sr="Odgovaramo najkasnije do 1h." data-en="We respond within 1 hour.">Odgovaramo najkasnije do 1h.</span></div>
        </div>
      </section>

      <Footer />

      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">×</button>
          <Image src={lightbox} alt="Gallery" width={1200} height={900} sizes="90vw" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', width: 'auto', height: 'auto' }} />
        </div>
      )}
    </>
  );
}
