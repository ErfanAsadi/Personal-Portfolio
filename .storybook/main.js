const getStorybookWebpackConfig = require("../configs/getStorybookWebpack.config");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-react-i18next",
    "themeprovider-storybook/register",
  ],
  framework: "@storybook/react",
  typescript: {
    // the storybook's native version of fork ts checker is old so we use our own (it will be updated on storybook 7)
    check: false,
  },
  webpackFinal: getStorybookWebpackConfig,
};
