const connection = require("../../database/connection");

const getAll = async () => {
  const [dono] = await connection.execute(
    `SELECT d.nome AS nome_dono, d.telefone, p.nome AS nome_pet, p.idade, p.tipo, p.raca
    FROM recruit_petshop.dono AS d
    JOIN recruit_petshop.pet AS p ON d.iddono = p.id_dono
    ORDER BY d.nome;`
  );
  return dono;
};


module.exports = { getAll };