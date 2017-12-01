const webpack = require("webpack");
const path = require("path");

const getConfig = production => ({
  entry: "./assets/js/global.js",
  output: {
    path: path.join(process.cwd(), "web/js"),
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
