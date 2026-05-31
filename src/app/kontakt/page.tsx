'use client';

import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import AvailabilityChecker from '@/components/AvailabilityChecker';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function KontaktPage() {
  return (
    <>
      <Nav active="/kontakt" />
      <RevealOnScroll />

      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal" style={{ paddingTop: '5rem' }}>
            <span className="eyebrow"><span data-sr="Kontakt" data-en="Contact">Kontakt</span></span>
            <h1 style={{ margin: '0.4rem 0 0.8rem' }}>
              <span data-sr="Tu smo za" data-en="We are here for">Tu smo za</span>{' '}
              <span className="cursive" data-sr="vaše pitanje" data-en="your questions">vaše pitanje</span>
            </h1>
            <p>
              <span data-sr="Pozovite, pišite ili nas posetite. Apartmani i restoran imaju odvojene brojeve telefona."
                    data-en="Call, write or visit us. Apartments and the restaurant have separate phone numbers.">
                Pozovite, pišite ili nas posetite. Apartmani i restoran imaju odvojene brojeve telefona.
              </span>
            </p>
          </div>
          <div className="contact-cards">
            {/* APARTMANI CARD */}
            <article className="contact-card reveal">
              <div className="card-img">
                <Image src="/apt-images/apartman-1.webp" alt="Goldenview apartmani" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="card-body">
                <span className="eyebrow"><span data-sr="Smeštaj" data-en="Accommodation">Smeštaj</span></span>
                <h3><span data-sr="Apartmani" data-en="Apartments">Apartmani</span></h3>
                <a href="tel:063604808" className="card-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  063 / 604-808
                </a>
                <div className="card-tags">
                  <span className="card-tag"><span data-sr="Direktne rezervacije" data-en="Direct reservations">Direktne rezervacije</span></span>
                  <span className="card-tag"><span data-sr="Provera dostupnosti" data-en="Check availability">Provera dostupnosti</span></span>
                  <span className="card-tag"><span data-sr="Informacije" data-en="Information">Informacije</span></span>
                  <span className="card-tag"><span data-sr="Recepcija" data-en="Reception">Recepcija</span></span>
                </div>
                <div className="card-info">
                  <div className="card-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Alekse Markišića 122, Sokobanja</span>
                  </div>
                  <div className="card-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <a href="mailto:info@goldenview.rs">info@goldenview.rs</a>
                  </div>
                  <div className="card-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>
                      <span data-sr="Check-in 14:00 / Check-out 10:00" data-en="Check-in 2:00 PM / Check-out 10:00 AM">Check-in 14:00 / Check-out 10:00</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* RESTORAN CARD */}
            <article className="contact-card reveal delay-1">
              <div className="card-img">
                <Image src="/rest-images/new/ambient-1.webp" alt="Goldenview restoran" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="card-body">
                <span className="eyebrow"><span data-sr="Hrana & piće" data-en="Food & drink">Hrana & piće</span></span>
                <h3><span data-sr="Restoran" data-en="Restaurant">Restoran</span></h3>
                <a href="tel:063661263" className="card-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  063 / 661-263
                </a>
                <div className="card-tags">
                  <span className="card-tag"><span data-sr="Rezervacije" data-en="Reservations">Rezervacije</span></span>
                  <span className="card-tag"><span data-sr="Proslave" data-en="Events">Proslave</span></span>
                  <span className="card-tag"><span data-sr="Naručivanje hrane" data-en="Food orders">Naručivanje hrane</span></span>
                </div>
                <div className="card-info">
                  <div className="card-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Alekse Markišića 122, Sokobanja</span>
                  </div>
                  <div className="card-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span><span data-sr="Svaki dan 08:00 – 23:00" data-en="Every day 08:00 – 23:00">Svaki dan 08:00 – 23:00</span></span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* AVAILABILITY */}
          <div style={{ marginTop: '3rem' }}>
            <AvailabilityChecker />
          </div>

          {/* MAP */}
          <div className="map-wrap reveal" style={{ marginTop: '3rem' }}>
            <iframe
              src="https://www.google.com/maps?q=Golden+View+apartmani+Alekse+Marki%C5%A1i%C4%87a+122+Sokobanja&output=embed&hl=sr&z=15"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goldenview lokacija"
            />
          </div>

          {/* SHARED INFO */}
          <div className="shared-info reveal">
            <p>
              <span data-sr="Alekse Markišića 122, Sokobanja, Srbija 18230" data-en="Alekse Markišića 122, Sokobanja, Serbia 18230">Alekse Markišića 122, Sokobanja, Srbija 18230</span>
              &nbsp;·&nbsp;
              <a href="mailto:info@goldenview.rs">info@goldenview.rs</a>
              &nbsp;·&nbsp;
              <a href="https://www.instagram.com/goldenview.gastrostay/" target="_blank" rel="noopener noreferrer">Instagram</a>
              &nbsp;|&nbsp;
              <a href="https://www.facebook.com/p/Golden-View-apartmani-100094563064659/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        titleSr="Vidimo se u "
        titleEn="See you in "
        titleCursiveSr="Sokobanji"
        titleCursiveEn="Sokobanja"
        bodySr="Pozovite nas za rezervaciju apartmana ili stola u restoranu. Biće nam zadovoljstvo da vas ugostimo."
        bodyEn="Call us to book an apartment or a table at the restaurant. It will be our pleasure to host you."
      />

      <Footer />
    </>
  );
}
