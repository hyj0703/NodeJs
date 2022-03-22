const { Sequelize } = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING, // string
  LONGSTRING: Sequelize.DataTypes.TEXT('long'), // string
  INTEGER: Sequelize.INTEGER, // integer
  BIGINT: Sequelize.BIGINT, // bigint
  DECIMAL: Sequelize.DECIMAL, // decimal
  VARCHAR: Sequelize.VARCHAR, // varchar
  JSON: Sequelize.JSON, // json
  TEXT: Sequelize.TEXT, // text
  DATETIME: Sequelize.DATE, // datetime
  BOOLEAN: Sequelize.BOOLEAN, // boolean
}
