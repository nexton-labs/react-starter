const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
});
