import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { RestaurantSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restoran',
  description: 'Domaća kuhinja sa svežim namirnicama, lounge bar sa koktelima i topla atmosfera. Otvoreni svaki dan 08:00 – 23:00.',
  alternates: { canonical: '/restoran' },
  openGraph: {
    title: 'Restoran Goldenview Sokobanja',
    description: 'Domaća kuhinja, lounge bar i topla atmosfera.',
    images: ['/rest-images/new/food-hero.webp'],
  },
};

export default function RestoranPage() {
  return (
    <>
      <RestaurantSchema />
      <Nav active="/restoran" />
      <RevealOnScroll />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/rest-images/new/food-hero.webp" alt="Restoran Goldenview" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero-content">
          <span className="eyebrow"><span data-sr="Restoran" data-en="Restaurant">Restoran</span></span>
          <h1>
            <span data-sr="Ukusi koji" data-en="Flavors that">Ukusi koji</span>
            <span className="cursive" data-sr="se pamte" data-en="are remembered">se pamte</span>
          </h1>
          <p>
            <span data-sr="Domaća kuhinja sa svežim namirnicama, topla atmosfera i pogled koji upotpunjuje vaš obrok."
                  data-en="Local cuisine with fresh ingredients, warm atmosphere and a view that completes your meal.">
              Domaća kuhinja sa svežim namirnicama, topla atmosfera i pogled koji upotpunjuje vaš obrok.
            </span>
          </p>
        </div>
      </section>

      {/* KUHINJA FEATURE */}
      <section className="section-pad">
        <div className="container">
          <div className="feature-row">
            <div className="feature-img reveal-left">
              <Image src="/rest-images/new/food-steak.webp" alt="Domaća jela" width={620} height={440} sizes="(max-width: 1024px) 100vw, 50vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="feature-content reveal-right">
              <span className="eyebrow"><span data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span></span>
              <h2>
                <span data-sr="Domaća jela" data-en="Local dishes">Domaća jela</span> <span className="cursive" data-sr="sa svežim namirnicama" data-en="with fresh ingredients">sa svežim namirnicama</span>
              </h2>
              <p>
                <span data-sr="Naš jelovnik pravi spoj klasičnih balkanskih ukusa i modernih jela. Roštilj, paste, riba, salate i deserti — sve pripremljeno od svežih namirnica."
                      data-en="Our menu blends classic Balkan flavors with modern dishes. Grill, pasta, fish, salads and desserts — all from fresh ingredients.">
                  Naš jelovnik pravi spoj klasičnih balkanskih ukusa i modernih jela. Roštilj, paste, riba, salate i deserti — sve pripremljeno od svežih namirnica.
                </span>
              </p>
              <ul className="feature-list">
                <li><span className="feature-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span data-sr="Roštilj, ćevapi, steak" data-en="Grill, cevapi, steak">Roštilj, ćevapi, steak</span></li>
                <li><span className="feature-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span data-sr="Paste, riba, pileća jela" data-en="Pasta, fish, chicken">Paste, riba, pileća jela</span></li>
                <li><span className="feature-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span data-sr="Sveže salate i meze" data-en="Fresh salads and meze">Sveže salate i meze</span></li>
              </ul>
              <a href="/rest-images/new/jelovnik.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginTop: '1.5rem', width: 'fit-content' }}>
                <span data-sr="Pogledaj jelovnik" data-en="View menu">Pogledaj jelovnik</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD GALLERY */}
      <section className="section-pad" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: 'left', maxWidth: 'none' }}>
            <span className="cat-label"><span data-sr="sa naše kuhinje" data-en="from our kitchen">sa naše kuhinje</span></span>
            <h2>
              <span data-sr="Jela koja" data-en="Dishes that">Jela koja</span> <span className="cursive" data-sr="se pamte" data-en="are remembered">se pamte</span>
            </h2>
          </div>
          <div className="food-gallery">
            <div className="food-cell span-3 wide reveal"><Image src="/rest-images/new/food-pasta.webp" alt="Pasta" width={500} height={400} sizes="50vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-3 wide reveal delay-1"><Image src="/rest-images/new/food-salmon.webp" alt="Salmon" width={500} height={400} sizes="50vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 tall reveal"><Image src="/rest-images/new/food-cevapi.webp" alt="Ćevapi" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 tall reveal delay-1"><Image src="/rest-images/new/food-chicken.webp" alt="Chicken" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 tall reveal delay-2"><Image src="/rest-images/new/food-meze.webp" alt="Meze" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 wide reveal"><Image src="/rest-images/new/food-bruschetta.webp" alt="Bruschetta" width={400} height={300} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 wide reveal delay-1"><Image src="/rest-images/new/food-halloumi.webp" alt="Halloumi" width={400} height={300} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="food-cell span-2 wide reveal delay-2"><Image src="/rest-images/new/food-salad.webp" alt="Salad" width={400} height={300} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      {/* LOUNGE & COCKTAILS */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Lounge & koktel bar" data-en="Lounge & cocktail bar">Lounge & koktel bar</span></span>
            <h2>
              <span data-sr="Veče koje" data-en="An evening that">Veče koje</span> <span className="cursive" data-sr="ne žuri" data-en="doesn't rush">ne žuri</span>
            </h2>
            <p>
              <span data-sr="Kožne garniture, tiha muzika i bar sa potpisnim koktelima — savršen kutak za razgovor ili piće posle večere."
                    data-en="Leather sofas, quiet music and a bar with signature cocktails — the perfect corner for conversation or a drink after dinner.">
                Kožne garniture, tiha muzika i bar sa potpisnim koktelima — savršen kutak za razgovor ili piće posle večere.
              </span>
            </p>
          </div>
          <div className="lounge-grid">
            <div className="lounge-tile reveal">
              <Image src="/rest-images/new/lounge-1.webp" alt="Lounge" fill sizes="(max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="lounge-cap">
                <div className="label">Lounge</div>
                <div className="cursive"><span data-sr="Vreme za sebe." data-en="Time for yourself.">Vreme za sebe.</span></div>
              </div>
            </div>
            <div className="lounge-tile reveal delay-1"><Image src="/rest-images/new/lounge-2.webp" alt="Lounge 2" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="lounge-tile reveal delay-2"><Image src="/rest-images/new/lounge-3.webp" alt="Lounge 3" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="lounge-tile reveal delay-3"><Image src="/rest-images/new/ambient-2.webp" alt="Ambient" fill sizes="66vw" style={{ objectFit: 'cover' }} /></div>
          </div>
          <div className="cocktail-strip">
            <div className="cocktail-card reveal"><Image src="/rest-images/new/koktel-1.webp" alt="Koktel" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="cocktail-card reveal delay-1"><Image src="/rest-images/new/koktel-2.webp" alt="Koktel" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="cocktail-card reveal delay-2"><Image src="/rest-images/new/koktel-4.webp" alt="Koktel" width={300} height={400} sizes="33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      {/* DORUCAK & DESERTI */}
      <section className="section-pad" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Doručak & deserti" data-en="Breakfast & desserts">Doručak & deserti</span></span>
            <h2>
              <span data-sr="Počnite dan" data-en="Start the day">Počnite dan</span> <span className="cursive" data-sr="polako" data-en="slowly">polako</span>
            </h2>
            <p>
              <span data-sr="Sveži doručci, domaći sir, kajmak i palačinke — pripremljeni svakog jutra za goste Goldenview-a."
                    data-en="Fresh breakfasts, local cheese, kajmak and crepes — prepared every morning for Goldenview guests.">
                Sveži doručci, domaći sir, kajmak i palačinke — pripremljeni svakog jutra za goste Goldenview-a.
              </span>
            </p>
          </div>
          <div className="photo-grid">
            <div className="photo-card reveal"><Image src="/rest-images/new/dorucak-1.webp" alt="Doručak" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-card reveal delay-1"><Image src="/rest-images/new/dorucak-2.webp" alt="Doručak" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-card reveal delay-2"><Image src="/rest-images/new/desert-1.webp" alt="Desert" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-card reveal delay-3"><Image src="/rest-images/new/desert-2.webp" alt="Desert" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      {/* MENU BANNER */}
      <section className="section-pad">
        <div className="container">
          <div className="menu-banner reveal">
            <div className="menu-banner-body">
              <div className="menu-banner-badge">GOLDENVIEW JELOVNIK</div>
              <h3>
                <span data-sr="Pogledajte našu" data-en="Browse our">Pogledajte našu</span> <span className="cursive" data-sr="kompletnu ponudu!" data-en="full menu!">kompletnu ponudu!</span>
              </h3>
              <ul className="menu-banner-checks">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> <span data-sr="Jela sa roštilja, paste i salate" data-en="Grilled dishes, pastas and salads">Jela sa roštilja, paste i salate</span></li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> <span data-sr="Doručak, deserti i pića" data-en="Breakfast, desserts and drinks">Doručak, deserti i pića</span></li>
              </ul>
              <a href="/rest-images/new/jelovnik.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-gold menu-banner-btn">
                <span data-sr="Otvori jelovnik (PDF)" data-en="Open menu (PDF)">Otvori jelovnik (PDF)</span>
              </a>
            </div>
            <div className="menu-banner-media">
              <Image src="/rest-images/new/food-burger.webp" alt="Burger" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="section-pad" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Praktične informacije" data-en="Practical information">Praktične informacije</span></span>
            <h2>
              <span data-sr="Dobro je" data-en="Good to">Dobro je</span> <span className="cursive" data-sr="znati" data-en="know">znati</span>
            </h2>
          </div>
          <div className="info-grid">
            <div className="info-card reveal">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4><span data-sr="Radno vreme" data-en="Working hours">Radno vreme</span></h4>
              <p>
                <span data-sr="Ponedeljak – Nedelja" data-en="Monday – Sunday">Ponedeljak – Nedelja</span><br />
                08:00 – 23:00<br />
                <span data-sr="Kuhinja do 22:00" data-en="Kitchen until 22:00">Kuhinja do 22:00</span>
              </p>
            </div>
            <div className="info-card reveal delay-1">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <h4><span data-sr="Rezervacija" data-en="Reservation">Rezervacija</span></h4>
              <p>
                <span data-sr="Preporučujemo rezervaciju za grupe veće od 6 osoba. Pozovite 063 / 604-808."
                      data-en="We recommend reservation for groups larger than 6. Call 063 / 604-808.">
                  Preporučujemo rezervaciju za grupe veće od 6 osoba. Pozovite 063 / 604-808.
                </span>
              </p>
            </div>
            <div className="info-card reveal delay-2">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4><span data-sr="Lokacija" data-en="Location">Lokacija</span></h4>
              <p>
                <span data-sr="U sklopu kompleksa Goldenview, Alekse Markišića 122, Sokobanja. Parking obezbeđen."
                      data-en="Part of Goldenview complex, Alekse Markišića 122, Sokobanja. Parking available.">
                  U sklopu kompleksa Goldenview, Alekse Markišića 122, Sokobanja. Parking obezbeđen.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrowSr="Rezervišite sto"
        eyebrowEn="Reserve a table"
        titleSr="Dobro nam"
        titleEn="Welcome,"
        titleCursiveSr="došli!"
        titleCursiveEn="dear guests!"
        bodySr="Pozovite nas za rezervaciju stola ili organizaciju proslave. Biće nam zadovoljstvo da vas ugostimo."
        bodyEn="Call us to reserve a table or organize a celebration. It will be our pleasure to host you."
        primaryHref="tel:063661263"
        primarySr="Pozovite nas"
        primaryEn="Call us"
        secondaryHref="/apartmani"
        secondarySr="Pogledajte apartmane"
        secondaryEn="View apartments"
      />

      <Footer />
    </>
  );
}
