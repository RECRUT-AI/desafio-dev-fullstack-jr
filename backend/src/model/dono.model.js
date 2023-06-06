const connection = require("../../database/connection");

const getAll = async () => {
  const [dono] = await connection.execute(
    `SELECT * FROM recruit_petshop.dono;`
  );
  return dono;
};


module.exports = { getAll };