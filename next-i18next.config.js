/* eslint-disable @typescript-eslint/no-var-requires */
// TODO: move to a config folder
const configConstants = require("./configs/constants.config");
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: configConstants.i18nConstants.defaultLocale,
    locales: configConstants.i18nConstants.locales,
    localePath: path.resolve("./public/locales"),
  },
};
