import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { BLOG_POSTS } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Vesti i objave',
  description: 'Blog Golden View Sokobanja — vodiči kroz Sokobanju, atrakcije, akva park, restorani i saveti za odmor.',
  alternates: { canonical: '/vesti-i-objave' },
  openGraph: {
    title: 'Vesti i objave | Golden View Sokobanja',
    description: 'Vodiči kroz Sokobanju, atrakcije, akva park i gastronomiju.',
    images: ['/spa-images/new/ambijent-spa.webp'],
  },
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Nav active="/vesti-i-objave" onDarkHero />
      <RevealOnScroll />

      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/spa-images/new/ambijent-spa.webp" alt="Sokobanja" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero-content">
          <span className="eyebrow"><span data-sr="Blog" data-en="Blog">Blog</span></span>
          <h1>
            <span data-sr="Vesti i" data-en="News &">Vesti i</span>
            <span className="cursive" data-sr="objave" data-en="updates">objave</span>
          </h1>
          <p>
            <span data-sr="Vodiči kroz Sokobanju, atrakcije, akva park i gastronomiju — saveti za savršen odmor."
                  data-en="Guides to Sokobanja, attractions, the aqua park and gastronomy — tips for a perfect stay.">
              Vodiči kroz Sokobanju, atrakcije, akva park i gastronomiju — saveti za savršen odmor.
            </span>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Link key={p.slug} href={`/${p.slug}`} className={`blog-card reveal ${i % 3 === 1 ? 'delay-1' : i % 3 === 2 ? 'delay-2' : ''}`}>
                <div className="blog-card-img">
                  <Image src={p.cover} alt={p.coverAlt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-meta">{fmt(p.date)} · {p.readingMinutes} min</span>
                  <h2 className="blog-card-title">{p.title}</h2>
                  <p className="blog-card-desc">{p.description}</p>
                  <span className="blog-card-link">Pročitaj više →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titleSr="Vidimo se u "
        titleEn="See you in "
        titleCursiveSr="Sokobanji"
        titleCursiveEn="Sokobanja"
        bodySr="Rezervišite apartman i otkrijte sve što Sokobanja nudi."
        bodyEn="Book an apartment and discover everything Sokobanja offers."
      />

      <Footer />
    </>
  );
}
