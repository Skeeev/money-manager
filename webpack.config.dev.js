const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: './src',
  indexJS: path.resolve('./src', 'index.js'),
  indexHTML: path.resolve('./src', 'index.html'),
  dist: path.resolve(__dirname, 'dist')
};

const config = {
  mode: 'development',
  entry: paths.indexJS,
  output: {
    path: paths.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.dist,
    compress: true,
    watchContentBase: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.indexHTML
    })
  ]
};

module.exports = config;