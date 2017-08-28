/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(png|jpg|svg|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: '[hash].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        gifsicle: {
                            interlaced: false
                        },
                        optipng: {
                            optimizationLevel: 4
                        },
                        mozjpeg: {
                            progressive: true
                        }
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [HtmlWebpackPluginConfig]
}