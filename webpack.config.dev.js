const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve('src'),
  app: path.resolve('src/app'),
  indexJS: path.resolve('src/index.js'),
  indexHTML: path.resolve('src/index.html'),
  assets: path.resolve('src/assets'),
  dist: path.resolve(__dirname, 'dist')
};

const config = {
  mode: 'development',
  entry: paths.indexJS,
  output: {
    path: paths.dist,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [ 'node_modules', paths.src, paths.app ],
    alias: {
      assets: paths.assets
    }
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
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