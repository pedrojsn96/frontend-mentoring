const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        publicPath: 'http://localhost:3000/',
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'public/index.html'
        }),
    ]
};