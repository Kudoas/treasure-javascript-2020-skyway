const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "docs"),
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
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
