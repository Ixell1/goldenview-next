import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { BLOG_POSTS, getPost, type Block } from '@/data/blog';

const SITE = 'https://goldenview.rs';

// Pre-render all blog posts at build time (static).
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE}/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.cover] },
  };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' });

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'h2': return <h2 key={i}>{b.text}</h2>;
    case 'h3': return <h3 key={i}>{b.text}</h3>;
    case 'ul': return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
    default: return <p key={i}>{b.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [`${SITE}${post.cover}`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'sr-RS',
    author: { '@type': 'Organization', name: 'Golden View Sokobanja', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Golden View Sokobanja',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo-goldenview.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${post.slug}` },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Vesti i objave', item: `${SITE}/vesti-i-objave` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Nav onDarkHero />
      <RevealOnScroll />

      <article className="blog-post">
        <header className="blog-post-hero">
          <div className="blog-post-hero-bg">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="blog-post-hero-content">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Početna</Link> <span>/</span>{' '}
              <Link href="/vesti-i-objave">Vesti i objave</Link>
            </nav>
            <h1>{post.title}</h1>
            <p className="blog-post-meta">{fmt(post.date)} · {post.readingMinutes} min čitanja</p>
          </div>
        </header>

        <div className="container">
          <div className="blog-post-body reveal">
            {post.body.map(renderBlock)}
          </div>

          <div className="blog-post-cta reveal">
            <p data-sr="Tražite smeštaj u Sokobanji?" data-en="Looking for a stay in Sokobanja?">Tražite smeštaj u Sokobanji?</p>
            <Link href="/apartmani" className="btn btn-gold">
              <span data-sr="Pogledaj apartmane" data-en="View apartments">Pogledaj apartmane</span>
            </Link>
          </div>

          {related.length > 0 && (
            <div className="blog-related reveal">
              <h2 data-sr="Pročitajte još" data-en="Read more">Pročitajte još</h2>
              <div className="blog-related-grid">
                {related.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="blog-card">
                    <div className="blog-card-img">
                      <Image src={p.cover} alt={p.coverAlt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-card-meta">{fmt(p.date)} · {p.readingMinutes} min</span>
                      <h3 className="blog-card-title">{p.title}</h3>
                      <span className="blog-card-link">Pročitaj više →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection
        titleSr="Vidimo se u "
        titleEn="See you in "
        titleCursiveSr="Sokobanji"
        titleCursiveEn="Sokobanja"
        bodySr="Rezervišite apartman i uživajte u svemu što Sokobanja nudi."
        bodyEn="Book an apartment and enjoy everything Sokobanja offers."
      />

      <Footer />
    </>
  );
}
