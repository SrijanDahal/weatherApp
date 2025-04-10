const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true, 
    },

    plugins: [
        new htmlwebpackplugin ({
            template: './src/template.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                type: "javascript/auto", // or use "javascript/esm"
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}