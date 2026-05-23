import type { MetadataRoute } from 'next';

const SITE = 'https://goldenview.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/apartmani`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/restoran`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/wellness`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
