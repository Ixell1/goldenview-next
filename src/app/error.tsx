'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 560 }}>
        <span className="eyebrow"><span data-sr="Greška" data-en="Error">Greška</span></span>
        <h1 style={{ margin: '0.5rem 0 1rem' }}>
          <span data-sr="Nešto je pošlo po zlu" data-en="Something went wrong">Nešto je pošlo po zlu</span><br />
          <span className="cursive" data-sr="pokušajte ponovo" data-en="please try again">pokušajte ponovo</span>
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          <span data-sr="Pokušajte ponovo, ili se vratite na početnu stranicu."
                data-en="Try again, or return to the home page.">
            Pokušajte ponovo, ili se vratite na početnu stranicu.
          </span>
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn btn-gold"><span data-sr="Pokušaj ponovo" data-en="Try again">Pokušaj ponovo</span></button>
          <Link href="/" className="btn btn-outline"><span data-sr="Početna" data-en="Home">Početna</span></Link>
        </div>
      </div>
    </section>
  );
}
