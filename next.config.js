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
};
module.exports = nextConfig;
