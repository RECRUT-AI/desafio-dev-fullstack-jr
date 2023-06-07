const express = require("express");
const router = express.Router();

const { petController} = require("../controller");

router.get("/", petController.getAll);
router.post("/", petController.petCriated);
router.get("/:idPet", petController.getPetById);
router.put("/:idPet", petController.updatePet);
router.delete("/:idPet", petController.deletePet);

module.exports = router;
