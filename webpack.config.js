const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: {
          appendTsSuffixTo: [/.vue$/],
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        message: "you have successfully running here http://localhost:3000",
      },
    }),
  ],
  optimization: {
    // splitChunks: { chunks: "all" },
  },
  devServer: {
    host: "localhost",
    port: "3000",
    open: false,
  },
};
