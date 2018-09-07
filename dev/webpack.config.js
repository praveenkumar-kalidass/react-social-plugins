const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'app.jsx'),
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '../public/index.html'),
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        open: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-react'
                        ],
                        plugins: [
                            'transform-class-properties'
                        ]
                    }
                }
            }
        ]
    }
};
