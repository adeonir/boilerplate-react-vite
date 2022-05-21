const { resolve } = require('path')

const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config, { configType }) => {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../.vite.config.js')
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
