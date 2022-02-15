/* eslint-disable @typescript-eslint/no-var-requires */

const getSharedWebpackConfig = require("./getSharedWebpackConfig.config");

module.exports = (config) => {
  const newConfig = getSharedWebpackConfig(config);
  // * add other configs here:

  return newConfig;
};
