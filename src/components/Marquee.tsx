'use client';

export const Marquee = () => {
  const marqueeContent = (
    <>
      <span className="highlight">GOLDENVIEW</span>
      <span className="marquee-dot"></span>
      SOKOBANJA
      <span className="marquee-dot"></span>
      APARTMANI
      <span className="marquee-dot"></span>
      BAZEN
      <span className="marquee-dot"></span>
      RESTORAN
      <span className="marquee-dot"></span>
      DOMAĆA KUHINJA
      <span className="marquee-dot"></span>
      MIR I TIŠINA
      <span className="marquee-dot"></span>
    </>
  );

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="marquee-item">{marqueeContent}</span>
        <span className="marquee-item">{marqueeContent}</span>
        <span className="marquee-item">{marqueeContent}</span>
        <span className="marquee-item">{marqueeContent}</span>
      </div>
    </div>
  );
};
