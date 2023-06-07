const connection = require("../../database/connection");

const getAll = async () => {
  const [pet] = await connection.execute(
    `SELECT * FROM recruit_petshop.pet;`
  );
  return pet;
};

const getPetById = async (id) => {
  const [[petId]] = await connection.execute(
    'SELECT * FROM recruit_petshop.pet WHERE idpet = ?',
    [id],
  );
  return petId;
};

const updatePet = async (idPet, nome, idade, tipo, raca) => {
  const [petId] = await connection.execute(
    `UPDATE recruit_petshop.pet
    SET nome = ?, idade = ?, tipo = ?, raca = ?
    WHERE idpet = ?;`,
    [nome, idade, tipo, raca, idPet],
  );

  return petId;
};

const deletePet = async (idPet) => {
  const [petId] = await connection.execute(
    `DELETE FROM recruit_petshop.pet
    WHERE idpet = ?;`,
    [idPet],
  );

  return petId;
};

const petCriated = async (pet, dono) => {

  const [{ insertId }] = await connection.execute(
    `INSERT INTO recruit_petshop.dono 
    (nome, telefone) VALUES (?, ?);`,
    [dono.nome, dono.telefone],
  );

  const [result] = await connection.execute(
    `INSERT INTO recruit_petshop.pet 
    (nome, idade, tipo, raca, id_dono) VALUES (?, ?, ?, ?, ?);`,
    [pet.nome, pet.idade, pet.tipo, pet.raca, insertId],
  );

  return result.insertId;
};

module.exports = { 
  getPetById,
  getAll,
  updatePet,
  deletePet,
  petCriated,
 };