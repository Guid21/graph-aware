const path = require('path');
const { override, addWebpackAlias, fixBabelImports } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@scenes']: path.resolve(__dirname, './src/scenes'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@store']: path.resolve(__dirname, './src/store'),
  })
);
