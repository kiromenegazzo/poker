const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.LoaderOptionsPlugin({options: {}}),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ],
  },
  mode: 'production'
});
