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

const petCriated = async (pet, dono) => {
  const newPetId = await petModel.petCriated(pet, dono);
  const newPet = await petModel.getPetById(newPetId);
  return { type: null, message: newPet };
};

const updatePet = async (idPet, nome, idade, tipo, raca) => {
  await petModel.updatePet(idPet, nome, idade, tipo, raca);
  const searchPet = await petModel.getPetById(idPet);
  if (!searchPet) return { type: 404, message: 'Pet not found' };
  return { type: null, message: searchPet };
};

const deletePet = async (idPet) => {
  const searchPet = await petModel.getPetById(idPet);
  if (!searchPet) return { type: 404, message: 'Pet not found' };
  await petModel.deletePet(idPet);
  return { type: null, message: 'Deleted pet' };
};

module.exports = {
  getPetById,
  getAll,
  updatePet,
  deletePet,
  petCriated,
};