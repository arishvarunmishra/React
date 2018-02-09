/**
 * Created by varun on 14/9/17.
 */

const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
 	    contentBase: path.join(__dirname, "./dist"),
        port: 9000,
        historyApiFallback:true,
        inline: true
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};

