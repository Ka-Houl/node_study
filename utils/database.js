const mysql = require("mysql2");

/** 创建链接池 */
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_schema", //数据库名
  password: "admin"
});

module.exports = pool.promise();
