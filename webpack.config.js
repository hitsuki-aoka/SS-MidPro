const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'compiled.js',
        path: path.join(__dirname,'./public/'),
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img/"
                    },
                    loader: "file-loader"
                }]
            }, 
            { test: /\.css$/, use: ['style-loader', 'css-loader'], },
                
        ]

    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), // automatically compile when files change
        new webpack.ProvidePlugin({ // automatically import package
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    mode: 'development',
    devServer: {
        static: "./public/",
        hot: true,
        compress: true,
        host: 'localhost',
        port: 8080
    },
};