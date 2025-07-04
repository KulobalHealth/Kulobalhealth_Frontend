<<<<<<< HEAD
import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: "/pharmacy/:path*",
        destination: apiUrl,
      },
    ];
  },
};

export default nextConfig;
=======
import type { NextConfig } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/pharmacy/:path*',
        destination: apiUrl,
      },
    ];
  },
};

export default nextConfig;
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
