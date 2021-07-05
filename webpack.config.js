const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',

  entry: {
    main: './src/js/button.js'
  },

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",

          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
        ],
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          option: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};