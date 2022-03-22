const webpack = require('webpack')
const WebpckBuildConf = require('./webpack.prod.conf')

const plugins = [
  ...WebpckBuildConf.plugins,
  new webpack.DefinePlugin({ 'process.env.ENV_FLAG': JSON.stringify('FAT') }),
]

module.exports = {
  ...WebpckBuildConf,
  plugins,
}
