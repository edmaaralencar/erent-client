/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: ['localhost']
  }
};

module.exports = nextConfig;
