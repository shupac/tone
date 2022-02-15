module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            comp: './src/components',
            navigators: './src/navigators',
            screens: './src/screens',
            state: './src/state',
            api: './src/api',
            utils: './src/utils',
            assets: './assets',
          },
        },
      ],
    ],
  }
}
