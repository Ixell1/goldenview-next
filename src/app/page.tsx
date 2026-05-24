'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import AvailabilityChecker from '@/components/AvailabilityChecker';
import RevealOnScroll from '@/components/RevealOnScroll';

const APTS = [
  { id: 'A1', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-2.webp', size: '42', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests' },
  { id: 'A2', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-4.webp', size: '42', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests' },
  { id: 'B2', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apartman-5.webp', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B3', name_sr: 'Dvosobni', name_en: 'Two-bedroom', img: '/apt-images/apartman-3.webp', size: '51', cap_sr: 'do 5 gostiju', cap_en: 'up to 5 guests' },
  { id: 'B4', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apartman-1.webp', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B5', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apt-6.webp', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B6', name_sr: 'Dvosobni', name_en: 'Two-bedroom', img: '/apt-images/apt-7.webp', size: '49', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests' },
  { id: 'B7', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-8.webp', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C2', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-9.webp', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C3', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-10.webp', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'C4', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apt-11.webp', size: '35', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
];

const TESTIMONIALS = [
  { name: 'Marko J.', text_sr: 'Apartman je bio besprekorno čist, vlasnici izuzetno ljubazni. Bazen je pravi mali raj. Vraćamo se sigurno.', text_en: 'The apartment was spotless, hosts extremely kind. The pool is a little paradise. We will definitely come back.' },
  { name: 'Ana K.', text_sr: 'Restoran je odličan, hrana domaća i ukusna. Mir i tišina kakvi su nam trebali. Preporučujem od srca.', text_en: 'The restaurant is great, food is homemade and delicious. Peace and quiet we needed. Highly recommend.' },
  { name: 'Petar V.', text_sr: 'Sve na najvišem nivou — od dočeka, preko apartmana, do hrane. Pogled iz terase je nestvaran.', text_en: 'Everything at the highest level — from welcome, to the apartment, to the food. The view from terrace is unreal.' },
  { name: 'Tanja M.', text_sr: 'Veoma ljubazni vlasnici, sve je bilo savršeno. Apartman moderan i komforan, lokacija idealna.', text_en: 'Very kind hosts, everything was perfect. Apartment modern and comfortable, location ideal.' },
  { name: 'Dragan S.', text_sr: 'Preporučujem svima koji traže mir i kvalitet. Restoran je vrhunski, hrana sveža i ukusna.', text_en: 'I recommend to everyone seeking peace and quality. The restaurant is excellent, food fresh and tasty.' },
  { name: 'Jelena T.', text_sr: 'Vraćam se svake godine. Domaća atmosfera, kao kod kuće. Najbolji izbor u Sokobanji.', text_en: 'I come back every year. Homely atmosphere, just like home. Best choice in Sokobanja.' },
];

const GALLERY = [
  '/apt-images/apartman-1.webp', '/apt-images/apartman-3.webp', '/spa-images/new/bazen-otvoreni.webp',
  '/rest-images/new/ambient-1.webp', '/spa-images/new/djakuzi.webp', '/rest-images/new/food-steak.webp',
  '/apt-images/apartman-4.webp', '/spa-images/new/sauna.webp', '/rest-images/new/lounge-1.webp',
];

export default function Home() {
  const aptTrackRef = useRef<HTMLDivElement>(null);
  const testiTrackRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const [aptIdx, setAptIdx] = useState(0);
  const [testiIdx, setTestiIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const aptVis = () => (typeof window === 'undefined' ? 3 : window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
  const testiVis = () => (typeof window === 'undefined' ? 2 : window.innerWidth < 768 ? 1 : 2);
  const galVis = () => (typeof window === 'undefined' ? 3 : window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);

  const goApt = (i: number) => {
    const v = aptVis();
    const max = Math.max(0, APTS.length - v);
    const n = Math.min(Math.max(0, i), max);
    setAptIdx(n);
    if (aptTrackRef.current) aptTrackRef.current.style.transform = `translateX(${-n * (100 / v)}%)`;
  };

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
    const id = setInterval(() => setTestiIdx((i) => { const v = testiVis(); const p = Math.ceil(TESTIMONIALS.length / v); const n = (i + 1) % p; if (testiTrackRef.current) testiTrackRef.current.style.transform = `translateX(${-n * 100}%)`; return n; }), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Nav active="/" />
      <RevealOnScroll />

      {/* HERO */}
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
              <span className="line2" data-sr="mira u Sokobanji" data-en="of peace in Sokobanja">mira u Sokobanji</span>
            </h1>
            <p className="hero-sub reveal delay-2">
              <span data-sr="Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda."
                    data-en="Modern apartments with pool, a restaurant serving homemade food, and the peace you deserve — all in one place, 2.5 hours from Belgrade.">
                Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda.
              </span>
            </p>
            <div className="hero-btns reveal delay-3">
              <a href="tel:063604808" className="btn btn-gold">
                <span data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</span>
              </a>
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
              alt="Goldenview Sokobanja"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: 'cover', borderRadius: 'var(--r-lg)' }}
            />
            <div className="hero-float hero-float-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span data-sr="Moderan SPA" data-en="Modern SPA">Moderan SPA</span>
            </div>
            <div className="hero-float hero-float-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span data-sr="Prostrani apartmani" data-en="Spacious apartments">Prostrani apartmani</span>
            </div>
            <div className="hero-float hero-float-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span data-sr="Restoran u objektu" data-en="On-site restaurant">Restoran u objektu</span>
            </div>
          </div>
        </div>
        <AvailabilityChecker />
      </section>

      {/* MARQUEE */}
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

      {/* VIDEO */}
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
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              title="Goldenview video"
            />
          </div>
          <div className="video-wrap-vertical reveal video-mobile">
            <iframe
              src="https://www.youtube.com/embed/Wva-CCJvxyc?autoplay=1&mute=1&loop=1&playlist=Wva-CCJvxyc&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              title="Goldenview video mobile"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
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
                  <span className="stat-number">9.9</span>
                  <span className="stat-label"><span data-sr="Ocena na Booking.com" data-en="Rating on Booking.com">Ocena na Booking.com</span></span>
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

      {/* SERVICES BENTO */}
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
              <Image src="/spa-1-scaled.webp" alt="Wellness Goldenview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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

      {/* APARTMENTS SLIDER */}
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
        </div>
        <div className="apt-slider-wrap container">
          <div className="apt-slider-track" ref={aptTrackRef}>
            {APTS.map((apt) => (
              <div key={apt.id} className="apt-card">
                <div className="apt-img">
                  <Image src={apt.img} alt={`${apt.id} ${apt.name_sr}`} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <span className="apt-badge">{apt.id} {apt.name_sr}</span>
                </div>
                <div className="apt-body">
                  <h3><span className="cursive">{apt.id}</span> <span data-sr={apt.name_sr} data-en={apt.name_en}>{apt.name_sr}</span></h3>
                  <p className="apt-meta">{apt.size} m² · <span data-sr={apt.cap_sr} data-en={apt.cap_en}>{apt.cap_sr}</span></p>
                  <div className="apt-pills">
                    <span className="apt-pill">WiFi</span>
                    <span className="apt-pill"><span data-sr="Klima" data-en="A/C">Klima</span></span>
                    <span className="apt-pill">Smart TV</span>
                    <span className="apt-pill"><span data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span></span>
                    <span className="apt-pill"><span data-sr="Terasa" data-en="Terrace">Terasa</span></span>
                  </div>
                  <div className="apt-footer">
                    <div className="apt-price-wrap">
                      <span className="price-from"><span data-sr="Cena po noći" data-en="Price per night">Cena po noći</span></span>
                      <span className="price-amount">kontakt</span>
                    </div>
                    <a href="tel:063604808" className="btn btn-gold apt-cta"><span data-sr="Rezerviši" data-en="Book">Rezerviši</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="apt-slider-nav">
            <button className="apt-slider-btn" onClick={() => goApt(aptIdx - 1)} aria-label="Prev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="apt-slider-btn" onClick={() => goApt(aptIdx + 1)} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div className="apt-detail-btn">
            <Link href="/apartmani" className="btn btn-gold"><span data-sr="Pogledaj sve apartmane" data-en="View all apartments">Pogledaj sve apartmane</span></Link>
          </div>
        </div>
      </section>

      {/* RESTAURANT */}
      <section id="restoran" className="section-pad">
        <div className="container">
          <div className="rest-grid">
            <div className="rest-content reveal-left">
              <span className="eyebrow"><span data-sr="Restoran" data-en="Restaurant">Restoran</span></span>
              <h2>
                <span data-sr="Domaća jela" data-en="Local dishes">Domaća jela</span> <span className="cursive" data-sr="sa svežim namirnicama" data-en="with fresh ingredients">sa svežim namirnicama</span>
              </h2>
              <p className="rest-text">
                <span data-sr="Restoran u sklopu kompleksa, otvoren za sve goste. Roštilj, paste, riba, salate i deserti. Svaki obrok je pripremljen od svežih lokalnih namirnica."
                      data-en="A restaurant within the complex, open to all guests. Grill, pasta, fish, salads and desserts. Every meal prepared from fresh local ingredients.">
                  Restoran u sklopu kompleksa, otvoren za sve goste. Roštilj, paste, riba, salate i deserti. Svaki obrok je pripremljen od svežih lokalnih namirnica.
                </span>
              </p>
              <div className="rest-tags">
                <span className="rest-tag"><span data-sr="Roštilj" data-en="Grill">Roštilj</span></span>
                <span className="rest-tag"><span data-sr="Domaća kuhinja" data-en="Local cuisine">Domaća kuhinja</span></span>
                <span className="rest-tag"><span data-sr="Doručak" data-en="Breakfast">Doručak</span></span>
                <span className="rest-tag"><span data-sr="Lounge bar" data-en="Lounge bar">Lounge bar</span></span>
              </div>
              <Link href="/restoran" className="btn btn-gold"><span data-sr="Pogledaj restoran" data-en="View restaurant">Pogledaj restoran</span></Link>
            </div>
            <div className="rest-mosaic reveal-right">
              <div className="rest-mosaic-item">
                <Image src="/rest-images/new/food-steak.webp" alt="Steak" width={400} height={440} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="rest-mosaic-item">
                <Image src="/rest-images/new/food-pasta.webp" alt="Pasta" width={300} height={220} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="rest-mosaic-item">
                <Image src="/rest-images/new/dorucak-1.webp" alt="Doručak" width={300} height={220} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section">
        <div className="section-header reveal">
          <span className="eyebrow"><span data-sr="Recenzije" data-en="Reviews">Recenzije</span></span>
          <h2><span data-sr="Šta gosti kažu o nama" data-en="What guests say about us">Šta gosti kažu o nama</span></h2>
          <div className="booking-authority">
            <span className="booking-logo-text">Booking.com</span>
            <div className="booking-divider"></div>
            <div>
              <div className="booking-score-big">9.9</div>
              <div className="booking-score-label">/10</div>
            </div>
            <div className="booking-divider"></div>
            <div>
              <div className="booking-reviews"><span className="testi-stars">★★★★★</span></div>
              <div className="booking-reviews"><span data-sr="190+ recenzija" data-en="190+ reviews">190+ recenzija</span></div>
            </div>
          </div>
        </div>
        <div className="testi-carousel container">
          <div className="testi-track" ref={testiTrackRef}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card" style={{ flex: '0 0 calc(50% - 0.75rem)' }}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"<span data-sr={t.text_sr} data-en={t.text_en}>{t.text_sr}</span>"</p>
                <div className="testi-headline">Booking.com</div>
                <div className="testi-author">{t.name}</div>
                <div className="testi-meta"><span data-sr="Verifikovan gost" data-en="Verified guest">Verifikovan gost</span></div>
              </div>
            ))}
          </div>
          <div className="testi-controls">
            <button className="testi-btn" onClick={() => goTesti(testiIdx - 1)} aria-label="Prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="testi-btn" onClick={() => goTesti(testiIdx + 1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="gallery-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Galerija" data-en="Gallery">Galerija</span></span>
            <h2><span data-sr="Pogledajte naš mali raj" data-en="See our little paradise">Pogledajte naš mali raj</span></h2>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="gallery-btn" onClick={() => goGal(galIdx + 1)} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrowSr="Spremni za odmor?"
        eyebrowEn="Ready for a break?"
        titleSr="Vidimo se u "
        titleEn="See you in "
        titleCursiveSr="Sokobanji"
        titleCursiveEn="Sokobanja"
        bodySr="Pozovite nas za rezervaciju apartmana ili stola u restoranu. Biće nam zadovoljstvo da vas ugostimo."
        bodyEn="Call us to book an apartment or a table at the restaurant. It will be our pleasure to host you."
      />

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
