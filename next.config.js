/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'udruzenjeradar.rs', pathname: '/wp-content/uploads/**' },
      { protocol: 'https', hostname: 'www.vaucerisrbija.com', pathname: '/images/**' },
    ],
  },
  // 301 redirects from old WordPress URLs that have no 1:1 page in the new
  // site, so existing Google rankings/backlinks land on the closest page
  // instead of 404. Blog posts + main pages kept their exact slugs and need
  // no redirect.
  async redirects() {
    const toRestoran = [
      '/jelovnik', '/jelovnik-2', '/dorucak', '/predjela', '/salate',
      '/dezerti', '/bezalkoholna-pica', '/alkoholna-pica', '/karta-picaa',
    ];
    return toRestoran.map((source) => ({ source, destination: '/restoran', permanent: true }));
  },
};
module.exports = nextConfig;
