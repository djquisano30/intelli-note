/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.clerk.com"],
    remotePatterns: [{ hostname: "img.clerk.com" }],
  },
};

module.exports = nextConfig;
