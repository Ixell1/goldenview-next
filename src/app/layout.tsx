import type { Metadata } from 'next';
import { LangProvider } from '@/context/LangContext';
import { LodgingSchema } from '@/components/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Goldenview Sokobanja | Apartmani sa bazenom i restoran',
    template: '%s | Goldenview Sokobanja',
  },
  description: 'Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete. Ocena 9.9 na Booking-u. Rezervišite direktno za najbolju cenu. Sokobanja.',
  metadataBase: new URL('https://goldenview.rs'),
  keywords: [
    'Goldenview', 'Sokobanja', 'apartmani Sokobanja', 'smeštaj Sokobanja',
    'bazen Sokobanja', 'wellness Sokobanja', 'spa Sokobanja',
    'restoran Sokobanja', 'odmor Sokobanja', 'rezervacija apartmana',
  ],
  authors: [{ name: 'Goldenview' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Goldenview Sokobanja | Apartmani sa bazenom i restoran',
    description: 'Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Goldenview Sokobanja',
    url: 'https://goldenview.rs',
    images: [{ url: '/logo-goldenview.png', width: 1200, height: 630, alt: 'Goldenview Sokobanja' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldenview Sokobanja',
    description: 'Apartmani sa bazenom, restoran sa domaćom kuhinjom i wellness u Sokobanji.',
    images: ['/logo-goldenview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C9A84C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" data-lang="sr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.mobile-calendar.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <LodgingSchema />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Preskoči na sadržaj</a>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
