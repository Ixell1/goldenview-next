import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerija',
  description: 'Sve slike Goldenview-a — apartmani, restoran, wellness & SPA zona. 50+ fotografija prostora.',
  alternates: { canonical: '/galerija' },
  openGraph: {
    title: 'Galerija Goldenview Sokobanja',
    description: 'Apartmani, restoran, wellness & SPA — sve prostore na jednom mestu.',
    images: ['/Hero-goldenview.webp'],
  },
};

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
