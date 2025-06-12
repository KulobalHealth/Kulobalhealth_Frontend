import type { NextConfig } from "next";

<<<<<<< HEAD
<<<<<<< HEAD

const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}
=======
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
>>>>>>> origin
=======
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
>>>>>>> b9e08a776465fb0936ab0b90e9164904d87c5505

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
<<<<<<< HEAD
<<<<<<< HEAD
        source: '/pharmacy/:path*',
        destination: apiUrl
=======
        source: "/pharmacy/:path*",
        destination: apiUrl,
>>>>>>> origin
=======
        source: "/pharmacy/:path*",
        destination: apiUrl,
>>>>>>> b9e08a776465fb0936ab0b90e9164904d87c5505
      },
    ];
  },
};

export default nextConfig;
