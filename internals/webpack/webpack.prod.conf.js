const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const manifest = require('../../package.json')
const BuildConf = require('./build.conf')
const WebpackBaseConf = require('./webpack.base.conf')

// 元数据
const name = manifest.name
const version = manifest.version
const prodBuildConf = BuildConf.prod

// 基础配置
const mode = 'production'
const entry = { main: prodBuildConf.entry }
const target = prodBuildConf.target
const devtool = prodBuildConf.devTool

// 输出配置
const output = {
  path: target.path,
  filename: target.fileName,
}

// babel配置
const babelLoaderRule = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    cacheCompression: false,
    presets: [['@babel/preset-env', { targets: { node: target.node } }]],
  },
}

// 插件配置
const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      { from: 'src/static', to: 'static' },
      { from: 'package.json', to: 'package.json' },
    ],
  }),
  new webpack.BannerPlugin(`${name} V${version}\n\nPowered by Node-Corejs`),
]

module.exports = {
  ...WebpackBaseConf,
  mode,
  entry,
  output,
  devtool,
  plugins,
  module: {
    rules: [babelLoaderRule],
  },
}
