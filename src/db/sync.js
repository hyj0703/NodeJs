const { sequelize } = require('./sequelize')
const { TrendWord, Articles, Contents } = require('./models')
// const { TrendWord } = require('./models');

require('./models') // 引入模型

// 测试链接
sequelize
  .authenticate()
  .then(() => {
    console.log('auth ok')
  })
  .catch(() => {
    console.log('auth err')
  })

// 执行同步
// User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
// User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
// User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
// sequelize // 自动同步所有模型
// 自动同步TrendWord模型

Contents.sync({
  force: true, // true 强制创建, 通过设置 force 属性会首先删除表并重新创建
}).then(() => {
  console.log('sync ok')
  process.exit()
})
