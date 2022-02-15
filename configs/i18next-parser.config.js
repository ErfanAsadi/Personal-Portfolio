/* eslint-disable @typescript-eslint/no-var-requires */
const { i18nConstants } = require("./constants.config");

module.exports = {
  lexers: {
    htm: ["HTMLLexer"],
    html: ["HTMLLexer"],
    js: ["JavascriptLexer"],
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],
    default: ["JavascriptLexer"],
  },

  keepRemoved: false,
  createOldCatalogs: false,
  defaultNamespace: i18nConstants.defaultNamespace,
  locales: i18nConstants.locales,
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["../pages/**/*.{ts,tsx}", "../components/**/*.{ts,tsx}"],
  useKeysAsDefaultValue: true,
  namespaceSeparator: ":",
  verbose: false,
};
