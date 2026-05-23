'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 560 }}>
        <span className="eyebrow">Greška</span>
        <h1 style={{ margin: '0.5rem 0 1rem' }}>
          <span>Nešto je pošlo po zlu</span><br />
          <span className="cursive">something went wrong</span>
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Pokušajte ponovo, ili se vratite na početnu stranicu.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn btn-gold">Pokušaj ponovo</button>
          <Link href="/" className="btn btn-outline">Početna</Link>
        </div>
      </div>
    </section>
  );
}
