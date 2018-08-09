const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve('src'),
  app: path.resolve('src/app'),
  indexJS: path.resolve('src/index.js'),
  indexHTML: path.resolve('src/index.html'),
  assets: path.resolve('src/assets'),
  constants: path.resolve('src/app/constants'),
  utils: path.resolve('src/app/utils'),
  actionCreators: path.resolve('src/app/action-creators'),
  containers: path.resolve('src/app/containers'),
  components: path.resolve('src/app/components'),
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
      assets: paths.assets,
      constants: paths.constants,
      utils: paths.utils,
      containers: paths.containers,
      components: paths.components,
      'action-creators': paths.actionCreators
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
        test: /\.(png|jpg|svg|gif)$/i,
        exclude: path.resolve(paths.assets, 'fonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: path.resolve(paths.assets, 'images'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
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
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[local]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.dist,
    historyApiFallback: true,
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