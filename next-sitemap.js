module.exports = {
  siteUrl: process.env.SITE_URL || "localhost:3000",
  generateRobotsTxt: true, // (optional)
  alternateRefs: [
    {
      href: "https://www.rodrigonahid.com.br/en",
      hreflang: "es",
    },
    {
      href: "https://www.rodrigonahid.com.br",
      hreflang: "pt-BR",
    },
  ],
};
