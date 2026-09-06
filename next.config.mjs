/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/hosting/cpanel-hosting",
        destination: "/hosting",
        permanent: true,
      },
      {
        source: "/en-bd/hosting/cpanel-hosting",
        destination: "/hosting",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/en-bd",
        destination: "/",
      },
      {
        source: "/en-bd/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
