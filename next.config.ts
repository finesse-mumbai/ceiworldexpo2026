import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ceiworldexpo.com',
      },
    ],
  },
};

export default nextConfig;
