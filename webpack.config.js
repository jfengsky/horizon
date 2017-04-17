const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
}