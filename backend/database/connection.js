const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "database",
  user: "root",
  password: "minha_senha_petshop",
  port: "3306",
});

module.exports = connection;
