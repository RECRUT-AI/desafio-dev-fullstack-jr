import { sequelize } from './db'

import { DataTypes } from 'sequelize'

const UserModelTest = sequelize.define('USERS_TEST', {
    email: {
        type: DataTypes.STRING(200),
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
})

describe('News backend', () => {
    beforeAll(async () => {
        await sequelize.authenticate()

        console.log('Conexão com banco de dados estabelecida!')

        await sequelize.sync({ force: false })

        console.log('Banco de dados sincronizado !')

        await UserModelTest.truncate()

        console.log('Tabela pronta para teste!')
    })

    test('Banco de dados precisa ser criado', () => {
        expect(sequelize).toBeTruthy()
    })

    test('Adicionar usuario', async () => {
        await UserModelTest.create({
            email: 'test@email.com',
            password: '123',
        }).then((res) => {
            expect(res).toBeTruthy()
        })
    })

    test('Editar usuario', async () => {
        await UserModelTest.update(
            { email: 'test123@email.com' },
            {
                where: {
                    email: 'test@email.com',
                },
            }
        ).then((res) => {
            expect(res).toBeTruthy()
        })
    })

    test('Nao deve ser capaz de remover usuario que nao existe', async () => {
        await UserModelTest.destroy({
            where: {
                email: 'test@email.com',
            },
        }).then((res) => {
            expect(res).toBe(0)
        })
    })

    test('Remover usuario', async () => {
        await UserModelTest.destroy({
            where: {
                email: 'test123@email.com',
            },
        }).then((res) => {
            expect(res).toBeGreaterThan(0)
        })
    })
})
