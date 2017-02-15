var path = require('path');
var webpack = require("webpack");

module.exports = [
    {
        entry: path.join(__dirname, "src", "library", "parser.js"),
        output: {
            path: path.join(__dirname, "lib"),
            filename: "index.js",
            library: 'apng-js',
            libraryTarget: 'umd'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /[\\\/](node_modules|lib)[\\\/]/
                }
            ]
        }
    },
    {
        entry: path.join(__dirname, "src", "library", "parser.js"),
        output: {
            path: path.join(__dirname, "lib"),
            filename: "index.js"
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /[\\\/](node_modules|lib)[\\\/]/
                },
                {
                    test: /\.css$/,
                    exclude: /[\\\/](node_modules|lib)[\\\/]/,
                    loader: 'style-loader!css-loader'
                }
            ]
        }/*,
     plugins: [
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false,
     screw_ie8: true
     },
     comments: false
     })
     ]*/
    }
];