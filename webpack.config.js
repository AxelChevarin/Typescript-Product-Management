"use strict";

var path = require('path');


module.exports = {
    entry: "./Controleur/Index.ts",

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        libraryTarget: "var",
        library: "Action"
    },
    resolve: {
        extensions: [".js", ".ts", ".html"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader!ts-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }
        ]
    }
};