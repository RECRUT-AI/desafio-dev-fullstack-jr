import { Request, Response } from 'express';

import { Pet } from '../../models/Pet';

export async function listPets(req: Request, res: Response) {
  try {
    const pets = await Pet.find();
    res.json(pets);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
