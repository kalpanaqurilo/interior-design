import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "d2j83cbk-4000.inc1.devtunnels.ms", // your API host (if it serves images too)
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // if you also use this in other components
      },
    ],
  },
};

export default nextConfig;
