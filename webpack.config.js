'use strict'

const BundleTracker = require('webpack-bundle-tracker')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './build/client'),
    filename: '[name].[contenthash:4].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/src/index.html')
    }),
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `modules_${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
}
