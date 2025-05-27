import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/pharmacy/:path*',
        destination: 'https://kulobalhealth-backend.onrender.com/api/v1/pharmacy/', // Proxy to backend
      },
    ];
  },
};

export default nextConfig;
