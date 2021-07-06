const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',

  entry: {
    main: './src/js/button.js'
  },
  
  devServer: {
    contentBase: './build',
  },
  
  plugins: [
    // new MiniCssExtractPlugin({template: './build/build.css'}),
    new HtmlWebpackPlugin({
      title: 'Button',
      template: './build/index.html',
    }),
  ],
  
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", },
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};