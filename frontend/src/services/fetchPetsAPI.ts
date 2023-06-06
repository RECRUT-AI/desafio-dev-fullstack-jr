import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://desafio-dev-fullstack-jr-production.up.railway.app',
});

interface Pet {
  id: number;
  name: string;
  age: number;
  type: string;
  breed: string;
  owner: string;
  ownerPhone: string;
}

interface NewPet {
  name: string;
  age: number;
  type: string;
  breed: string;
  owner: string;
  ownerPhone: string;
}

export const getPets = async (): Promise<Pet[]> => {
  const response = await instance.get<Pet[]>('/pets');
  const pets = response.data;

  return pets;
};

export const createPet = async (pet: NewPet): Promise<NewPet> => {
  const response = await instance.post<NewPet>('/pets', pet);
  const createdPet = response.data;

  return createdPet;
};

export const getPetById = async (id: number): Promise<Pet> => {
  const response = await instance.get<Pet>(`/pets/${id}`);
  const pet = response.data;

  return pet;
};

export const updatePet = async (
  id: number, 
  pet: Partial<Pet>): Promise<Pet> => {
  const response = await instance.put<Pet>(`/pets/${id}`, pet);
  const updatedPet = response.data;

  return updatedPet;
};

export const deletePet = async (id: number): Promise<void> => {
  await instance.delete(`/pets/${id}`);
};
