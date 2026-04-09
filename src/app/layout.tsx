import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { LangProvider } from '../context/LangContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Goldenview Sokobanja | Apartmani sa bazenom i restoran',
  description: 'Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete. Ocena 9.9 na Booking-u. Rezervišite direktno za najbolju cenu. Sokobanja.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" data-lang="sr">
      <body className={`${plusJakarta.variable} ${cormorant.variable}`}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
