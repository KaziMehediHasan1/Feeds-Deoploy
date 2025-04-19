import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    domains: [
      "tmssl.akamaized.net",
      "example.com", // add more domains as needed
      "images.unsplash.com",
      "cdn.pixabay.com",
    ],
  },
};

export default nextConfig;
