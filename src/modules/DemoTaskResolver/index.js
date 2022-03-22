import { RED_BOOK_REQUEST_DOMAIN } from '@constants/Common'
import { APP_STATE_FIELD_KEY_CONF } from '@constants/Macros'
import Contents from '@db/models/Contents'
import StateCenter from '@utils/StateCenter'
import Core from 'node-corejs'
import { default as superagent } from 'superagent'

const crypto = require('crypto')

class DemoTaskResolver {
  constructor(logger) {
    this.totalNum = 0 // 获取到的总数据量
    this.headers = {
      Authorization: 'wxmp.1765eec4-a0e3-44eb-a750-4174d1824965', // 用户的登陆信息
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800102b) NetType/WIFI Language/zh_CN',
    }

    this.logger = logger
    const { env, baseLoggerConf } = StateCenter.getState(
      APP_STATE_FIELD_KEY_CONF
    )
    const { sourcePath, dateFormat, keepDateNum } = baseLoggerConf

    // 创建基础属性
    this.isNeedClearWorkspace = false
    this.logger = new Core.FileLogger({
      env,
      params: {
        sourcePath,
        dateFormat,
        keepDateNum,
      },
    })
    // 启动日志输出器
    this.logger.start()
  }

  /**
   * 公共请求处理方法
   *
   * @param {*} RPCURL2 请求具体api结构
   * @param {*} failCallBack 请求失败的回调
   * @returns
   * @memberof RedbookTaskResolver
   */
  async commonHttpProcess({ RPCURL2, failCallBack }) {
    let error = null
    // 发起RPC（Remote Procedure Call，远程过程调用）
    const RPCURL1 = RED_BOOK_REQUEST_DOMAIN
    const RPCURL = `${RPCURL1}${RPCURL2}`
    const hash = crypto.createHash('md5')
    hash.update(`${RPCURL2}WSUDD`)
    const XSign = hash.digest('hex')
    const response = await superagent
      .get(RPCURL)
      .set({ ...this.headers, 'X-Sign': `X${XSign}` })
      .catch((err) => {
        error = err
        this.logger.log('e', `RPC调用失败:【${error.message}】`)
        return null
      })

    // 处理RPC失败场景
    if (!response) {
      this.logger.log('e', `RPC调用失败，失败状态码为:【${error.status}】`)
      if (error.status === 461) {
        this.logger.log(
          'e',
          'RPC调用失败:------滑块出现，快去滑手机------滑块出现，快去滑手机------'
        )
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 20000)
        }).then(failCallBack)
      } else if (error.status === 500) {
        this.logger.log(
          'e',
          'RPC调用失败:------请求太频繁啦，休息一下------请求太频繁啦，休息一下------'
        )
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 20000)
        }).then(failCallBack)
      }
      return { result: false, error }
    }

    // 当RPC成功时解析结果
    const result = JSON.parse(response.text || '')
    return { result }
  }

  /**
   * 获取
   *
   * @memberof
   */
  async getDemo(pageIndex = 0) {
    const { contentList: contentDescs } = await Contents.getContentList(
      pageIndex,
      800
    )
    if (contentDescs && contentDescs.length) {
      console.log('contentDescs', contentDescs)
    }
  }
}

export default DemoTaskResolver
