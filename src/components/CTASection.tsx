import MCBEBookButton from '@/components/MCBEBookButton';

type CTAProps = {
  eyebrowSr?: string;
  eyebrowEn?: string;
  titleSr: string;
  titleEn: string;
  titleCursiveSr?: string;
  titleCursiveEn?: string;
  bodySr?: string;
  bodyEn?: string;
  primaryHref?: string;
  primarySr?: string;
  primaryEn?: string;
  secondaryHref?: string;
  secondarySr?: string;
  secondaryEn?: string;
  // When true, the primary action opens the Mobile-Calendar booking modal
  // (instead of a tel: link), and the phone number shows below as secondary.
  booking?: boolean;
  phone?: string;
};

export default function CTASection({
  eyebrowSr = 'Dobro došli',
  eyebrowEn = 'Welcome',
  titleSr,
  titleEn,
  titleCursiveSr,
  titleCursiveEn,
  bodySr,
  bodyEn,
  primaryHref = 'tel:063604808',
  primarySr = 'Apartmani: 063 / 604-808',
  primaryEn = 'Apartments: 063 / 604-808',
  secondaryHref = 'tel:063661263',
  secondarySr = 'Restoran: 063 / 661-263',
  secondaryEn = 'Restaurant: 063 / 661-263',
  booking = false,
  phone = '063604808',
}: CTAProps) {
  const phonePretty = phone.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1 / $2-$3');
  return (
    <section className="cta-section reveal">
      <div className="cta-content">
        <span className="eyebrow"><span data-sr={eyebrowSr} data-en={eyebrowEn}>{eyebrowSr}</span></span>
        <h2>
          <span data-sr={titleSr} data-en={titleEn}>{titleSr}</span>
          {titleCursiveSr && titleCursiveEn && (
            <> <span className="cursive" data-sr={titleCursiveSr} data-en={titleCursiveEn}>{titleCursiveSr}</span></>
          )}
        </h2>
        {bodySr && bodyEn && (
          <p><span data-sr={bodySr} data-en={bodyEn}>{bodySr}</span></p>
        )}
        {booking ? (
          <div className="cta-btns cta-btns-stack">
            <MCBEBookButton className="btn btn-gold">
              <span data-sr="Proveri dostupnost i rezerviši" data-en="Check availability & book">Proveri dostupnost i rezerviši</span>
            </MCBEBookButton>
            <a href={`tel:${phone}`} className="cta-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <span data-sr={`ili pozovite ${phonePretty}`} data-en={`or call ${phonePretty}`}>ili pozovite {phonePretty}</span>
            </a>
          </div>
        ) : (
          <div className="cta-btns">
            <a href={primaryHref} className="btn btn-gold">
              <span data-sr={primarySr} data-en={primaryEn}>{primarySr}</span>
            </a>
            <a href={secondaryHref} className="btn btn-outline-white">
              <span data-sr={secondarySr} data-en={secondaryEn}>{secondarySr}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
