/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["localhost", "api-portfolio-rodrigonahid.herokuapp.com"],
  },
};

module.exports = nextConfig;
