// 应用环境
export const APP_ENV_DEVELOPMENT = 'dev'
export const APP_ENV_PRODUCTION = 'prod'
// 全局状态
export const APP_STATE_FIELD_KEY_ENV = 'APP_STATE_FIELD_KEY:ENV'
export const APP_STATE_FIELD_KEY_CONF = 'APP_STATE_FIELD_KEY:CONF'
export const APP_STATE_FIELD_KEY_CORE_LOGGER = 'APP_STATE_FIELD_KEY:CORE_LOGGER'
export const APP_STATE_FILED_KEY_SERVICE_CORE =
  'APP_STATE_FIELD_KEY:SERVICE_CORE'
export const APP_STATE_FIELD_KEY_MESSAGE_STRUCTOR =
  'APP_STATE_FIELD_KEY:MESSAGE_STRUCTOR'
export const APP_STATE_FIELD_KEY_HANDLER_LOGGER_CORE =
  'APP_STATE_FIELD_KEY:HANDLER_LOGGER_CORE'
// 状态中心
export const STATE_CENTER_ON_FIELD_CHANGE = 'STATE_CENTER_ON_FIELD_CHANGE'
export const STATE_CENTER_FIELD_CHANGE_TYPE = {
  APPEND: 'STATE_CENTER_FIELD_CHANGE_TYPE_APPEND',
  UPDATE: 'STATE_CENTER_FIELD_CHANGE_TYPE_UPDATE',
  REMOVE: 'STATE_CENTER_FIELD_CHANGE_TYPE_REMOVE',
}
// 返回码
export const RESPONSE_CODE = {
  OTHER: '6',
  LOGOUT: '9',
  SUCCESS: '0',
  FAILURE: '1',
}
// 日期格式
export const DATE_FORMAT_MILLISECOND = 'YYYY-MM-DD HH:mm:ss.SSS'
// Web沙箱
export const TOUTIAO_BYTED_ACRAWLER_COMMON_URL = 'https://www.toutiao.com/' // 今日头条网址
export const TOUTIAO_BYTED_ACRAWLER_FEED_URL =
  'https://www.toutiao.com/toutiao/api/pc/list/user/feed' // 博客列表请求头
export const TOUTIAO_BYTED_ACRAWLER_FOLLOWING_URL =
  'https://www.toutiao.com/toutiao/api/pc/user/following' // 关注列表请求头
export const WEBSANDBOX_EVENT_NAME_PAGE_LOADED =
  'WEBSANDBOX_EVENT_NAME_PAGE_LOADED'
export const BYTEDSANDBOX_EVENT_LOCATION_CHANGED =
  'BYTEDSANDBOX_EVENT_LOCATION_CHANGED'

// 今日头条接口请求类型枚举
export const TOUTIAO_REQUEST_TYPE_ENUM = {
  BLOG: 'https://www.toutiao.com/toutiao/api/pc/list/user/feed', // 博客列表接口请求头
  FOLLOWING: 'https://www.toutiao.com/toutiao/api/pc/user/following', // 关注列表接口请求头
  COMMENT: 'https://www.toutiao.com/article/v2/tab_comments', // 关注列表接口请求头
}
