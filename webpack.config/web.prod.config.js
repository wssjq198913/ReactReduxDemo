var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var myPlugins = [
    new htmlWebpackPlugin({
        template: '!!raw-loader!index.ejs',
        inject: 'head',
        filename: 'index.ejs',
        alwaysWriteToDisk: true
    }),
    new htmlWebpackHarddiskPlugin(),
    new extractTextPlugin({
        filename: 'assets/css/[name].[hash].css',
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // pack all common packages from app & vendor and name it as verdor.[chunkhash].js.
    // Since we defined packages in vendor, so common packages are exactly the same as verndor.
    // then the packages in app will be moved out.

    // manifest is used to split runtime codes of webpack from vendor.js into manifest.js to make sure hash of vendor.js is not changed.
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] })
];


module.exports = {
    entry: {
        // app: '',
        vendor: ['babel-polyfill']
    },

    output: {
        // chunk hash is to resolve browser cache issue.
        // e.g. javascript content is changed, but new change doesn't take effect, this is becuase browser caches javascript.
        // if we add a hash into filename, this is will be resolved since everytime you make any change, hash changes which means file name changes.
        path: path.resolve('./dist'),
        filename: 'assets/js/[name].[chunkhash:8].js',
        chunkFilename: 'assets/js/[id].[chunkhash:8].js',

        // deploy static files into server(IIS, CDN), then we need to set publicPath.
        // in this demo, they'er deployed to IIS.
        // publicPath: 'http://localhost/'
    },

    devtool: false,

    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=stage-3,plugins[]=dynamic-import-webpack' },
            { test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/, loader: ['url-loader', 'img-loader'] },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }]
                })
            }
        ]
    },

    plugins: myPlugins
}