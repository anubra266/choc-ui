var path = require("path");
module.exports = {
  env: {
    siteUrl: "https://choc-ui.vercel.app",
    githubUrl: "https://github.com/anubra266/choc-ui",
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
