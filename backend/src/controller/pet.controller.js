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

// const petCriated = async (req, res) => {
//   const { pet } = req.body;
//   const petCreate = await petService.petCriated (pet);
//   return res.status(201).json(petCreate.message);
// };

const updatePet = async (req, res) => {
  const { idPet } = req.params;
  const { name, idade, tipo, raca } = req.body;
  const listId = await petService.updatePet(idPet, name, idade, tipo, raca);
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

module.exports = {
  getPetById,
  getAll,
  updatePet,
  deletePet,
};