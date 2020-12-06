const {
    CLIENT_STATIC_PORT,
    SERVER_PORT,
} = require('../../constants');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const package = require('../../package.json');


module.exports = (env, argv) => {
    const entry = ['./client/src/App.tsx'];

    return ({
        entry,
        mode: 'development',
        stats: {
            logging: 'error',
        },
        performance: {
            hints: false,
        },
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true,
                    },
                }],
                exclude: /node_modules/,
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    publicPath: '/',
                },
            }, {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        publicPath: '/fonts',
                    },
                }],
            }],
        },
        resolve: {
            alias: {
                clientSrc: path.resolve(__dirname, '../src'),
            },
            modules: ['node_modules'],
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: `client.${package.version}.[hash].js`,
            path: path.resolve(__dirname, '../build/client'),
            publicPath: '/',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                templateParameters: (_, outputParameters) => ({
                    jsBundle: `${outputParameters.js[0]}`,
                }),
                template: 'client/webpack/index.ejs',
                inject: false,
            }),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd(),
            }),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerPort: 3001,
            }),
        ],
        devServer: {
            port: CLIENT_STATIC_PORT,
            historyApiFallback: true,
            proxy: {
                '/api': {
                    target: ['http://localhost', SERVER_PORT].join(':'),
                    secure: false,
                },
            },
        },
        watch: true,
    });
};
