const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '/src/index.js'),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    }
});