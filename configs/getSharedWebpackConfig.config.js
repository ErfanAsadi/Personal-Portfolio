/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (config) => {
  // * resolve rules
  const defaultResolvePlugins = config.resolve.plugins && [];
  const customResolvePlugins = [new TsconfigPathsPlugin()];
  config.resolve.plugins = [...defaultResolvePlugins, ...customResolvePlugins];

  // * Resolve aliases
  const customAlias = {};
  config.resolve.alias = {
    ...config.resolve.alias,
    ...customAlias,
  };

  // * Plugins
  const plugins = [];
  if (config.plugins) {
    config.plugins.push(...plugins);
  } else {
    config.plugins = [...plugins];
  }

  const rules = config.module.rules;

  if (Array.isArray(rules)) {
    config.module.rules = rules.filter((rule) => !rule.test?.test(".svg"));
  }

  config.module.rules.unshift({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
