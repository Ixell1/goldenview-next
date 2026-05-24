import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/logo-goldenview.png"
            alt="Goldenview"
            width={160}
            height={52}
            className="footer-logo"
          />
          <p>
            <span data-sr="Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete."
                  data-en="Modern apartments with pool, local restaurant, and the peace you deserve.">
              Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete.
            </span>
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/goldenview.gastrostay/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/p/Golden-View-apartmani-100094563064659/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 data-sr="SMEŠTAJ" data-en="ACCOMMODATION">SMEŠTAJ</h4>
          <Link href="/apartmani"><span data-sr="Apartmani" data-en="Apartments">Apartmani</span></Link>
          <Link href="/apartmani"><span data-sr="Cene" data-en="Pricing">Cene</span></Link>
          <Link href="/apartmani"><span data-sr="Povoljnosti" data-en="Amenities">Povoljnosti</span></Link>
        </div>

        <div className="footer-col">
          <h4 data-sr="DOŽIVLJAJ" data-en="EXPERIENCE">DOŽIVLJAJ</h4>
          <Link href="/restoran"><span data-sr="Restoran" data-en="Restaurant">Restoran</span></Link>
          <Link href="/wellness">Wellness &amp; SPA</Link>
          <Link href="/#galerija"><span data-sr="Galerija" data-en="Gallery">Galerija</span></Link>
        </div>

        <div className="footer-col" id="kontakt">
          <h4 data-sr="KONTAKT" data-en="CONTACT">KONTAKT</h4>
          <div className="footer-contact-row">
            <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p>Sokobanja, Alekse Markišića 122</p>
          </div>
          <div className="footer-contact-row">
            <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <a href="tel:063604808">063 / 604-808</a>
          </div>
          <div className="footer-contact-row">
            <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:info@goldenview.rs">info@goldenview.rs</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Goldenview Sokobanja. <span data-sr="Sva prava zadržana." data-en="All rights reserved.">Sva prava zadržana.</span></p>
      </div>
    </footer>
  );
}
