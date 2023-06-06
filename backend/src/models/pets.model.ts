import { Prisma, PrismaClient, Pet as PetModel } from '@prisma/client';

class PrismaPetModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(petData: Prisma.PetCreateInput): Promise<PetModel> {
    const createdPet = await this.prisma.pet.create({
      data: petData,
    });
    return createdPet;
  }

  public async readOne(id: number): Promise<PetModel | null> {
    const pet = await this.prisma.pet.findUnique({
      where: { id },
    });
    return pet;
  }

  public async update(id: number, petData: Prisma.PetUpdateInput): Promise<PetModel | null> {
    const updatedPet = await this.prisma.pet.update({
      where: { id },
      data: petData,
    });
    return updatedPet;
  }

  public async read(): Promise<PetModel[]> {
    const pets = await this.prisma.pet.findMany();
    return pets;
  }

  public async delete(id: number): Promise<PetModel | null> {
    const deletedPet = await this.prisma.pet.delete({
      where: { id },
    });
    return deletedPet;
  }
}

export default PrismaPetModel;