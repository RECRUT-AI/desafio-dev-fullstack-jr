import { Request, Response } from 'express'
import { UserSchema } from '../../common/user'
import UserModel from '../model/user'

export async function Login(request: Request, response: Response) {
    try {
        const parse = UserSchema.parse(request.body)
        const user = await UserModel.findByPk(parse.email)

        if (user.dataValues.password == parse.password) {
            response.status(200).send()
        } else {
            response.status(404).send()
        }
    } catch (e) {
        response.status(400).send()
    }
}
