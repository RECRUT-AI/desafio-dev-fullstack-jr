import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { Pet } from "../types";

const petRoutes = Router();

const pets: Array<Pet> = [];

petRoutes.get("/", (req, res) => {
  if (pets.length <= 0) {
    return res.status(404).json({ msg: "Nenhum pet foi encontrado" });
  } else {
    return res.status(200).json(pets);
  }
});

petRoutes.get("/:pet_id", (req, res) => {
  const { pet_id } = req.params;
  const petIndex = pets.findIndex((thisPet) => thisPet.id === parseInt(pet_id));

  if (petIndex >= 0) {
    return res.status(200).json(pets[petIndex]);
  } else {
    return res.status(404).json({ msg: "Nenhum pet foi encontrado" });
  }
});

petRoutes.post("/", (req, res) => {
  const { name, age, type, breed, tutorName, tutorPhone } = req.body;

  const newPet = {
    id: pets.length >= 0 ? pets.length + 1 : 1,
    name,
    age: parseInt(age),
    type,
    breed,
    tutorName,
    tutorPhone,
  };

  pets.push(newPet);

  return res.status(201).json(newPet);
});

petRoutes.delete("/:pet_id", (req, res) => {
  const { pet_id } = req.params;
  const petIndex = pets.findIndex((thisPet) => thisPet.id === parseInt(pet_id));

  if (petIndex >= 0) {
    pets.splice(petIndex, 1);

    return res.status(200).json({ msg: "Pet deletado com sucesso" });
  } else {
    return res.status(400).json({ msg: "Nenhum pet foi encontrado" });
  }
});

petRoutes.patch("/:pet_id", (req, res) => {
  const { pet_id } = req.params;
  const newData = req.body;
  const petIndex = pets.findIndex((thisPet) => thisPet.id === parseInt(pet_id));

  if (petIndex >= 0) {
    for (let key in newData) {
      if (pets[petIndex][key]) {
        pets[petIndex][key] = newData[key];
      }
    }

    return res.status(200).json(pets[petIndex]);
  } else {
    return res.status(400).json({ msg: "Nenhum pet foi encontrado" });
  }
});

export { petRoutes };
