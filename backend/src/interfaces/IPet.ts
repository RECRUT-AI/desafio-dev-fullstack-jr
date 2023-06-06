export default interface IPet {
  id: number;
  name: string;
  age: number;
  type: PetType;
  breed: string;
  ownerId: number;
  owner: Owner;
}

interface Owner {
  id: number;
  name: string;
  phone: string;
  pets: IPet[];
}

enum PetType {
  CAT = "CAT",
  DOG = "DOG",
}