interface Pet {
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
  pets: Pet[];
}

enum PetType {
  CAT = "CAT",
  DOG = "DOG",
}