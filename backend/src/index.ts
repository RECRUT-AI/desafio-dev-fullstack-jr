import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import PetsRouter from './routers/PetsRouter'
import UserRouter from './routers/UserRouter'
import { sequelize } from './model/db'
import PetModel from './model/pet'
import UserModel from './model/user'
import { pets, users } from './data'

const app: Application = express()
const port = 3000

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(helmet())

app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hi from RECRUT.AI')
})

async function populatePetsTables() {
    await PetModel.bulkCreate(pets)
    await UserModel.bulkCreate(users)

    console.log('Tabelas populadas')
}

app.get('/populate', async (request: Request, response: Response) => {
    await populatePetsTables()
    response.status(200).send()
})

app.use('/pets', PetsRouter)
app.use('/user', UserRouter)

app.all('*', (req: Request, res: Response) => {
    res.status(404).json(`Rota: ${req.originalUrl} não existe.`)
})

app.listen(port, async () => {
    try {
        await sequelize.authenticate()

        console.log('Conexão com banco de dados estabelecida!')

        sequelize.sync({ force: false }).then(async () => {
            console.log('Banco de dados sincronizado !')
        })

        console.log('Backend operando na porta 3000.')
    } catch (error) {
        console.error('Ocorreu um erro na conexão com o banco de dados:', error)
    }
})
