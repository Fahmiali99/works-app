import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "static.vecteezy.com",
      "i.pinimg.com",
      "static.thenounproject.com",
      "encrypted-tbn0.gstatic.com",
      "icons.veryicon.com",
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
