import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Sanity CDN ko allow karna
  },
};

export default nextConfig;
