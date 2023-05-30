import { Request, Response } from 'express';

import { Pet } from '../../models/Pet';

export async function deletePet(req: Request, res: Response) {
  try {
    const { petId } = req.params;
    await Pet.findByIdAndDelete(petId);
    res.send(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
