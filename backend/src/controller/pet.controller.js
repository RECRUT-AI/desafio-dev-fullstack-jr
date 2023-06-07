const { petService } = require('../service');

const getAll = async (_req, res) => {
    const { message } = await petService.getAll();
    return res.status(200).json(message);
};

const getPetById = async (req, res) => {
    const { idPet } = req.params;
    const listId = await petService.getPetById(idPet);
    if (listId.type) {
      return res.status(404).json({ message: listId.message });
    }
    return res.status(200).json(listId.message);
};

const updatePet = async (req, res) => {
  const { idPet } = req.params;
  const { nome, idade, tipo, raca } = req.body;
  console.log(idPet, nome, idade, tipo, raca)
  const listId = await petService.updatePet(idPet, nome, idade, tipo, raca);
  if (listId.type) {
    return res.status(404).json({ message: listId.message });
  }
  return res.status(200).json(listId.message);
};

const deletePet = async (req, res) => {
  const { idPet } = req.params;
  const deleteId = await petService.deletePet(idPet);
  if (deleteId.type) {
    return res.status(404).json({ message: deleteId.message });
  }
  return res.status(204).json();
};

const petCriated = async (req, res) => {
  const { pet } = req.body;
  const petCreate = await petService.petCriated(pet);
  return res.status(201).json(petCreate.message);
};

module.exports = {
  getPetById,
  getAll,
  updatePet,
  deletePet,
  petCriated,
};