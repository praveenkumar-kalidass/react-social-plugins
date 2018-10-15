const HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    open: true,
    port: 3000
  },
  devtool: 'source-map',
  entry: path.join(__dirname, '../dev/app.jsx'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(jsx)$/u,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '../public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../public/index.html'),
      template: path.join(__dirname, '../dev/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};
