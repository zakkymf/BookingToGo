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
          '@base': './src/app/shared/base',
          '@utils': './src/app/shared/utils',
          '@constants': './src/app/shared/constants',
          '@libraries': './src/app/shared/libraries',
          '@features': './src/features',
          '@src': './src',
        },
      },
    ],
  ],
};
