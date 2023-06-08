import express from 'express'
import * as UserController from '../controllers/UserController'

const UserRouter = express.Router()
UserRouter.route('/login').post(UserController.Login)

export default UserRouter
