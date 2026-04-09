/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udruzenjeradar.rs',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.vaucerisrbija.com',
        pathname: '/images/**',
      },
    ],
  },
};
module.exports = nextConfig;
