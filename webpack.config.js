const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    port: "3030",
    hot: true,
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|png|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
