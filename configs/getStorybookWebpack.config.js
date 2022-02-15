/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const getSharedWebpackConfig = require("./getSharedWebpackConfig.config");
const path = require("path");

module.exports = (config) => {
  const newConfig = getSharedWebpackConfig(config);

  // * add other configs here:
  newConfig.module.rules = newConfig.module.rules.filter(
    (f) => f.test.toString() !== "/\\.css$/"
  );

  newConfig.module.rules.push(
    {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("babel-loader"),
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      use: ["url-loader"],
    }
  );

  // todo: remove this after fixing this bug: https://github.com/storybookjs/storybook/issues/13277

  const emotionReactEleven = path.dirname(
    require.resolve("@emotion/react/package.json")
  );
  const emotionStyledEleven = path.dirname(
    require.resolve("@emotion/styled/package.json")
  );

  newConfig.resolve.alias = {
    ...newConfig.resolve.alias,
    "@emotion/core": emotionReactEleven,
    "@emotion/styled": emotionStyledEleven,
    "emotion-theming": emotionReactEleven,
    "next-i18next": "react-i18next",
  };

  newConfig.resolve.extensions.push(".ts", ".tsx");

  newConfig.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      logger: {
        infrastructure: "silent",
        issues: "webpack-infrastructure",
      },
      typescript: {
        enabled: true,
        mode: "write-references",
        diagnosticOptions: {
          syntactic: true,
          semantic: true,
        },
      },
      eslint: {
        enabled: false,
        files: ["./src/**/*.{ts, tsx, js, jsx, json}"],
      },
    })
  );

  return newConfig;
};
