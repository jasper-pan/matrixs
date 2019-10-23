const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        main: './demo/src/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist'),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'demo')
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
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'demo')
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
            template: path.join(__dirname, "./demo/index.html"),
            filename: './index.html'
        }),

    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    }
}