const { petService } = require('../service');

const getAll = async (_req, res) => {
    const { message } = await petService.getAll();
    return res.status(200).json(message);
};

const getPetById = async (req, res) => {
    const { petId } = req.params;
    const listId = await petService.getPetById(petId);
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
  const { petId } = req.params;
  const { name } = req.body;
  const listId = await petService.updatePet(petId, name);
  if (listId.type) {
    return res.status(404).json({ message: listId.message });
  }
  return res.status(200).json(listId.message);
};

const deletePet = async (req, res) => {
  const { petId } = req.params;
  const deleteId = await petService.deletePet(petId);
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