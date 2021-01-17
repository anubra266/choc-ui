var path = require("path");
module.exports = {
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
