module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/shared/assets',
          '@components': './src/shared/components',
          '@config': './src/shared/config',
          '@core': './src/shared/core',
          '@theme': './src/shared/theme',
          '@base': './src/shared/base',
          '@utils': './src/shared/utils',
          '@constants': './src/shared/constants',
          '@libraries': './src/shared/libraries',
          '@features': './src/features',
        },
      },
    ],
  ],
};
