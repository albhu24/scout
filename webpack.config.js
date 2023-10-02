// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: process.env.NODE_ENV,
//   entry: "./client/index.js",
//   output: {
//     path: path.join(__dirname, "/build"),
//     filename: "bundle.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "App",
//       template: "index.html",
//       filename: "index.html",
//       chunks: ["index"],
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.scss$/,
//         exclude: /node_modules/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       { test: /\.svg$/, use: ["svg-url-loader"] },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, "build"),
//       publicPath: "/build",
//     },
//     proxy: [
//       {
//         context: ["/test", "/login", "/listing"],
//         target: "http://localhost:3000",
//       },
//     ],
//   },
//   resolve: {
//     // Enable importing JS / JSX files without specifying their extension
//     extensions: [".js", ".jsx"],
//   },
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Development", template: "index.html" }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      { test: /\.svg$/, use: ["svg-url-loader"] },
      {
        test: /\.(jpg|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
      publicPath: "/build",
    },
    proxy: [
      {
        context: ["/images", "/signup", "/login", "/listing"],
        target: "http://localhost:3000",
      },
    ],
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx"],
  },
};
