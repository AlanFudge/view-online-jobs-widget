const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: "./public/index.html", favicon: './public/favicon.png' }),
    ],
    devServer: {
        open: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}