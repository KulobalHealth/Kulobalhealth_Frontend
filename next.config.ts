import type { NextConfig } from "next";


const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/pharmacy/:path*',
        destination: apiUrl
      },
    ];
  },
};

export default nextConfig;
