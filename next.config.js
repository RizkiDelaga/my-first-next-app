/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static1.srcdn.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig