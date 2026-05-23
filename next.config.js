/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'udruzenjeradar.rs', pathname: '/wp-content/uploads/**' },
    ],
  },
};
module.exports = nextConfig;
