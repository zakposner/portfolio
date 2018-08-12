const path = require('path');
const webpack = require('webpack');


// Paths
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src')
}


// Config
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

module.exports = {
    context: paths.src,
    entry: [
        'webpack/hot/dev-server',
        './index.js'
    ],
    output: {
        path: paths.dist,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: ['babel'],
                query: { 
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    plugins: [
        // Hot Module Stuff
        new webpack.HotModuleReplacementPlugin(),
        // Chunk vendor files
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
    ]
}