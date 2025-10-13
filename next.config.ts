// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "example.com",
//       },
//       {
//         protocol: "https",
//         hostname: "d2j83cbk-4000.inc1.devtunnels.ms"
//       },
//       {
//         protocol: "https",
//         hostname: "randomuser.me", 
//       },
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       }
//        images: {
//     domains: ["res.cloudinary.com"], // allow Cloudinary images
//   },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
