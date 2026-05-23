import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wellness & SPA',
  description: 'Bazeni, sauna, đakuzi, parno kupatilo i profesionalne masaže — samo za goste Goldenview apartmana.',
  alternates: { canonical: '/wellness' },
  openGraph: {
    title: 'Wellness & SPA Goldenview Sokobanja',
    description: 'Najveća sauna u Sokobanji, đakuzi, masaže i kompletna SPA zona.',
    images: ['/spa-images/new/ambijent-spa.webp'],
  },
};

type Feature = {
  img: string;
  eyebrow_sr: string; eyebrow_en: string;
  title_sr: string; title_en: string;
  cursive_sr: string; cursive_en: string;
  desc_sr: string; desc_en: string;
  list: { sr: string; en: string }[];
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    img: '/spa-images/new/bazen-otvoreni.webp',
    eyebrow_sr: 'Bazen', eyebrow_en: 'Pool',
    title_sr: 'Bazen na', title_en: 'Outdoor',
    cursive_sr: 'otvorenom', cursive_en: 'swimming pool',
    desc_sr: 'Uživajte u kupanju na otvorenom tokom letnjih meseci. Bazen sa ležaljkama i sunčalištem — savršen za porodice sa decom i opuštanje na suncu.',
    desc_en: 'Enjoy outdoor swimming during summer months. Pool with loungers and sunbathing area — perfect for families and sunbathing.',
    list: [
      { sr: 'Otvoreni bazen sa sunčalištem', en: 'Outdoor pool with sunbathing' },
      { sr: 'Ležaljke i suncobrani', en: 'Loungers and umbrellas' },
      { sr: 'Idealno za porodice', en: 'Ideal for families' },
    ],
  },
  {
    img: '/spa-images/new/bazen-zatvoreni.webp',
    eyebrow_sr: 'Zatvoreni bazen', eyebrow_en: 'Indoor pool',
    title_sr: 'Bazen sa', title_en: 'Pool with',
    cursive_sr: 'talasima i masažom', cursive_en: 'waves & massage',
    desc_sr: 'Zatvoreni bazen sa talasima, protivstrujnim plivanjem i masažnim mlaznicama. Dostupan cele godine, sa kontrolisanom temperaturom vode.',
    desc_en: 'Indoor pool with waves, counter-current swimming and massage jets. Available year-round, with controlled water temperature.',
    list: [
      { sr: 'Talasi i protivstrujno plivanje', en: 'Waves and counter-current swimming' },
      { sr: 'Masažne mlaznice', en: 'Massage jets' },
      { sr: 'Dostupan cele godine', en: 'Available year-round' },
    ],
    reverse: true,
  },
  {
    img: '/spa-images/new/sauna.webp',
    eyebrow_sr: 'Finska sauna', eyebrow_en: 'Finnish sauna',
    title_sr: 'Najveća sauna', title_en: 'The largest sauna',
    cursive_sr: 'u Sokobanji', cursive_en: 'in Sokobanja',
    desc_sr: 'Prostrana finska sauna sa kapacitetom do 10 osoba — najveća u celoj Sokobanji. Idealna za detoksikaciju organizma, poboljšanje cirkulacije i duboku relaksaciju.',
    desc_en: 'Spacious Finnish sauna with capacity for up to 10 people — the largest in Sokobanja. Ideal for body detox, improved circulation and deep relaxation.',
    list: [
      { sr: 'Najveća sauna u Sokobanji', en: 'Largest sauna in Sokobanja' },
      { sr: 'Kapacitet do 10 osoba', en: 'Capacity up to 10 people' },
      { sr: 'Detoksikacija i relaksacija', en: 'Detox and relaxation' },
    ],
  },
  {
    img: '/spa-images/new/kaldarijum.webp',
    eyebrow_sr: 'Tople klupe', eyebrow_en: 'Heated benches',
    title_sr: 'Kaldarijum i', title_en: 'Caldarium &',
    cursive_sr: 'tepidarijum', cursive_en: 'tepidarium',
    desc_sr: 'Tople mozaične klupe zagrejane na 36–40°C služe za opuštanje mišića i zagrevanje tela pred ulazak u saunu. Preporučeno vreme korišćenja je 15–20 minuta.',
    desc_en: 'Heated mosaic benches at 36–40°C for muscle relaxation and warming the body before sauna. Recommended use 15–20 minutes.',
    list: [
      { sr: 'Temperatura 36–40°C', en: 'Temperature 36–40°C' },
      { sr: 'Zagrevanje pred saunu', en: 'Warm-up before sauna' },
      { sr: '15–20 minuta korišćenja', en: '15–20 minutes of use' },
    ],
    reverse: true,
  },
  {
    img: '/spa-images/new/masaza.webp',
    eyebrow_sr: 'Masaža', eyebrow_en: 'Massage',
    title_sr: 'Profesionalne', title_en: 'Professional',
    cursive_sr: 'masaže', cursive_en: 'massages',
    desc_sr: 'Iskusni terapeuti pružaju sve vrste masaža — od relaks i sportske do antistres i terapeutske. Dva masažna stola u posebnoj prostoriji za potpunu privatnost.',
    desc_en: 'Experienced therapists offer all types of massages — from relax and sports to anti-stress and therapeutic. Two massage tables in a private room.',
    list: [
      { sr: 'Terapeut sa iskustvom', en: 'Experienced therapist' },
      { sr: 'Sve vrste masaža', en: 'All types of massages' },
      { sr: '2 masažna stola, privatna prostorija', en: '2 massage tables, private room' },
    ],
  },
  {
    img: '/spa-images/new/lezaljke.webp',
    eyebrow_sr: 'Zona za odmaranje', eyebrow_en: 'Relaxation zone',
    title_sr: 'Ležaljke i', title_en: 'Loungers &',
    cursive_sr: 'potpuni mir', cursive_en: 'total peace',
    desc_sr: 'Posle saune ili bazena, opuštajte se na mozaičnim ležaljkama pored himalajskog slanog zida. Tuševi i svlačionice su deo SPA zone.',
    desc_en: 'After sauna or pool, relax on mosaic loungers next to a Himalayan salt wall. Showers and changing rooms are part of the SPA zone.',
    list: [
      { sr: 'Ležaljke sa himalajskim zidom', en: 'Loungers with Himalayan wall' },
      { sr: 'Tuševi i svlačionice', en: 'Showers and changing rooms' },
      { sr: 'Samo za goste apartmana', en: 'Only for apartment guests' },
    ],
    reverse: true,
  },
];

