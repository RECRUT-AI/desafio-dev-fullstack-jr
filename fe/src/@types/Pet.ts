export interface Pet {
  _id: string;
  petsName: string;
  age: number;
  animalType: 'DOG' | 'CAT',
  race: string;
  owner: {
    name: string,
    phone: string;
  }
}