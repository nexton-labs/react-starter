const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// Comment this out whenever bundle analyzer is needed:
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: ["./app/index.jsx"],
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dist"] }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      logo: "./src/favicon.gif"
    }),
    new webpack.ProvidePlugin({
      errorService: "errorService"
    }),
    // Comment this out whenever bundle analyzer is needed:
    // new BundleAnalyzerPlugin(),
    new FaviconsWebpackPlugin({
      logo: "./app/favicon.png",
      cache: true,
      favicons: {
        appName: "starter V2",
        appDescription: "Software Boutique",
        developerName: "nextonlabs.com",
        developerURL: "http://www.nextonlabs.com/",
        background: "#3e3f3a",
        theme_color: "#3e3f3a",
        icons: {
          coast: false,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      errorService: path.resolve(__dirname, "./app/utils/errorService")
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        use: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  }
};
