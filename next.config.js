/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    queryParamsAllowList: ['page', 'manufacturer', 'type', 'model'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com'
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
