const nodemon = require('nodemon')
const BuildConf = require('../webpack/build.conf')

// 元数据
const target = BuildConf.dev.target

// 彩色log方法
const log = (content) => console.log(`\x1B[33m${content}\x1B[39m`)

// 启动构建监听
const watchPath = target.path
const scriptPath = target.fileName
process.chdir(watchPath)
nodemon(`--watch ${watchPath} ${scriptPath}`)
nodemon.on('start', () => {
  log('\nApplication will load...\n')
})
