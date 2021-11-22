const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  devServer: {
    // static: '/public',
    publicPath: '/build/',
    open: true,
    port: 8080,
    //compress: true,

    proxy: {
      '/': 'http://localhost:3000',
      // '/api': {
      //   target: 'http://localhost:3000',
      //   pathRewrite: { '^/api': '' },
      // },
    },
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: './client/index.html',
  //   }),
  // ],
};
// const path = require('path');

// module.exports = {
//   mode: process.env.NODE_ENV,
//   entry: './client/index.js',
//   //entry: ['babel-polyfill', './client/index.js'],
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   devServer: {
//     // DEV SAVES BUNDLE IN MEMORY RATHER THANK DISK, MORE EFFICIENT
//     publicPath: '/build/', // Removes 404 error for the route /build/bundle.js
//     compress: true,
//     port: 8080,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         pathRewrite: { '^/api': '' },
//       },
//     },
//     historyApiFallback: true,
//   },
//   // (?!(\/|\\)pdfjs-dist)
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   node: {
//     fs: 'empty',
//   },
// };
