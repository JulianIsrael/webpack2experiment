const path = require('path');
const fs = require('fs');

const entries = {
    blade1: './src/tsx/index.tsx',
}
const externals = ['react', 'react-dom', 'mobx', 'mobx-react'];

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals
};