const express = require("express");
const router = express.Router();

const { petController} = require("../controller");
const { invalidPhoneNumber } = require('../middlewares/invalidPhoneNumber')

router.get("/", petController.getAll);
router.post("/", invalidPhoneNumber, petController.petCriated);
router.get("/:idPet", petController.getPetById);
router.put("/:idPet", petController.updatePet);
router.delete("/:idPet", petController.deletePet);

module.exports = router;
