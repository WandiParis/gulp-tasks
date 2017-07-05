const webpack = require("webpack");
const path = require("path");

const getConfig = ({ production, rootDir }) => ({
  entry: "./assets/js/global.js",
  output: {
    path: path.join(rootDir, "web", "js"),
    filename: "global.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [].concat(
    production
      ? [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })]
      : []
  )
});

module.exports = getConfig;
