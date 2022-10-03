const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {index: '/'},
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.name': JSON.stringify('Vishwas'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
}