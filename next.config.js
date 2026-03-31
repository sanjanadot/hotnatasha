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
  // Redirect .php URLs to clean URLs
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
