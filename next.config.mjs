/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};
export default nextConfig;