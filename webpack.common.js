const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlMinify = {
  removeComments: true,
  preserveLineBreaks: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
};

const meta = {
  viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1'
};

module.exports = {
  entry: {
    main: './app/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      minify: {
        ...htmlMinify
      },
      meta,
      title: 'Покерные комбинации'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs')
  }
};
