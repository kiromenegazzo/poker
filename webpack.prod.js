const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('./styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        //use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ],
  },
  mode: 'production'
});
