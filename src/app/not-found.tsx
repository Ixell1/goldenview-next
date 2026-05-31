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
            <span data-sr="Stranica nije pronađena" data-en="Page not found">Stranica nije pronađena</span><br />
            <span className="cursive" data-sr="vratimo se nazad" data-en="let's head back">vratimo se nazad</span>
          </h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            <span data-sr="Stranica koju tražite ne postoji ili je premeštena."
                  data-en="The page you are looking for does not exist or has moved.">
              Stranica koju tražite ne postoji ili je premeštena.
            </span>
          </p>
          <Link href="/" className="btn btn-gold"><span data-sr="Nazad na početnu" data-en="Back to home">Nazad na početnu</span></Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
