const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

const dev = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:8000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});

module.exports = new Promise(resolve => {
  resolve(dev);
});
