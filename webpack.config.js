const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build.css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
    ],
  },
};