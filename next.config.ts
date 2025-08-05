import type { NextConfig } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/pharmacy/:path*',
  //       destination: apiUrl,
  //     },
  //   ];
  // },
};

export default nextConfig;
