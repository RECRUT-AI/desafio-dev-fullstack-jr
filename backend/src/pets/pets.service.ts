import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from '../database/prisma.service';
import { Pet } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePetDto): Promise<Pet> {
    return await this.prisma.pet.create({ data });
  }

  async findAll(): Promise<Pet[]> {
    return await this.prisma.pet.findMany();
  }

  async findOne(id: number): Promise<Pet> {
    return await this.prisma.pet.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePetDto): Promise<Pet> {
    return await this.prisma.pet.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.pet.delete({ where: { id } });
  }
}
