const path = require('path');
const webpack = require('webpack');
const DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = (...args) => ({
  entry: path.join(__dirname, '/src/index.tsx'),
  mode: args[1].mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: args[1].mode === 'production'
      ? 'react-social-plugins.min.js': 'react-social-plugins.js',
    path: path.join(__dirname, '/lib'),
    library: 'ReactSocialPlugin',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx'
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'react-social-plugins.js.map',
    }),
    new DeclarationBundlerPlugin({
      moduleName: "'react-social-plugins'",
      out: 'react-social-plugins.d.ts',
    }),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
});