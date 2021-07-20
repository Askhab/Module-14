const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  devServer: {
    // constentBase: path.join(__dirname, 'build'),
    // open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Button App',
    }),
    new MiniCssExtractPlugin({
      filename: 'build.css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
    ],
  },
};