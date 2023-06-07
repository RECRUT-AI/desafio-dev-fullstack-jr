const express = require("express");
const router = express.Router();

const { donoController } = require("../controller");

router.get("/", donoController.getAll);

module.exports = router;
