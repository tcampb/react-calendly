module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register"
  ],
  stories: ['../src/**/*.stories.@(tsx|mdx)']
};
