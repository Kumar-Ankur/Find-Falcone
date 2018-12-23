const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const htmlPlugin = new HtmlWebPackPlugin({
    template: 'public/index.html',
    filename: 'index.html'
});

const BundleAnalyze = new WebpackBundleAnalyzer({
    generateStatsFile: true,
    analyzerMode: 'disabled'
})

/**
 * Webpack Configuration
 */

module.exports = {

    /**
     * webpack 4 there is no need to define the entry point: it will take ./src/index.js as the default!
     */
    entry : {
        main: './src/index.js',
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[id].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".otf", ".png",".ico"]
      },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]___[hash:base64:5]',
                            sourceMap: true,
                            url: false
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|gif|jpg|ico)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [htmlPlugin, BundleAnalyze]
}