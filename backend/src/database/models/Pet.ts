import { IPet } from '../../entities/Pet'
import BaseModel from './BaseModel'
import Tutor from './Tutor'

interface Pet extends IPet {}

class Pet extends BaseModel {
  static tableName = 'pet'

  static get relationMappings() {
    return {
        tutor: {
            relation: BaseModel.BelongsToOneRelation,
            modelClass: Tutor,
            join: {
                from: 'pet.tutorId',
                to: 'tutor.id'
            }
        }
    }
  }

}

export default Pet
