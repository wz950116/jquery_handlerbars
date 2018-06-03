var path = require('path');
var webpack = require("webpack");
var glob = require('glob');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

var getEntry = function() {
    var entry = {};
    glob.sync(__dirname + '/src/channel/*.js').forEach(function(name) {
        var n = name.slice(name.lastIndexOf('channel/') + 8, name.length - 3);
        entry[n] = name;
    });
    glob.sync(__dirname + '/src/module-test/*.js').forEach(function(name) {
        var n = name.slice(name.lastIndexOf('module-test/') + 12, name.length - 3);
        entry[n] = name;
    });
    return entry;
}

module.exports = {
    entry: getEntry(),
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.hbs', '.json'],
        alias: {
            'apis': path.resolve(__dirname, './src/apis'),
            'template': path.resolve(__dirname, './src/template'),
            'tools': path.resolve(__dirname, './src/tools')
        }
    },
    module: {
        loaders: [{
            test: /\.hbs$/,
            loader: "handlebars-template-loader",
            query: {
                prependFilenameComment: __dirname
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src')
        }]
    },
    // 本地服务器配置
    devServer: {
        contentBase: './test',
        historyApiFallback: true,
        inline: true,
        port: 4001
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new FriendlyErrorsPlugin()
    ]
}
