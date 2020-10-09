const path = require('path')
const webpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const { createDefaultConfig } = require('@open-wc/building-webpack')

const IS_DEV = process.env.NODE_ENV === 'development'

const config = createDefaultConfig({
  input: path.resolve(__dirname, './index.html'),
})

module.exports = merge(config, {
  output: {
    path: path.resolve(__dirname, '../_site'),
    filename: '[name].[hash:7].bundle.js',
    chunkFilename: '[name]:[hash].js'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpackBar()
  ]
})
