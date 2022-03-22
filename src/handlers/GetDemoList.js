import DemoTaskResolver from '@modules/DemoTaskResolver'
import BaseHandler from '@utils/BaseHandler'
import WithRouter from './router'

class Handler extends BaseHandler {
  /**
   * 请求路径
   * @override
   */
  static getRoutePath() {
    return '/GetDemoList.do'
  }

  /**
   * POST处理
   * @override
   */
  async postHandler(req, res, next) {
    const demoTaskResolver = new DemoTaskResolver(this.logger)
    await demoTaskResolver.getDemo()

    next('end')
  }
}

export default WithRouter(Handler)
