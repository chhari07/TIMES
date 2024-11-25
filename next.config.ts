import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ reactStrictMode: true,
  images: {
    domains: ["www.worldatlas.com", "images.unsplash.com"], // Add any other required domains here
  },
};

export default nextConfig;
