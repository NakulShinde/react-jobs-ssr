const path = require('path');

module.exports = {
    entry: {
        client_bundle: './src/client_bundle.js',
        server_bundle: './src/server_bundle.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|public)/,
                loader: "babel-loader"
            }
        ]
    }

}
