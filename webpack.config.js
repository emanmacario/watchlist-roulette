const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/[^antd]/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',  // Translates CSS into CommonJS
        }, {
          loader: 'less-loader', // Compiles Less to CSS
          options: {
            lessOptions: {
              modifyVars: getThemeVariables({
                dark: true,
                compact: false,
              }),
              javascriptEnabled: true,
            },
          },
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv()
  ],
  node: {
    fs: "empty"
 }
}