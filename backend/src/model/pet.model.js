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

const updatePet = async (id, name) => {
  const [petId] = await connection.execute(
    `UPDATE recruit_petshop.pet
    SET name = ?
    WHERE id = ?;`,
    [name, id],
  );

  return petId;
};

const deletePet = async (id) => {
  const [petId] = await connection.execute(
    `DELETE FROM recruit_petshop.pet
    WHERE id = ?;`,
    [id],
  );

  return petId;
};

// const petCriated = async (pet) => {
//   await connection.execute(
//     `INSERT INTO StoreManager.sales_products 
//     (sale_id, product_id, quantity) VALUES(?, ?, ?);`,
//     [createId, sale.productId, sale.quantity],
//   );
  
//   const [result] = await connection.execute(
//     `SELECT product_id AS productId, quantity
//     FROM sales_products WHERE sale_id = ?`,
//     [createId],
//   );
//   return result;
// };



module.exports = { getPetById, getAll, updatePet, deletePet };