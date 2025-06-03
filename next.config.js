/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
// filepath: /Users/benny/Desktop/mkdynamics/next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
};
