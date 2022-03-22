import {
  createJsonParser,
  createUrlencodeParser,
} from '@middlewares/BodyParser'
import { createRouter } from '@utils/RouterManager'

const middlewareConfigs = {
  limit: '2mb',
  extended: true,
}

const routerConf = {
  // 设置路由基础路径
  routePath: '/Demo',
  // 设置路由中间件列表
  middlewares: [
    createJsonParser(middlewareConfigs),
    createUrlencodeParser(middlewareConfigs),
  ],
}

export default createRouter(routerConf.routePath, routerConf.middlewares)
