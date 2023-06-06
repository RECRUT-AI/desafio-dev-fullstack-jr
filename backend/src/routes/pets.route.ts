import { Router } from 'express';
import PetsController from '../controllers/pets.controller';

const petRoute = Router();

const petsController = new PetsController();

petRoute.post('/pets', (req, res) => petsController.create(req, res));
petRoute.get('/pets', (req, res) => petsController.read(req, res));
petRoute.get('/pets/:id', (req, res) => petsController.readOne(req, res));
petRoute.put('/pets/:id', (req, res) => petsController.update(req, res));
petRoute.delete('/pets/:id', (req, res) => petsController.delete(req, res));

export default petRoute;