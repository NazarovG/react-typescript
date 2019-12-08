const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./webpack.base.conf.js');

const prod = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
module.exports = new Promise(resolve => {
  resolve(prod);
});
