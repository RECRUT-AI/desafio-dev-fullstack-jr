import { Router } from "express";
import { TutorBusiness } from "../business/TutorBusiness";
import { MysqlTutorRepository } from "../database/repositories/mysqlTutorRepository";
import { MysqlPetRepository } from "../database/repositories/mysqlPetRepository";
import { TutorController } from "../controller/TutorController";

export const tutorRouter = Router();

const tutorController = new TutorController(
  new TutorBusiness(new MysqlTutorRepository(), new MysqlPetRepository())
);

tutorRouter.post("/create", tutorController.createTutor);
tutorRouter.get("/all", tutorController.getAllTutors);
tutorRouter.get("/:id", tutorController.getTutorById);
tutorRouter.delete("/:id", tutorController.deleteTutor);
tutorRouter.put("/update", tutorController.updateTutor);