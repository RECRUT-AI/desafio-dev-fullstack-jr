import { Router } from "express";

const petRoutes = Router();

petRoutes.get("/", (req, res) => {
  console.log("Rota get");
});

export { petRoutes };
