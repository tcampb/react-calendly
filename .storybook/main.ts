module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs"
  ],
  stories: ['../src/**/*.stories.@(tsx|mdx)']
};
