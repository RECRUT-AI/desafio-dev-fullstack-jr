import { Request, Response } from 'express';

import { Pet } from '../../models/Pet';

export async function updatePet(req: Request, res: Response) {
  try {
    const { petId } = req.params;
    const { petsName, age, animalType, race, owner } = req.body;

    if (!['DOG', 'CAT'].includes(animalType)) {
      return res.status(400).json({
        error: 'Status should be DOG or CAT only'
      });
    }

    await Pet.findByIdAndUpdate(petId, { petsName, age, animalType, race, owner });
    res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
