var path = require("path");
module.exports = {
  env: {
    siteUrl: "https://choc-ui.tech",
    githubRepo: "anubra266/choc-ui",
    githubChoc: "https://github.com/anubra266/choc-ui",
    githubUrl: "https://github.com/anubra266",
    twitterUrl: "https://twitter.com/anubra266",
    linkedinUrl: "https://linkedin.com/in/anubra266",
    emailAddress: "anubra266@gmail.com",
  },
  webpack: (config, options) => {
    const custom_alias = {
      "~": path.resolve("./"),
      "@": path.resolve("./components/codes"),
    };
    var aliases = config.resolve.alias;

    aliases = { ...aliases, custom_alias };

    return config;
  },
};
