const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_schema", "root", "admin", {
  dialect: "mysql",
  host: "localhost"
}); //实例化相应的数据库

module.exports = sequelize;
