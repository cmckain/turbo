import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@frontend/types', '@frontend/ui'],
  allowedDevOrigins: ['*.coolify.projectunity.io']
}

export default nextConfig
