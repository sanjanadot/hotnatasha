/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hotnatasha.in',
      },
      {
        protocol: 'https',
        hostname: 'images.dmca.com',
      },
    ],
  },
  // Rewrite escorts-in-* URLs to location routes
  async rewrites() {
    return [
      {
        source: '/escorts-in-:slug',
        destination: '/location/:slug',
      },
    ];
  },
  // PHP redirects are handled by middleware.ts (see middleware.ts)
};

module.exports = nextConfig;
