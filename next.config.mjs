/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Ini domain Contentful
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
