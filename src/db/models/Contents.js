const { Model } = require('sequelize')
const { sequelize } = require('../sequelize')

const { INTEGER, STRING, DATETIME, LONGSTRING } = require('../types') // Sequelize 数据类型

// 数据模型
class Contents extends Model {
  /**
   * 批量插入数据
   * @static
   * @param {*} contentList 文章内容列表集合
   * @returns
   * @memberof Contents
   */
  static async batchInsert(contentList) {
    try {
      const result = await Contents.bulkCreate(contentList)
      return result.dataValues // 返回格式化后的信息
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * @description: 分页查询内容列表
   * @param {*} pageIndex 当前页号
   * @param {*} pageSize 单页大小
   * @return {*}
   */
  static async getContentList(pageIndex, pageSize) {
    const result = await Contents.findAndCountAll({
      limit: pageSize,
      offset: pageIndex * pageSize,
      attributes: ['articleId'],
    })
    // 格式化
    const contentList = result.rows.map((row) => row.dataValues)
    return {
      contentList,
    }
  }
}

// 初始化模型表
Contents.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true, // 主键 关系型数据库 不能重复/不能为空
      autoIncrement: true, // 数字/自动增长
    },
    user_id: {
      type: STRING,
      allowNull: true,
      comment: '用户id',
    },
  },
  {
    sequelize,
    tableName: 'demo_contents',
  }
)

module.exports = Contents
