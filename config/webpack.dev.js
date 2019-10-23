const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./lib'),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                    },

                ],
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    },

                ],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
            },
            {
                test: /\.less$/,
                use:[ 'style-loader','css-loader','less-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html'
        }),

    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    }
}