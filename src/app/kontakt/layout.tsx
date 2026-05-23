import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Pozovite nas: apartmani 063/604-808, restoran 063/661-263. Email info@goldenview.rs. Alekse Markišića 122, Sokobanja.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
