const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["localhost", "api-portfolio-rodrigonahid.herokuapp.com"],
  },
  i18n,
};

module.exports = nextConfig;
