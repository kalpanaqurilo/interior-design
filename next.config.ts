

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images: {
     unoptimized: true, 
    domains: [
      "res.cloudinary.com",
      "example.com",
      "d2j83cbk-4000.inc1.devtunnels.ms",
      "randomuser.me",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "d2j83cbk-4000.inc1.devtunnels.ms",
      },
    ],
  },
};

export default nextConfig;
