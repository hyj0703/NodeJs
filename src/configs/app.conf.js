import { APP_ENV_DEVELOPMENT, APP_ENV_PRODUCTION } from '@constants/Macros'
import os from 'os'
import path from 'path'

// 创建基础配置信息
const execPath = process.cwd()
const env =
  process.env.NODE_ENV === 'development'
    ? APP_ENV_DEVELOPMENT
    : APP_ENV_PRODUCTION

// 生成App配置
export default ({ processId }) =>
  ({
    // dev环境配置
    [APP_ENV_DEVELOPMENT]: {
      // 进程ID
      processId,
      // 运行环境
      env: APP_ENV_DEVELOPMENT,
      // Worker进程数量
      workerNum: 1,
      // handler日志配置
      handlerLoggerConf: { level: 'all' },
      // 日志收集基础配置
      baseLoggerConf: {
        level: 'all',
        maxSize: 0,
        keepDateNum: 0,
        dateFormat: 'YYYY-MM-DD',
        sourcePath: path.resolve(execPath, `./static/logs/${processId}`),
      },
      // 静态路径
      staticPathConf: {
        resourcesPath: path.resolve(execPath, './static/resources'),
      },
    },
    // prod环境配置
    [APP_ENV_PRODUCTION]: {
      // 进程ID
      processId,
      // 运行环境
      env: APP_ENV_PRODUCTION,
      // Worker进程数量
      workerNum: os.cpus().length,
      // handler日志配置
      handlerLoggerConf: { level: 'infos' },
      // 日志收集基础配置
      baseLoggerConf: {
        level: 'error',
        maxSize: 10 * 1024 * 1024,
        keepDateNum: 7,
        dateFormat: 'YYYY-MM-DD',
        sourcePath: `/opt/service/logs/${processId}`,
      },
      // 静态路径
      staticPathConf: {
        resourcesPath: path.resolve(execPath, './static/resources'),
      },
    },
  }[env])
