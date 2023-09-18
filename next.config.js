/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.**.amazonaws.com'
            }
        ]
    }
}

module.exports = nextConfig