const SITE = 'https://goldenview.rs';

const LODGING = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${SITE}/#lodging`,
  name: 'Goldenview Sokobanja',
  url: SITE,
  description: 'Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i wellness & SPA centar u Sokobanji.',
  image: [`${SITE}/logo-goldenview.png`],
  telephone: '+381-63-604-808',
  email: 'info@goldenview.rs',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alekse Markišića 122',
    addressLocality: 'Sokobanja',
    postalCode: '18230',
    addressCountry: 'RS',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6486536,
    longitude: 21.8575375,
  },
  checkinTime: '14:00',
  checkoutTime: '10:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Bazen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Klima', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restoran', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wellness & SPA', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sauna', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Đakuzi', value: true },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.9',
    bestRating: '10',
    reviewCount: '190',
  },
  sameAs: ['https://www.instagram.com/goldenview.gastrostay/'],
};

const RESTAURANT = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE}/restoran/#restaurant`,
  name: 'Goldenview Restoran',
  url: `${SITE}/restoran`,
  telephone: '+381-63-661-263',
  servesCuisine: ['Serbian', 'Mediterranean', 'European'],
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alekse Markišića 122',
    addressLocality: 'Sokobanja',
    postalCode: '18230',
    addressCountry: 'RS',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00', closes: '23:00',
  }],
  hasMenu: `${SITE}/rest-images/new/jelovnik.pdf`,
};

export function LodgingSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(LODGING) }}
    />
  );
}

export function RestaurantSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(RESTAURANT) }}
    />
  );
}
