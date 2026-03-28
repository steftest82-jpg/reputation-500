import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bknest.com',
        pathname: '/stage/rep500/**',
      },
    ],
  },
}

export default nextConfig
