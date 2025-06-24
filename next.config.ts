import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow cross-origin requests from your local network
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(',') || [],
  }),
};

export default nextConfig;
