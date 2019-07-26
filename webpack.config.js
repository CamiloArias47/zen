const path = require('path');

module.exports = {
    entry: './src/views/index.js',
    output: {
        path: path.join(__dirname,'src','public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    }
};