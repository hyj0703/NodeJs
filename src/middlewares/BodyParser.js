import bodyParser from 'body-parser'
import multer from 'multer'

/**
 * @description: 创建application/json格式body的解析中间件
 * @param {Object} configs - 配置项,详情参照body-parser文档
 */
export function createJsonParser(configs) {
  return bodyParser.json(configs)
}

/**
 * @description: 创建application/x-www-form-urlencoded格式body的解析中间件
 * @param {Object} configs - 配置项,详情参照body-parser文档
 */
export function createUrlencodeParser(configs) {
  return bodyParser.urlencoded(configs)
}

/**
 * @description: 创建multipart/form-data格式body的解析中间件
 * @param {Object} configs - 配置项,详情参照multer文档
 */
export function createMultipartyParser(configs) {
  return multer({ limits: configs }).any()
}
