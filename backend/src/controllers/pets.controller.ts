import { Request, Response } from 'express';
import PrismaPetModel from '../models/pets.model';
import CustomError from '../errors/CustomError';

class PetsController {
  constructor(
    private petModel = new PrismaPetModel
  ) { }

  public async create(req: Request, res: Response) {
    const newPet = await this.petModel.create(req.body);

    if (!newPet) throw new CustomError(400, 'Invalid Format');

    return res.status(201).json(newPet);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const pet = await this.petModel.readOne(parseInt(id));
    if (!pet) throw new CustomError(404, 'Pet not found');
 
    return res.status(200).json(pet);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedPet = await this.petModel.update(parseInt(id), req.body);
    if (!updatedPet) throw new CustomError(404, 'Pet not found');

    return res.status(200).json(updatedPet);
  }

  public async read(_req: Request, res: Response) {
    const pets = await this.petModel.read();
    return res.status(200).json(pets);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deletedPet = await this.petModel.delete(parseInt(id));
    if (!deletedPet) throw new CustomError(404, 'Pet not found');
    return res.status(200).json(deletedPet);
  }
}

export default PetsController;