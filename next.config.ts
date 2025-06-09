import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  /* config options here */
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
