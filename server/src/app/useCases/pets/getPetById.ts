import { Request, Response } from 'express';
import { Pet } from './../../models/Pet';

export async function getPetById(req: Request, res: Response) {
  try {
    const { petId } = req.params;
    const products = await Pet.findById(petId);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
