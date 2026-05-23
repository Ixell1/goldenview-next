import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 560 }}>
          <span className="eyebrow">404</span>
          <h1 style={{ margin: '0.5rem 0 1rem' }}>
            <span>Stranica nije pronađena</span><br />
            <span className="cursive">page not found</span>
          </h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            Stranica koju tražite ne postoji ili je premeštena.
          </p>
          <Link href="/" className="btn btn-gold">Nazad na početnu</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