export default function WellnessPage() {
  return (
    <>
      <Nav active="/wellness" />
      <RevealOnScroll />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/spa-images/new/ambijent-spa.webp" alt="Wellness Goldenview" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero-content">
          <span className="eyebrow">Wellness &amp; SPA</span>
          <h1>
            <span data-sr="Oaza za" data-en="An oasis for">Oaza za</span>
            <span className="cursive" data-sr="vaše telo i dušu" data-en="your body & soul">vaše telo i dušu</span>
          </h1>
          <p>
            <span data-sr="Bazeni, sauna, đakuzi, parno kupatilo i profesionalne masaže — sve na jednom mestu, samo za goste Goldenview apartmana."
                  data-en="Pools, sauna, jacuzzi, steam room and professional massages — all in one place, exclusively for Goldenview guests.">
              Bazeni, sauna, đakuzi, parno kupatilo i profesionalne masaže — sve na jednom mestu, samo za goste Goldenview apartmana.
            </span>
          </p>
        </div>
      </section>

      {/* FEATURE ROWS */}
      {FEATURES.map((f, i) => (
        <section
          key={i}
          className="section-pad"
          style={i % 2 === 1 ? { background: 'var(--cream-2)' } : undefined}
        >
          <div className="container">
            <div className={`feature-row ${f.reverse ? 'reverse' : ''}`}>
              <div className="feature-img reveal-left">
                <Image src={f.img} alt={f.title_sr} width={620} height={440} sizes="(max-width: 1024px) 100vw, 50vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="feature-content reveal-right">
                <span className="eyebrow"><span data-sr={f.eyebrow_sr} data-en={f.eyebrow_en}>{f.eyebrow_sr}</span></span>
                <h2>
                  <span data-sr={f.title_sr} data-en={f.title_en}>{f.title_sr}</span><br />
                  <span className="cursive" data-sr={f.cursive_sr} data-en={f.cursive_en}>{f.cursive_sr}</span>
                </h2>
                <p><span data-sr={f.desc_sr} data-en={f.desc_en}>{f.desc_sr}</span></p>
                <ul className="feature-list">
                  {f.list.map((item, j) => (
                    <li key={j}>
                      <span className="feature-check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span data-sr={item.sr} data-en={item.en}>{item.sr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* VODENI DOZIVLJAJI BENTO */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Vodeni doživljaji" data-en="Water experiences">Vodeni doživljaji</span></span>
            <h2>
              <span data-sr="Đakuzi, para i" data-en="Jacuzzi, steam &">Đakuzi, para i</span> <span className="cursive" data-sr="ledena svežina" data-en="icy freshness">ledena svežina</span>
            </h2>
          </div>
          <div className="spa-bento">
            <div className="spa-bento-tile wide reveal">
              <Image src="/spa-images/new/djakuzi.webp" alt="Đakuzi" fill sizes="66vw" style={{ objectFit: 'cover' }} />
              <div className="spa-bento-cap">
                <div className="label"><span data-sr="Đakuzi" data-en="Jacuzzi">Đakuzi</span></div>
                <div className="cursive"><span data-sr="Topla voda i mehurići." data-en="Warm water and bubbles.">Topla voda i mehurići.</span></div>
              </div>
            </div>
            <div className="spa-bento-tile reveal delay-1">
              <Image src="/spa-images/new/parno.webp" alt="Parno kupatilo" fill sizes="33vw" style={{ objectFit: 'cover' }} />
              <div className="spa-bento-cap">
                <div className="label"><span data-sr="Parno kupatilo" data-en="Steam room">Parno kupatilo</span></div>
              </div>
            </div>
          </div>
          <div className="photo-strip">
            <div className="photo-strip-card reveal"><Image src="/spa-images/new/bure.webp" alt="Bure sa hladnom vodom" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-strip-card reveal delay-1"><Image src="/spa-images/new/tusevi.webp" alt="Tuševi" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-strip-card reveal delay-2"><Image src="/spa-images/new/djakuzi-terasa.webp" alt="Đakuzi terasa" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="photo-strip-card reveal delay-3"><Image src="/spa-images/new/djakuzi-close.webp" alt="Đakuzi" width={300} height={330} sizes="25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      {/* GALERIJA */}
      <section className="section-pad" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Galerija" data-en="Gallery">Galerija</span></span>
            <h2><span data-sr="Trenutci opuštanja" data-en="Moments of relaxation">Trenutci opuštanja</span></h2>
          </div>
          <div className="spa-bento">
            <div className="spa-bento-tile reveal"><Image src="/spa-images/new/masaza-soba.webp" alt="Masaža soba" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="spa-bento-tile reveal delay-1"><Image src="/spa-images/new/sauna-2.webp" alt="Sauna" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
            <div className="spa-bento-tile reveal delay-2"><Image src="/spa-images/new/masaza-lice.webp" alt="Masaža lice" fill sizes="33vw" style={{ objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Praktične informacije" data-en="Practical information">Praktične informacije</span></span>
            <h2><span data-sr="Dobro je znati" data-en="Good to know">Dobro je znati</span></h2>
          </div>
          <div className="info-grid">
            <div className="info-card reveal">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4><span data-sr="Radno vreme" data-en="Working hours">Radno vreme</span></h4>
              <p>
                <span data-sr="SPA centar je otvoren svaki dan od 08:00 do 22:00 za goste apartmana."
                      data-en="SPA center is open daily 08:00 – 22:00 for apartment guests.">
                  SPA centar je otvoren svaki dan od 08:00 do 22:00 za goste apartmana.
                </span>
              </p>
            </div>
            <div className="info-card reveal delay-1">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4><span data-sr="Samo za goste" data-en="Guests only">Samo za goste</span></h4>
              <p>
                <span data-sr="Wellness & SPA zona je dostupna isključivo gostima koji borave u Goldenview apartmanima."
                      data-en="The Wellness & SPA zone is available exclusively for guests staying in Goldenview apartments.">
                  Wellness & SPA zona je dostupna isključivo gostima koji borave u Goldenview apartmanima.
                </span>
              </p>
            </div>
            <div className="info-card reveal delay-2">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <h4><span data-sr="Rezervacija masaže" data-en="Massage reservation">Rezervacija masaže</span></h4>
              <p>
                <span data-sr="Za zakazivanje masaže pozovite 063 / 604-808 ili se javite na recepciji."
                      data-en="To book a massage call 063 / 604-808 or ask at reception.">
                  Za zakazivanje masaže pozovite 063 / 604-808 ili se javite na recepciji.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrowSr="Rezervišite boravak"
        eyebrowEn="Book your stay"
        titleSr="Opuštanje vas"
        titleEn="Relaxation"
        titleCursiveSr="čeka"
        titleCursiveEn="awaits you"
        bodySr="Pozovite nas da rezervišete apartman i uživate u kompletnom SPA doživljaju."
        bodyEn="Call us to book an apartment and enjoy the full SPA experience."
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
