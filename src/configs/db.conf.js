let MYSQL_CONFIG
let REDIS_CONFIG

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'JDTrendWordDB',
  }
  REDIS_CONFIG = {
    host: '127.0.0.1',
    prot: '6379',
  }
} else {
  // 生产环境
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'JDTrendWordDB',
  }
  REDIS_CONFIG = {
    host: '127.0.0.1',
    prot: '6379',
  }
}
module.exports = {
  MYSQL_CONFIG,
  REDIS_CONFIG,
}
