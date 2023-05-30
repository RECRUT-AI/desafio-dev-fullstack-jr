import { Router } from 'express';

import { listPets } from './app/useCases/pets/listPets';
import { createPet } from './app/useCases/pets/createPet';
import { updatePet } from './app/useCases/pets/updatePet';
import { deletePet } from './app/useCases/pets/deletePet';
import { getPetById } from './app/useCases/pets/getPetById';


export const router = Router();

// List pets
router.get('/pets', listPets);

router.get('/pets/:petId', getPetById);

// Create Pet
router.post('/pets', createPet);

// Update Pet
router.put('/pets/:petId', updatePet);

// Delete Pet
router.delete('/pets/:petId', deletePet);


