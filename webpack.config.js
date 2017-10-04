var webpack = require('webpack');
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        './src/index.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    }, plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
            {test: /(\.css$)/, loaders: ['style-loader', 'css-loader']},
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'react-native-web-image-loader?name=[hash].[ext]'
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
