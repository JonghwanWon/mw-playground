module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-backgrounds"
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]]
          }
        },
        require.resolve("react-docgen-typescript-loader")
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
