import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Quality levels used by the gallery (78 for grid tiles, 82 for the
    // lightbox). Declaring them is required from Next.js 16 onward.
    qualities: [78, 82],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ceiworldexpo.com',
      },
    ],
  },
};

export default nextConfig;
