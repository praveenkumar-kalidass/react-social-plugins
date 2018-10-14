const path = require('path');

module.exports = (...args) => ({
  entry: path.join(__dirname, '../src/index.jsx'),
  mode: args[1].mode,
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
              'transform-class-properties'
            ],
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: args[1].mode === 'production'
      ? 'react-social-plugins.min.js': 'react-social-plugins.js',
    path: path.join(__dirname, '../lib'),
    library: 'ReactSocialPlugins',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
});
