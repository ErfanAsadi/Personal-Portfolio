/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");
const {
  sentryWebpackPluginOptions,
} = require("./configs/sentryWebpackPluginOptions.config");
const getNextWebpackConfig = require("./configs/getNextjsWebpack.config");
const withBundleAnalyzerInDev = require("./configs/withBundleAnalyzerInDev.config");
const nextEnvs = require("./configs/nextEnvs.config");

const moduleExports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: [nextEnvs.CMS_ADDRESS, "localhost"],
  },
  env: nextEnvs,
  productionBrowserSourceMap: true,
  webpack: getNextWebpackConfig,
};

module.exports = withSentryConfig(
  withBundleAnalyzerInDev(moduleExports),
  sentryWebpackPluginOptions
);
