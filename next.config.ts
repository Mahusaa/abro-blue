import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rskqyh6o93kqbixm.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
