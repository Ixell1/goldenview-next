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
}: CTAProps) {
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
        <div className="cta-btns">
          <a href={primaryHref} className="btn btn-gold">
            <span data-sr={primarySr} data-en={primaryEn}>{primarySr}</span>
          </a>
          <a href={secondaryHref} className="btn btn-outline-white">
            <span data-sr={secondarySr} data-en={secondaryEn}>{secondarySr}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
