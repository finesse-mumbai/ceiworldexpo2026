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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.ceiworldexpo.com https://img.youtube.com https://www.worldexindia.com https://online.anyflip.com; media-src 'self' https://portal.intexfair.com; frame-src 'self' https://online.anyflip.com https://www.youtube.com https://maps.google.com https://www.google.com; connect-src 'self' https://api.worldexindia.com;"
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ]
  }
};

export default nextConfig;
