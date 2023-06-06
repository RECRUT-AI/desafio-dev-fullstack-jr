import { IPet } from "../../entities/Pet";
import Pet from "../models/Pet";

export class MysqlPetRepository {
  constructor() {}

  private defaultGraphFetched =
    "[tutor]";

  async create(pet: IPet): Promise<IPet> {
    return await Pet.query().insert(pet).withGraphFetched(this.defaultGraphFetched);
  };

  async update(pet: IPet): Promise<IPet> {
    return await Pet.query().updateAndFetchById(pet.id, pet).withGraphFetched(this.defaultGraphFetched);
  }

  async delete(id: number): Promise<void> {
    await Pet.query().deleteById(id);
  }

  async findById(id: number): Promise<IPet> {
    return await Pet.query().findById(id).withGraphFetched(this.defaultGraphFetched);
  }

  async findAll(): Promise<IPet[]> {
    return await Pet.query().withGraphFetched(this.defaultGraphFetched);
  }

  async deleteByTutorId(tutorId: number): Promise<void> {
    await Pet.query().delete().where("tutorId", tutorId);
  }
}
