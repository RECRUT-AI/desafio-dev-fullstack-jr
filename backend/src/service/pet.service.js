const { petModel } = require('../model');

const getAll = async () => {
  const listAll = await petModel.getAll();
  return { type: null, message: listAll };
};

const getPetById = async (Id) => {
  const listId = await petModel.getPetById(Id);
  if (!listId) return { type: 404, message: 'Pet not found' };
  return { type: null, message: listId };
};

// const petCriated = async (pet) => {
//   const newPetId = await petModel.petCriated ({ pet });
//   const newPet = await petModel.getPetById(newPetId);

//   return { type: null, message: newPet };
// };

const updatePet = async (id, name) => {
  await petModel.updatePet(id, name);
  const searchPet = await petModel.getPetById(id);
  if (!searchPet) return { type: 404, message: 'Pet not found' };
  return { type: null, message: searchPet };
};

const deletePet = async (id) => {
  const searchPet = await petModel.getPetById(id);
  if (!searchPet) return { type: 404, message: 'Pet not found' };
  await petModel.deletePet(id);
  return { type: null, message: null };
};

module.exports = {
  getPetById,
  getAll,
  updatePet,
  deletePet,
  // petCriated 
};