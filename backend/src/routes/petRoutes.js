const express = require("express");
const router = express.Router();

const { pet } = require("../controller");

feiticosRouter.get("/", feiticosController.getAll);
feiticosRouter.post("/", feiticosController.create);
feiticosRouter.get("/:personagem_id", feiticosController.getByPersonsagemId);

module.exports = feiticosRouter;
