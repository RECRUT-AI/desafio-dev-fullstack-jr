export class CreatePetDto {
  name: string;
  age: number;
  race: string;
  type: 'cat' | 'dog';
  owner_name: string;
  owner_phone: string;
  img_url: string;
}
