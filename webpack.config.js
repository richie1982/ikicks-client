const path = require('path')
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node-modules/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    devServer: {
        contentBase: './public',
        port: 3030
    }
}