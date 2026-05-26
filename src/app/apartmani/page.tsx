import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import MobileCalendarWidget from '@/components/MobileCalendarWidget';
import MCBEBookButton from '@/components/MCBEBookButton';
import AptVideoBox from '@/components/AptVideoBox';
import RevealOnScroll from '@/components/RevealOnScroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apartmani',
  description: 'Dvanaest apartmana u Sokobanji — studio, jednosobni, dvosobni i duplex. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu.',
  alternates: { canonical: '/apartmani' },
  openGraph: {
    title: 'Apartmani Goldenview Sokobanja',
    description: 'Moderni apartmani sa bazenom — od studija do duplex-a.',
    images: ['/apt-images/apartman-3.webp'],
  },
};

type Apt = {
  id: string;
  name_sr: string; name_en: string;
  img: string;
  video?: string;
  size: string;
  cap_sr: string; cap_en: string;
  badge_sr?: string;
  badge_en?: string;
  featured?: boolean;
  featuredLabel_sr?: string;
  featuredLabel_en?: string;
  extra_sr?: string;
  extra_en?: string;
};

// Guest capacities reflect Mobile-Calendar room data (source of truth).
const APTS: Apt[] = [
  { id: 'A1', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-2.webp', video: '/apt-videos/a1.mp4', size: '42', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'A2', name_sr: 'Duplex', name_en: 'Duplex', img: '/apt-images/apartman-4.webp', video: '/apt-videos/a2.mp4', size: '42', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B2', name_sr: 'Jednosobni', name_en: 'One-bedroom', img: '/apt-images/apartman-5.webp', video: '/apt-videos/b2.mp4', size: '35', cap_sr: 'do 3 gosta', cap_en: 'up to 3 guests' },
  { id: 'B3', name_sr: 'Dvosobni', name_en: 'Two-bedroom', img: '/apt-images/apartman-3.webp', video: '/apt-videos/b3.mp4', size: '51', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests' },
  { id: 'B4', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apartman-1.webp', video: '/apt-videos/b4.mp4', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  { id: 'B5', name_sr: 'Studio', name_en: 'Studio', img: '/apt-images/apt-6.webp', video: '/apt-videos/b5.mp4', size: '32', cap_sr: 'do 2 gosta', cap_en: 'up to 2 guests' },
  {
    id: 'B6', name_sr: 'Dvosobni', name_en: 'Two-bedroom',
    img: '/apt-images/apt-7.webp', video: '/apt-videos/b6.mp4',
    size: '49', cap_sr: 'do 4 gosta', cap_en: 'up to 4 guests',
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

const AMENITIES = [
  { icon: 'wifi', sr: 'WiFi', en: 'WiFi', descSr: 'Besplatan brzi internet', descEn: 'Free high-speed internet' },
  { icon: 'wind', sr: 'Klima', en: 'A/C', descSr: 'Grejanje i hlađenje', descEn: 'Heating and cooling' },
  { icon: 'tv', sr: 'Smart TV', en: 'Smart TV', descSr: 'Sa streaming servisima', descEn: 'With streaming services' },
  { icon: 'utensils', sr: 'Kuhinja', en: 'Kitchen', descSr: 'Potpuno opremljena', descEn: 'Fully equipped' },
  { icon: 'home', sr: 'Terasa', en: 'Terrace', descSr: 'Privatna terasa sa pogledom', descEn: 'Private terrace with a view' },
  { icon: 'pool', sr: 'Bazen', en: 'Pool', descSr: 'Pristup bazenu za sve goste', descEn: 'Pool access for all guests' },
  { icon: 'parking', sr: 'Parking', en: 'Parking', descSr: 'Besplatan parking', descEn: 'Free parking' },
  { icon: 'bed', sr: 'Posteljina', en: 'Bedding', descSr: 'Sve posteljine uključene', descEn: 'All linens included' },
];

const ICONS: Record<string, React.ReactElement> = {
  wifi: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>,
  wind: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  tv: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>,
  utensils: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>,
  home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  pool: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2M2 16s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2"/></svg>,
  parking: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>,
  bed: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M22 12H2m20 8v-8a2 2 0 00-2-2h-4l-2-2H8l-2 2H2"/></svg>,
};

export default function ApartmaniPage() {
  return (
    <>
      <Nav active="/apartmani" onDarkHero />
      <RevealOnScroll />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/apt-images/apartman-3.webp" alt="Apartmani Goldenview" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero-content">
          <span className="eyebrow"><span data-sr="Smeštaj" data-en="Accommodation">Smeštaj</span></span>
          <h1>
            <span data-sr="Izaberite apartman" data-en="Choose your apartment">Izaberite apartman</span>
            <span className="cursive" data-sr="koji vam odgovara" data-en="that suits you">koji vam odgovara</span>
          </h1>
          <p>
            <span data-sr="Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu."
                  data-en="Twelve apartments — from a compact studio to a family duplex. All with kitchen, AC, smart TV and pool access.">
              Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu.
            </span>
          </p>
        </div>
      </section>

      {/* BOOKING ENGINE — overlaps hero so visitors can check availability first */}
      <div className="mc-widget-wrap reveal">
        <MobileCalendarWidget />
      </div>

      {/* APARTMENTS GRID */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><span data-sr="Naši apartmani" data-en="Our apartments">Naši apartmani</span></span>
            <h2>
              <span data-sr="Prostor za" data-en="Space for">Prostor za</span> <span className="cursive" data-sr="vaš odmor" data-en="your getaway">vaš odmor</span>
            </h2>
          </div>
          <div className="apt-grid">
            {APTS.map((a, i) => (
              <div key={a.id} className={`apt-card reveal${a.featured ? ' apt-card-featured' : ''} ${i % 3 === 1 ? 'delay-1' : i % 3 === 2 ? 'delay-2' : ''}`}>
                <div className={`apt-img${a.video ? ' apt-img-video' : ''}`}>
                  {a.video ? (
                    <AptVideoBox src={a.video} poster={a.img} alt={`${a.id} ${a.name_sr}`} />
                  ) : (
                    <Image src={a.img} alt={`${a.id} ${a.name_sr}`} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  )}
                  <span className="apt-badge">
                    <span data-sr={a.badge_sr ?? `${a.id} ${a.name_sr}`} data-en={a.badge_en ?? `${a.id} ${a.name_en}`}>
                      {a.badge_sr ?? `${a.id} ${a.name_sr}`}
                    </span>
                  </span>
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
                    <MCBEBookButton className="btn btn-gold apt-cta"><span data-sr="Rezerviši" data-en="Book">Rezerviši</span></MCBEBookButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities-section">
        <div className="section-header reveal">
          <span className="eyebrow"><span data-sr="Oprema" data-en="Amenities">Oprema</span></span>
          <h2>
            <span data-sr="Šta svaki apartman" data-en="What every apartment">Šta svaki apartman</span> <span className="cursive" data-sr="sadrži" data-en="includes">sadrži</span>
          </h2>
        </div>
        <div className="amenities-grid container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {AMENITIES.map((a, i) => (
            <div key={a.icon} className={`amenity-card reveal ${i % 4 === 1 ? 'delay-1' : i % 4 === 2 ? 'delay-2' : i % 4 === 3 ? 'delay-3' : ''}`}>
              <div className="amenity-icon">{ICONS[a.icon]}</div>
              <h4><span data-sr={a.sr} data-en={a.en}>{a.sr}</span></h4>
              <p><span data-sr={a.descSr} data-en={a.descEn}>{a.descSr}</span></p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrowSr="Direktna rezervacija"
        eyebrowEn="Book direct"
        titleSr="Rezervišite direktno"
        titleEn="Book directly"
        titleCursiveSr="za najbolju cenu"
        titleCursiveEn="for the best price"
        bodySr="Pozovite nas i saznajte dostupnost i cene za vaš termin. Direktna rezervacija garantuje najbolju cenu."
        bodyEn="Call us and find out availability and prices for your dates. Direct booking guarantees the best price."
        primarySr="Pozovite 063 / 604-808"
        primaryEn="Call 063 / 604-808"
        secondaryHref="/kontakt"
        secondarySr="Kontakt"
        secondaryEn="Contact"
      />

      <Footer />
    </>
  );
}
