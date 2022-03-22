const { Sequelize } = require('sequelize')
const { MYSQL_CONFIG } = require('../configs/db.conf')

const { user, password, host, port, database } = MYSQL_CONFIG || {}

const config = {
  dialect: 'mysql', // 指定数据库类型
  host, // 主机
  port, // 端口
  logging: false, // 在控制台显示sql语句
  pool: {
    max: 100, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 60000, // 如果一个连接池30s内没有被使用，则释放
  },
  timezone: '+08:00', // 时区
  define: {
    timestamps: true, // 是否添加createdAt/updatedAt字段
    paranoid: true, // 软删除, 从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间, paranoid 属性只在启用 timestamps 时适用
    underscored: true, // 不使用驼峰式命令规则，这样会在使用下划线分隔, 这样 updatedAt 的字段名会是 updated_at
    freezeTableName: true, // 锁定表名
    createdAt: 'createdTime', // 创建时间
    updatedAt: 'updatedTime', // 更新时间
    deletedAt: 'deletedTime', // 删除时间
    scopes: {
      // 查询出来，不包含这3个字段
      bh: {
        // 任意命名
        attributes: {
          exclude: ['createdTime', 'updatedTime', 'deletedTime'],
        },
      },
    },
    charset: 'utf8mb4',
  },
  dialectOptions: {
    charset: 'utf8mb4',
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
}

// 线上环境，使用连接池
if (process.env.NODE_ENV !== 'development') {
  config.pool = {
    max: 20, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 30000, // 如果一个连接池10s内没有被使用，则释放
  }
}
const sequelize = new Sequelize(database, user, password, config)

module.exports = {
  sequelize,
}
