/* eslint-disable no-undef */
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME || "database",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "minha_senha_petshop",
  port: process.env.MYSQL_PORT ||"3306",
});

module.exports = connection;
