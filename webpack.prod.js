const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
