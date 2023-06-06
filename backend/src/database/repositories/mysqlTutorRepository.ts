import { IPet } from "../../entities/Pet";
import { ITutor } from "../../entities/Tutor";
import Pet from "../models/Pet";
import Tutor from "../models/Tutor";

export class MysqlTutorRepository {
  constructor() {}

  private defaultGraphFetched =
    "[pets]";

  async create(tutor: ITutor): Promise<ITutor> {
    return await Tutor.query().insert(tutor).withGraphFetched(this.defaultGraphFetched);
  }

  async update(tutor: ITutor): Promise<ITutor> {
    return await Tutor.query().updateAndFetchById(tutor.id, tutor).withGraphFetched(this.defaultGraphFetched);
  }

  async delete(id: number): Promise<void> {
    await Tutor.query().deleteById(id);
  }

  async findById(id: number): Promise<ITutor> {
    return await Tutor.query().findById(id).withGraphFetched(this.defaultGraphFetched);
  }

  async findAll(): Promise<ITutor[]> {
    return await Tutor.query().withGraphFetched(this.defaultGraphFetched);
  }
}
