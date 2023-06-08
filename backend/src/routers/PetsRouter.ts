import express from 'express'
import * as PetsController from '../controllers/PetsController'

const PetsRouter = express.Router()

PetsRouter.route('/').get(PetsController.GetPet)
PetsRouter.route('/search').get(PetsController.SearchPet)
PetsRouter.route('/').post(PetsController.CreatePet)
PetsRouter.route('/').put(PetsController.EditPet)
PetsRouter.route('/').delete(PetsController.DeletePet)

export default PetsRouter
