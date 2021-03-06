import {
  APP_STATE_FIELD_KEY_CONF,
  APP_STATE_FIELD_KEY_HANDLER_LOGGER_CORE,
  APP_STATE_FIELD_KEY_MESSAGE_STRUCTOR,
  RESPONSE_CODE,
} from '@constants/Macros'
import HandlerLogger from '@utils/HandlerLogger'
import StateCenter from '@utils/StateCenter'
import Core from 'node-corejs'
import path from 'path'

class BaseHandler extends Core.Handler {
  /**
   * Handler初始化
   * @override
   */
  initHandler(req, res, next) {
    // 准备请求基础数据
    const { method, baseUrl } = req
    const reqDirPath = path.dirname(baseUrl)
    const filePrefix = path.basename(baseUrl)
    const loggerCore = StateCenter.getState(
      APP_STATE_FIELD_KEY_HANDLER_LOGGER_CORE
    )
    const { baseLoggerConf, handlerLoggerConf } = StateCenter.getState(
      APP_STATE_FIELD_KEY_CONF
    )
    const { level } = handlerLoggerConf
    const { sourcePath } = baseLoggerConf

    // 获取报文解析/构造器并挂载至实例
    this.messageStructor = StateCenter.getState(
      APP_STATE_FIELD_KEY_MESSAGE_STRUCTOR
    )

    // 创建和启动链路日志输出器并挂载至实例
    this.logger = loggerCore.createGroupLogger(HandlerLogger, {
      level,
      params: {
        filePrefix,
        dateAsFileName: false,
        filePrefixAsFileName: false,
        fileName: `${method}-[%RANDOM_FILE_NAME%]`,
        sourcePath: path.join(sourcePath, reqDirPath),
      },
    })
    this.logger.start()
    next()
  }

  /**
   * Handler析构
   * @override
   */
  destroyHandler() {
    // 关闭日志输出器
    this.logger.close()
  }

  /**
   * 统一错误处理
   * @override
   */
  onError(error, req, res) {
    this.log(error)
    // 其余异常
    res
      .status(200)
      .send(this.buildFailureMessage(error.message, {}, RESPONSE_CODE.OTHER))
  }

  /**
   * 快捷日志输出
   * @param  {...any} args - 日志参数
   */
  log(...args) {
    this.logger && this.logger.log(...args)
  }

  preHandler(req, res, next) {
    const { query, body } = req
    this.logger.log(
      'i',
      '请求预处理',
      `请求query参数:[${JSON.stringify(query)}]`
    )
    this.logger.log('i', '请求预处理', `请求body参数:[${JSON.stringify(body)}]`)
    next()
  }

  /**
   * 构建成功报文
   * @param {String} message - 成功信息
   * @param {Any} [data = {}] - 成功附属数据
   */
  buildSuccessMessage(message, data = {}) {
    return this.messageStructor.buildMessage({
      data,
      message,
      code: RESPONSE_CODE.SUCCESS,
    })
  }

  /**
   * 构建失败报文
   * @param {String} message - 错误信息
   * @param {Any} [data = {}] - 失败附属信息
   * @param {String|Number} [code = RESPONSE_CODE.FAILURE] - 错误码
   */
  buildFailureMessage(message, data = {}, code = RESPONSE_CODE.FAILURE) {
    return this.messageStructor.buildMessage({
      data,
      message,
      code: `${code}`,
    })
  }
}

export default BaseHandler
