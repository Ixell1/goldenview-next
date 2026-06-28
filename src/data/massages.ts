// Massage price list — single source of truth for the wellness page price
// table and the slim teaser band on the home page. Update prices here only.

export type MassagePrice = {
  /** Full service name (bilingual) */
  sr: string;
  en: string;
  /** Short label used in the compact home-page band */
  short_sr: string;
  short_en: string;
  /** Duration, identical in both languages, e.g. "60 min" */
  dur: string;
  /** Price formatted Serbian-style, e.g. "4.500,00" */
  price: string;
};

export const MASSAGES: MassagePrice[] = [
  { sr: 'Terapeutska masaža', en: 'Therapeutic massage', short_sr: 'Terapeutska', short_en: 'Therapeutic', dur: '60 min', price: '4.500,00' },
  { sr: 'Terapeutska masaža', en: 'Therapeutic massage', short_sr: 'Terapeutska', short_en: 'Therapeutic', dur: '30 min', price: '3.500,00' },
  { sr: 'Relax masaža', en: 'Relax massage', short_sr: 'Relax', short_en: 'Relax', dur: '60 min', price: '4.000,00' },
  { sr: 'Relax masaža', en: 'Relax massage', short_sr: 'Relax', short_en: 'Relax', dur: '30 min', price: '3.000,00' },
];

// Booking line shown under the price list.
export const MASSAGE_PHONE = '+381 63 661263';
export const MASSAGE_PHONE_HREF = 'tel:+38163661263';
