const express = require("express");
const router = express.Router();

const { petController} = require("../controller");

router.get("/", petController.getAll);
// router.post("/", petController.create);
router.get("/:idPet", petController.getPetById);
router.put("/:idPet", petController.updatePet);
router.delete("/:pet_id", petController.deletePet);

module.exports = router;
