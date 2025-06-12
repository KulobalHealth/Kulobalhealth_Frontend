import type { NextConfig } from "next";

<<<<<<< HEAD

const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}
=======
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
>>>>>>> origin

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
<<<<<<< HEAD
        source: '/pharmacy/:path*',
        destination: apiUrl
=======
        source: "/pharmacy/:path*",
        destination: apiUrl,
>>>>>>> origin
      },
    ];
  },
};

export default nextConfig;
