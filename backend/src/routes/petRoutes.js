const express = require("express");
const router = express.Router();

const { petController} = require("../controller");

router.get("/", petController.getAll);
// router.post("/", petController.create);
router.get("/:pet_id", petController.getPetById);
router.put("/:pet_id", petController.updatePet);
router.delete("/:pet_id", petController.deletePet);

module.exports = router;
