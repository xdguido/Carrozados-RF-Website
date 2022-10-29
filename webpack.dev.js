const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "campers.html",
      template: "src/campers.html",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "motorhome.html",
      template: "src/motorhome.html",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "taller.html",
      template: "src/taller.html",
    }),
  ],
});
