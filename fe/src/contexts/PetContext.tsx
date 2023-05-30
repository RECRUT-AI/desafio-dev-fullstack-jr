/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';
import { Pet } from '../@types/Pet';

interface PetContextData {
  pets: Pet[];
  addPet: (pet: Pet) => void;
  removePet: (id: string) => void;
}

const PetContext = createContext<PetContextData>({
  pets: [],
  addPet: () => {},
  removePet: () => {}
});

interface PetProviderProps {
  children: ReactNode;
}

export const PetProvider: React.FC<PetProviderProps> = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  const addPet = (pet: Pet) => {
    setPets([...pets, pet]);
  };

  const removePet = (id: string) => {
    const updatedPets = pets.filter((pet) => pet._id !== id);
    setPets(updatedPets);
  };

  return (
    <PetContext.Provider value={{ pets, addPet, removePet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContext;
