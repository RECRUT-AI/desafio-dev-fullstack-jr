import { TutorNotFoundError } from "../errors/TutorNotFoundError";
import { MysqlTutorRepository } from "../database/repositories/mysqlTutorRepository";
import { MysqlPetRepository } from "../database/repositories/mysqlPetRepository";
import { ITutor } from "../entities/Tutor";

export class TutorBusiness {
  constructor(
    private tutorRepository: MysqlTutorRepository,
    private petRepository: MysqlPetRepository
  ) {}

  public createTutor = async (input: ITutor): Promise<ITutor> => {
    const tutor = await this.tutorRepository.create(input);

    return tutor;
  };

  public getTutorById = async (id: number): Promise<ITutor> => {
    const tutor = await this.tutorRepository.findById(id);

    if (!tutor) {
      throw new TutorNotFoundError("Tutor não encontrado");
    }

    return tutor;
  };

  public getAllTutors = async (): Promise<ITutor[]> => {
    const tutors = await this.tutorRepository.findAll();

    return tutors;
  };

  public updateTutor = async (input: ITutor): Promise<ITutor> => {
    const tutor = await this.tutorRepository.update(input);

    if (!tutor) {
      throw new TutorNotFoundError("Tutor não encontrado");
    }

    return tutor;
  };

  public deleteTutor = async (id: number) => {
    const tutor = await this.tutorRepository.findById(id);

    if (!tutor) {
      throw new TutorNotFoundError("Tutor não encontrado");
    }

    if (tutor.pets.length) {
      await this.petRepository.deleteByTutorId(id);

      await this.tutorRepository.delete(id);

      return { message: "Tutor e pets deletados com sucesso" };
    }

    await this.tutorRepository.delete(id);

    return { message: "Tutor deletado com sucesso" };
  };
}
