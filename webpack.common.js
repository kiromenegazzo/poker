const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    }),

  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};
