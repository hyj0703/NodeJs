const child_process = require('child_process')
const BuildConf = require('../webpack/build.conf')

// 元数据
const target = BuildConf.dev.target
process.chdir(target.path)
child_process.fork(target.fileName)
