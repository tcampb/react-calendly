const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybook/tsconfig.json",
          transpileOnly: true,
          silent: true,
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", `.tsx`);
  config.plugins.push(new TSDocgenPlugin());

  return config;
};
