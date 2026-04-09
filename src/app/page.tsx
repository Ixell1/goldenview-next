'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'sr' | 'en'>('sr');
  const [mounted, setMounted] = useState(false);
  const [currentAptSlide, setCurrentAptSlide] = useState(0);
  const [currentTestiSlide, setCurrentTestiSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [nightsCount, setNightsCount] = useState(0);
  const [showAvailSuccess, setShowAvailSuccess] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  
  const aptTrackRef = useRef<HTMLDivElement>(null);
  const testiTrackRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const testiAutoRef = useRef<NodeJS.Timeout>(null as unknown as NodeJS.Timeout);

  // Initialize & Language persistence
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('lang') as 'sr' | 'en' | null;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.setAttribute('data-lang', savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const switchLang = (newLang: 'sr' | 'en') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.setAttribute('data-lang', newLang);
    document.documentElement.lang = newLang;
  };

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0');
          let current = 0;
          const step = Math.ceil(target / 30);
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current.toString();
            if (current >= target) clearInterval(interval);
          }, 20);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Nav scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate nights
  useEffect(() => {
    const checkInInput = document.getElementById('checkInDate') as HTMLInputElement;
    const checkOutInput = document.getElementById('checkOutDate') as HTMLInputElement;
    const updateNights = () => {
      if (checkInInput?.value && checkOutInput?.value) {
        const checkIn = new Date(checkInInput.value);
        const checkOut = new Date(checkOutInput.value);
        const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
        setNightsCount(Math.max(0, nights));
      }
    };
    checkInInput?.addEventListener('change', updateNights);
    checkOutInput?.addEventListener('change', updateNights);
  }, []);

  // Apartment slider
  const AVIS = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const goApt = (idx: number) => {
    const vis = AVIS();
    const total = 12;
    const maxSlide = Math.max(0, total - vis);
    const newIdx = Math.min(Math.max(0, idx), maxSlide);
    setCurrentAptSlide(newIdx);
    if (aptTrackRef.current) {
      const itemWidth = 100 / vis;
      aptTrackRef.current.style.transform = `translateX(${-newIdx * itemWidth}%)`;
    }
  };

  // Testimonials slider with auto-advance
  const TVIS = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 768) return 1;
    return 2;
  };

  const goTesti = (idx: number) => {
    const vis = TVIS();
    const total = 6;
    const numPages = Math.ceil(total / vis);
    const newPage = ((idx % numPages) + numPages) % numPages;
    setCurrentTestiSlide(newPage * vis);
    if (testiTrackRef.current) {
      testiTrackRef.current.style.transform = `translateX(${-newPage * 100}%)`;
    }
  };

  useEffect(() => {
    const startAutoAdvance = () => {
      testiAutoRef.current = setInterval(() => {
        const vis = TVIS();
        const nextIdx = (currentTestiSlide + vis) % 6;
        goTesti(nextIdx);
      }, 5000);
    };

    const handleMouseEnter = () => {
      if (testiAutoRef.current) clearInterval(testiAutoRef.current);
    };

    const handleMouseLeave = () => {
      startAutoAdvance();
    };

    const testiTrack = testiTrackRef.current;
    if (testiTrack) {
      testiTrack.addEventListener('mouseenter', handleMouseEnter);
      testiTrack.addEventListener('mouseleave', handleMouseLeave);
    }

    startAutoAdvance();

    return () => {
      if (testiAutoRef.current) clearInterval(testiAutoRef.current);
      if (testiTrack) {
        testiTrack.removeEventListener('mouseenter', handleMouseEnter);
        testiTrack.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [currentTestiSlide]);

  // Gallery slider
  const GVIS = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const goGallery = (idx: number) => {
    const vis = GVIS();
    const total = 9;
    const numPages = Math.ceil(total / vis);
    const newPage = ((idx % numPages) + numPages) % numPages;
    setCurrentGallerySlide(newPage * vis);
    if (galleryTrackRef.current) {
      galleryTrackRef.current.style.transform = `translateX(${-newPage * 100}%)`;
    }
  };

  // Touch swipe support
  useEffect(() => {
    const addSwipe = (trackRef: React.RefObject<HTMLDivElement | null>, onSwipe: (dir: number) => void) => {
      if (!trackRef.current) return;
      let touchStartX = 0;
      let moved = false;

      const handleTouchStart = (e: TouchEvent) => {
        touchStartX = e.touches[0].clientX;
        moved = false;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (moved) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          moved = true;
          onSwipe(diff > 0 ? 1 : -1);
        }
      };

      const handleTouchMove = () => {
        moved = false;
      };

      trackRef.current.addEventListener('touchstart', handleTouchStart);
      trackRef.current.addEventListener('touchend', handleTouchEnd);
      trackRef.current.addEventListener('touchmove', handleTouchMove);

      return () => {
        trackRef.current?.removeEventListener('touchstart', handleTouchStart);
        trackRef.current?.removeEventListener('touchend', handleTouchEnd);
        trackRef.current?.removeEventListener('touchmove', handleTouchMove);
      };
    };

    const unsubApt = addSwipe(aptTrackRef, (dir) => goApt(currentAptSlide + (dir > 0 ? 1 : -1)));
    const unsubTesti = addSwipe(testiTrackRef, (dir) => goTesti(currentTestiSlide + (dir > 0 ? 1 : -1)));
    const unsubGallery = addSwipe(galleryTrackRef, (dir) => goGallery(currentGallerySlide + (dir > 0 ? 1 : -1)));

    return () => {
      unsubApt?.();
      unsubTesti?.();
      unsubGallery?.();
    };
  }, [currentAptSlide, currentTestiSlide, currentGallerySlide]);

  // Availability modal
  const handleAvailabilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const consent = (document.getElementById('consent') as HTMLInputElement)?.checked;
    if (!consent) {
      alert('Molimo prihvatite uslove');
      return;
    }
    setShowAvailSuccess(true);
    setTimeout(() => setShowAvailSuccess(false), 3000);
  };

  // Get bilingual text
  const getText = (sr: string, en: string) => {
    return lang === 'sr' ? sr : en;
  };

  if (!mounted) return null;

  return (
    <>
      <style>{`
        [data-lang="en"] [data-sr] { display: none; }
        [data-lang="en"] [data-en] { display: inline; }
        [data-lang="sr"] [data-en] { display: none; }
        [data-lang="sr"] [data-sr] { display: inline; }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`} id="mainNav">
        <a href="/" className="nav-logo">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/logo-goldenview.png" alt="Goldenview" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#o-nama" data-sr="O nama" data-en="About">O nama</a></li>
          <li><a href="#apartmani" data-sr="Apartmani" data-en="Apartments">Apartmani</a></li>
          <li><a href="#restoran" data-sr="Restoran" data-en="Restaurant">Restoran</a></li>
          <li><a href="#destinacija" data-sr="Destinacija" data-en="Destination">Destinacija</a></li>
          <li><a href="#galerija" data-sr="Galerija" data-en="Gallery">Galerija</a></li>
          <li><a href="#kontakt" data-sr="Kontakt" data-en="Contact">Kontakt</a></li>
        </ul>
        <div className="nav-right">
          <a href="tel:063604808" className="nav-phone" data-sr="063 / 604-808" data-en="063 / 604-808">063 / 604-808</a>
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === 'sr' ? 'active' : ''}`} onClick={() => switchLang('sr')}>SR</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')}>EN</button>
          </div>
        </div>
        <button className={`nav-hamburger ${mobileNavOpen ? 'open' : ''}`} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileNavOpen && (
        <div className="mobile-nav">
          <a href="#o-nama" onClick={() => setMobileNavOpen(false)} data-sr="O nama" data-en="About">O nama</a>
          <a href="#apartmani" onClick={() => setMobileNavOpen(false)} data-sr="Apartmani" data-en="Apartments">Apartmani</a>
          <a href="#restoran" onClick={() => setMobileNavOpen(false)} data-sr="Restoran" data-en="Restaurant">Restoran</a>
          <a href="#destinacija" onClick={() => setMobileNavOpen(false)} data-sr="Destinacija" data-en="Destination">Destinacija</a>
          <a href="#galerija" onClick={() => setMobileNavOpen(false)} data-sr="Galerija" data-en="Gallery">Galerija</a>
          <a href="tel:063604808" style={{color: 'var(--gold)', borderColor: 'var(--gold)'}}>063 / 604-808</a>
        </div>
      )}

      {/* HERO */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge-booking reveal">
              <span className="stars">★★★★★</span>
              <span className="score">9.9</span>
              <span style={{opacity: 0.6, fontWeight: 500, fontSize: '0.75rem'}} data-sr="na Booking.com · 190+ recenzija" data-en="on Booking.com · 190+ reviews">na Booking.com · 190+ recenzija</span>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              <span data-sr="Vaš privatni kutak" data-en="Your private retreat">Vaš privatni kutak</span>
              <span className="line2" data-sr="mira u Sokobanji" data-en="in Sokobanja">mira u Sokobanji</span>
            </h1>
            <p className="hero-sub reveal delay-2" data-sr="Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda." data-en="Modern apartments with pool, a restaurant serving homemade food, and the peace you deserve — all in one place, 2.5 hours from Belgrade.">
              Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda.
            </p>
            <div className="hero-btns reveal delay-3">
              <a href="tel:063604808" className="btn btn-gold" data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</a>
              <a href="#apartmani" className="btn btn-outline" data-sr="Pogledaj apartmane" data-en="View apartments">Pogledaj apartmane</a>
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
            <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/Hero-goldenview.webp" alt="Goldenview Spa & Wellness" />
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

        {/* AVAILABILITY CHECKER */}
        <div className="availability-bar reveal">
          <div className="availability-bar-grid">
            <div className="availability-field">
              <label data-sr="Prijava" data-en="Check-in">Prijava</label>
              <input type="date" id="checkInDate" />
            </div>
            <div className="availability-field">
              <label data-sr="Odjava" data-en="Check-out">Odjava</label>
              <input type="date" id="checkOutDate" />
            </div>
            <div className="availability-field">
              <label data-sr="Gosti" data-en="Guests">Gosti</label>
              <select defaultValue="2">
                <option value="1" data-sr="1 gost" data-en="1 guest">1 gost</option>
                <option value="2" data-sr="2 gosta" data-en="2 guests">2 gosta</option>
                <option value="3" data-sr="3 gosta" data-en="3 guests">3 gosta</option>
                <option value="4+" data-sr="4+ gosta" data-en="4+ guests">4+ gosta</option>
              </select>
            </div>
            <button className="btn btn-gold" onClick={() => setShowAvailSuccess(true)} data-sr="Proveri dostupnost" data-en="Check Availability">Proveri dostupnost</button>
          </div>
        </div>
      </section>

      {/* PROMO PACKAGES */}
      <section className="section-pad" style={{background: 'var(--surface)'}}>
        <div className="container">
          <div className="eyebrow reveal" data-sr="Specijalne ponude" data-en="Special Offers">Specijalne ponude</div>
          <h2 className="reveal delay-1" data-sr="Paket ponude" data-en="Package Offers">Paket ponude</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
            {[
              { title_sr: 'Uskršnji vikend', title_en: 'Easter Weekend', period_sr: '7-10. april', period_en: 'Apr 7-10', price: '€299', desc_sr: 'Uživajte u posebnoj ponudi za Uskrs', desc_en: 'Enjoy our special Easter offer' },
              { title_sr: 'Prvi maj', title_en: 'May Day', period_sr: '1-3. maj', period_en: 'May 1-3', price: '€249', desc_sr: 'Produženi vikend sa Prvim majom', desc_en: 'Extended weekend with May Day' },
              { title_sr: 'Produži i ustedi', title_en: 'Extend & Save', period_sr: 'Sve godine', period_en: 'Year-round', price: '€199', desc_sr: 'Duži boravak = veća ušteda', desc_en: 'Longer stay = bigger savings' }
            ].map((pkg, i) => (
              <div key={i} className="reveal" style={{background: '#fff', padding: '1.5rem', borderRadius: 'var(--r-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                <div style={{fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem'}} data-sr={pkg.period_sr} data-en={pkg.period_en}>{pkg.period_sr}</div>
                <h3 data-sr={pkg.title_sr} data-en={pkg.title_en}>{pkg.title_sr}</h3>
                <p style={{flex: 1, margin: '1rem 0', color: 'var(--muted)', fontSize: '0.9rem'}} data-sr={pkg.desc_sr} data-en={pkg.desc_en}>{pkg.desc_sr}</p>
                <div style={{fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem'}}>{pkg.price}</div>
                <a href="tel:063604808" className="btn btn-gold">Rezerviši</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow reveal" data-sr="Pogledaj" data-en="Watch">Pogledaj</div>
          <h2 className="reveal delay-1" data-sr="Prikazao bi naš mali raj" data-en="A glimpse of our little paradise">Prikazao bi naš mali raj</h2>
          <div style={{marginTop: '3rem', paddingBottom: '56.25%', position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)'}}>
            <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} src="https://www.youtube.com/embed/FUzXlzyzhy0" title="Goldenview" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad" id="o-nama">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            <div className="reveal-left">
              <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/about-1.webp" alt="About" style={{borderRadius: 'var(--r-lg)', width: '100%'}} />
            </div>
            <div className="reveal">
              <div className="eyebrow" data-sr="O nama" data-en="About Us">O nama</div>
              <h2 data-sr="Priča koja je počela sa snom" data-en="A story that began with a dream">Priča koja je počela sa snom</h2>
              <p style={{marginTop: '1rem', color: 'var(--muted)', lineHeight: 1.6}} data-sr="Goldenview je nastao iz želje da stvorimo prostor gde se gosti osećaju kao kod kuće..." data-en="Goldenview was born from a desire to create a space where guests feel at home...">Goldenview je nastao iz želje da stvorimo prostor gde se gosti osećaju kao kod kuće...</p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem'}}>
                {[
                  { num: '12', label_sr: 'Apartmana', label_en: 'Apartments' },
                  { num: '150+', label_sr: 'Zadovoljnih gosta', label_en: 'Happy guests' },
                  { num: '9.9', label_sr: 'Booking ocena', label_en: 'Booking rating' },
                  { num: '20', label_sr: 'Godina iskustva', label_en: 'Yrs experience' }
                ].map((stat, i) => (
                  <div key={i} style={{textAlign: 'center'}}>
                    <div style={{fontSize: '2rem', fontWeight: 800, color: 'var(--gold)'}} className="counter" data-target={parseInt(stat.num)}>{stat.num}</div>
                    <div style={{fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem'}} data-sr={stat.label_sr} data-en={stat.label_en}>{stat.label_sr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="section-pad" style={{background: 'var(--surface)'}}>
        <div className="container">
          <div className="eyebrow reveal" data-sr="Naše usluge" data-en="Our Services">Naše usluge</div>
          <h2 className="reveal delay-1" data-sr="Sve što trebate za savršen boravak" data-en="Everything you need for a perfect stay">Sve što trebate za savršen boravak</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem'}}>
            {[
              { title_sr: 'Spa & Wellness', title_en: 'Spa & Wellness', img: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/service-1.webp' },
              { title_sr: 'Konferencijalni prostor', title_en: 'Conference Room', img: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/service-2.webp' },
              { title_sr: 'Restoran', title_en: 'Restaurant', img: 'https://udruzenjeradar.rs/wp-content/uploads/2026/03/service-3.webp' }
            ].map((service, i) => (
              <div key={i} className="reveal" style={{position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', height: '300px'}}>
                <img src={service.img} alt={service.title_sr} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem'}}>
                  <h3 style={{color: '#fff'}} data-sr={service.title_sr} data-en={service.title_en}>{service.title_sr}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APARTMENTS */}
      <section className="section-pad" id="apartmani">
        <div className="container">
          <div className="eyebrow reveal" data-sr="Naš izbor" data-en="Our Selection">Naš izbor</div>
          <h2 className="reveal delay-1" data-sr="Apartmani" data-en="Apartments">Apartmani</h2>
          <div style={{marginTop: '3rem', position: 'relative'}}>
            <div ref={aptTrackRef} style={{display: 'flex', transition: 'transform 0.5s ease-out'}}>
              {['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6'].map((apt) => (
                <div key={apt} style={{flex: '1 0 33.333%', minWidth: '33.333%', padding: '0.75rem'}}>
                  <div className="reveal" style={{background: '#fff', borderRadius: 'var(--r-md)', overflow: 'hidden'}}>
                    <div style={{position: 'relative', paddingBottom: '66.67%', overflow: 'hidden'}}>
                      <img src={`https://udruzenjeradar.rs/wp-content/uploads/2026/03/apt-${apt.toLowerCase()}.webp`} alt={apt} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
                      <div style={{position: 'absolute', top: '1rem', right: '1rem', background: 'var(--gold)', color: '#fff', padding: '0.5rem 1rem', borderRadius: 'var(--r-pill)', fontSize: '0.75rem', fontWeight: 700}}>{apt}</div>
                    </div>
                    <div style={{padding: '1.5rem'}}>
                      <h3>{apt}</h3>
                      <p style={{color: 'var(--muted)', fontSize: '0.85rem', margin: '0.5rem 0'}}>Moderni apartman za 2-4 gosta</p>
                      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0'}}>
                        {['WiFi', 'Kuhinja', 'Terasa'].map(tag => <span key={tag} style={{fontSize: '0.7rem', background: 'var(--gold-10)', color: 'var(--gold)', padding: '0.4rem 0.8rem', borderRadius: 'var(--r-pill)'}}>{tag}</span>)}
                      </div>
                      <div style={{fontSize: '1.25rem', fontWeight: 800, color: 'var(--gold)', margin: '1rem 0'}}>€{50 + Math.random() * 30 | 0}/noć</div>
                      <a href="tel:063604808" className="btn btn-gold" style={{width: '100%', marginTop: '1rem'}}>Rezerviši</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
              <button onClick={() => goApt(currentAptSlide - 1)} className="btn btn-outline">←</button>
              <button onClick={() => goApt(currentAptSlide + 1)} className="btn btn-outline">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" style={{background: 'var(--surface)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1rem 1.5rem', borderRadius: 'var(--r-md)'}}>
              <span style={{fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)'}}>Booking.com</span>
              <span style={{fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)'}}>9.9</span>
              <span style={{fontSize: '0.9rem', color: 'var(--gold)'}}>★★★★★</span>
              <span style={{fontSize: '0.75rem', color: 'var(--muted)'}}>190+ recenzija</span>
            </div>
          </div>
          <div ref={testiTrackRef} style={{display: 'flex', transition: 'transform 0.5s ease-out'}}>
            {[
              { name: 'Marko J.', text_sr: 'Odličan odnos prema gostima, čista i lepa soba...', text_en: 'Great service, clean and beautiful rooms...' },
              { name: 'Ana K.', text_sr: 'Restoran je odličan, hrana je domaća i ukusna...', text_en: 'The restaurant is excellent, homemade food...' },
              { name: 'Petar V.', text_sr: 'Odličnog, miran, pogodan za odmor i relaksaciju...', text_en: 'Perfect, peaceful, great for rest...' },
              { name: 'Tanja M.', text_sr: 'Vrlo ljubazni vlasnici, sve je bilo savršeno...', text_en: 'Very kind owners, everything was perfect...' },
              { name: 'Dragan S.', text_sr: 'Preporučujem svima koji traže mir i kvalitet...', text_en: 'I recommend to everyone looking for peace...' },
              { name: 'Jelena T.', text_sr: 'Vraćam se svake godine, obitelj je kao doma...', text_en: 'I come back every year, family atmosphere...' }
            ].map((testi, i) => (
              <div key={i} style={{flex: '1 0 50%', minWidth: '50%', padding: '0.75rem'}}>
                <div className="reveal" style={{background: '#fff', padding: '1.5rem', borderRadius: 'var(--r-md)', height: '100%'}}>
                  <div style={{color: 'var(--gold)', marginBottom: '1rem'}}>★★★★★</div>
                  <p style={{color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem'}} data-sr={testi.text_sr} data-en={testi.text_en}>{testi.text_sr}</p>
                  <div style={{fontSize: '0.9rem', fontWeight: 700}}>{testi.name}</div>
                  <div style={{fontSize: '0.75rem', color: 'var(--muted)'}}>Booking.com verified</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <button onClick={() => goTesti(currentTestiSlide - 1)} className="btn btn-outline">←</button>
            <button onClick={() => goTesti(currentTestiSlide + 1)} className="btn btn-outline">→</button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad" id="galerija">
        <div className="container">
          <div className="eyebrow reveal" data-sr="Vizuelni prikaz" data-en="Visual Tour">Vizuelni prikaz</div>
          <h2 className="reveal delay-1" data-sr="Galerija" data-en="Gallery">Galerija</h2>
          <div style={{marginTop: '3rem'}}>
            <div ref={galleryTrackRef} style={{display: 'flex', transition: 'transform 0.5s ease-out'}}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img) => (
                <div key={img} style={{flex: '1 0 33.333%', minWidth: '33.333%', padding: '0.75rem', cursor: 'pointer'}}>
                  <div className="reveal" onClick={() => {
                    setLightboxImage(`https://udruzenjeradar.rs/wp-content/uploads/2026/03/gallery-${img}.webp`);
                    setShowLightbox(true);
                  }} style={{position: 'relative', paddingBottom: '100%', overflow: 'hidden', borderRadius: 'var(--r-md)'}}>
                    <img src={`https://udruzenjeradar.rs/wp-content/uploads/2026/03/gallery-${img}.webp`} alt={`Gallery ${img}`} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
              <button onClick={() => goGallery(currentGallerySlide - 1)} className="btn btn-outline">←</button>
              <button onClick={() => goGallery(currentGallerySlide + 1)} className="btn btn-outline">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', backgroundImage: 'url(https://udruzenjeradar.rs/wp-content/uploads/2026/03/cta-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <div className="eyebrow reveal" data-sr="Spremni?" data-en="Ready?">Spremni?</div>
          <h2 className="reveal delay-1" data-sr="Rezervišite svoju ideju odmora" data-en="Book your ideal getaway">Rezervišite svoju ideju odmora</h2>
          <div className="reveal delay-2" style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="tel:063604808" className="btn btn-gold">Pozovi nas: 063 / 604-808</a>
            <a href="#apartmani" className="btn btn-outline">Pogledaj apartmane</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background: 'var(--dark)', color: '#fff', padding: '3rem 0 1rem'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            <div>
              <h4 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}}>Goldenview</h4>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6}}>Moderni apartmani sa bazenom i domaći restoran u Sokobanji. Najbolje ocene, direktne rezervacije, najjednostavnije...</p>
            </div>
            <div>
              <h4 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}} data-sr="Apartmani" data-en="Apartments">Apartmani</h4>
              <ul style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 2}}>
                <li><a href="#apartmani" style={{color: 'inherit'}}>Pogledaj sve apartmane</a></li>
                <li><a href="#apartmani" style={{color: 'inherit'}}>Rezerviši sada</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}} data-sr="Kontakt" data-en="Contact">Kontakt</h4>
              <ul style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 2}}>
                <li><a href="tel:063604808" style={{color: 'var(--gold)'}}>063 / 604-808</a></li>
                <li><a href="mailto:info@goldenview.rs" style={{color: 'var(--gold)'}}>info@goldenview.rs</a></li>
              </ul>
            </div>
          </div>
          <div style={{paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)'}}>
            <p>© 2026 Goldenview Sokobanja. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>



      {/* AVAILABILITY MODAL */}
      {showAvailSuccess && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
          <div style={{background: '#fff', padding: '2rem', borderRadius: 'var(--r-lg)', maxWidth: '400px', textAlign: 'center'}}>
            <div style={{color: 'var(--gold)', fontSize: '3rem', marginBottom: '1rem'}}>✓</div>
            <h3 data-sr="Zahvaljujemo!" data-en="Thank you!">Zahvaljujemo!</h3>
            <p style={{color: 'var(--muted)', marginTop: '1rem'}} data-sr="Uskoro ćemo Vas kontaktirati" data-en="We'll contact you soon">Uskoro ćemo Vas kontaktirati</p>
            <button onClick={() => setShowAvailSuccess(false)} className="btn btn-gold" style={{width: '100%', marginTop: '1rem'}} data-sr="Zatvori" data-en="Close">Zatvori</button>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {showLightbox && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
          <button onClick={() => setShowLightbox(false)} style={{position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer'}}>✕</button>
          <img src={lightboxImage} alt="Gallery" style={{maxWidth: '90%', maxHeight: '90%', objectFit: 'contain'}} />
        </div>
      )}
    </>
  );
}
