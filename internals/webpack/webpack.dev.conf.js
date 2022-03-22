const path = require('path')
const notifier = require('node-notifier')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackBaseConf = require('./webpack.base.conf')
const BuildConf = require('./build.conf')

// 元数据
const devBuildConf = BuildConf.dev

// 基础配置
const mode = 'development'
const target = devBuildConf.target
const devtool = devBuildConf.devTool
const entry = { main: devBuildConf.entry }

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
  // 构建前自动进行清理
  new CleanWebpackPlugin(),
  // 复制静态资源
  new CopyWebpackPlugin({
    patterns: [
      { from: 'src/static', to: 'static' },
      { from: 'package.json', to: 'package.json' },
    ],
  }),
  // 构建状态美化插件
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      notes: [],
      messages: ['Run "npm run dev" to start and reload application!\n'],
    },
    onErrors(severity, errors) {
      if (severity !== 'error') {
        return
      }
      // 当构建失败时使用notifier进行系统提示
      const { file, name } = JSON.parse(JSON.stringify(errors[0])) || {}
      const filename = file && file.split('!').pop()
      notifier.notify({
        title: 'ColinCli For Node-Corejs',
        message: `${severity}: ${name}`,
        subtitle: filename || '',
        icon: path.join(process.cwd(), './internals/webpack/logo.png'),
      })
    },
  }),
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
  watch: true,
  stats: 'errors-only',
}
