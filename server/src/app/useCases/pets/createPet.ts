import { Request, Response } from 'express';

import { Pet } from '../../models/Pet';

export async function createPet(req: Request, res: Response) {
  try {
    const { petsName, age, animalType, race, owner } = req.body;
    const pet = await Pet.create({ petsName, age, animalType, race, owner });
    res.status(201).json(pet);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
