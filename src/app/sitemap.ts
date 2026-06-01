import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blog';

const SITE = 'https://goldenview.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/apartmani`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/restoran`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/wellness`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/galerija`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/vesti-i-objave`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
