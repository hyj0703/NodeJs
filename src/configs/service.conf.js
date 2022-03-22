import GetDemoList from '@handlers/GetDemoList'
import { createCors } from '@middlewares/Cors'

export default {
  // 服务驻留端口
  port: 8080,
  // 基础请求路径
  baseRoutePath: '/',
  // handler列表
  handlers: [GetDemoList],
  // 全局中间件列表
  middlewares: [createCors()],
  // 报文构造器
  messageStructure: [
    { key: 'code', tag: 'code' },
    { key: 'message', tag: 'message' },
    { key: 'data', tag: 'data' },
  ],
}
