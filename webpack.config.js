const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';

if (process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    plugins :[new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [path.resolve(__dirname, './src/'), 'node_modules']
    },

    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist")
        },
    }
}
