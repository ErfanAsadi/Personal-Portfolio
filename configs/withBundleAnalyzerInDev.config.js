/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = (nextConfig) => {
  const isDev = process.env.NODE_ENV !== "development";
  if (isDev) {
    return withBundleAnalyzer(nextConfig);
  } else {
    return nextConfig;
  }
};
