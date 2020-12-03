const nodeExternals = require('webpack-node-externals');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { version } = require('../package.json');


module.exports = {
    entry: [path.resolve(__dirname, './src/index.ts')],
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    stats: {
        logging: 'error',
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true,
                    },
                }],
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './server/src'),
        },
        modules: ['node_modules'],
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: `server.${version}.[hash].js`,
        path: path.resolve(__dirname, '../build/server'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
