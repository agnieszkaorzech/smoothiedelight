/**
 * Created by Agnieszka on 20.02.2017.
 */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })
]
};
