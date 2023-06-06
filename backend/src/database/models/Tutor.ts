import { ITutor } from '../../entities/Tutor'
import BaseModel from './BaseModel'
import Pet from './Pet'

interface Tutor extends ITutor {}

class Tutor extends BaseModel {
  static tableName = 'tutor'

  static get relationMappings() {
    return {
        pets: {
            relation: BaseModel.HasManyRelation,
            modelClass: Pet,
            join: {
                from: 'tutor.id',
                to: 'pet.tutorId'
            }
        }
    }
  }
}

export default Tutor
