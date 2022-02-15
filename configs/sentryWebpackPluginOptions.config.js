module.exports.sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs,
  org: "farapak",
  project: "imanebula",
  authToken: "27cd5a6a310c4b3aa23cb69b375b39e5a3b7a7c880cc47098be4e2170171112a",
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};
