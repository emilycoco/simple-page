var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/scripts/index.js',
    output: {
        path: path.resolve(__dirname, BUILD_DIR),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    stylus: {
        use: [require('jeet')()]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.json', '.js', '.jsx', '.css', '.styl']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader',
                exclude: /node_modules/
            }
        ]
    }
};


module.exports = config;