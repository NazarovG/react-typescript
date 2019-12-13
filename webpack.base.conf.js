const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@actions': path.resolve(__dirname, 'src/actions/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@selectors': path.resolve(__dirname, 'src/selectors/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: isDevelopment },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: path.resolve(__dirname, 'src'),
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: path.resolve(__dirname, 'src'),
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              context: path.resolve(__dirname, 'src'),
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 8,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/static/'),
        to: path.resolve(__dirname, 'dist/'),
      },
      {
        from: path.resolve(__dirname, 'src/assets/fonts/'),
        to: path.resolve(__dirname, 'dist/assets/fonts/'),
      },
      {
        from: path.resolve(__dirname, 'src/assets/img/'),
        to: path.resolve(__dirname, 'dist/assets/img/'),
      },
    ]),
  ],
};
