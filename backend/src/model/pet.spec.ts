import { sequelize } from './db'

import { DataTypes } from 'sequelize'

const PetsModelTest = sequelize.define('PETS_TEST', {
    id: {
        type: DataTypes.STRING(1000),
        primaryKey: true,
    },
    avatar: {
        type: DataTypes.STRING(2000),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    age: {
        type: DataTypes.DOUBLE(),
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ownerName: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    ownerPhone: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    sex: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
})

describe('News backend', () => {
    beforeAll(async () => {
        await sequelize.authenticate()

        console.log('Conexão com banco de dados estabelecida!')

        await sequelize.sync({ force: false })

        console.log('Banco de dados sincronizado !')

        await PetsModelTest.truncate()

        console.log('Tabela pronta para teste!')
    })

    test('Banco de dados precisa ser criado', () => {
        expect(sequelize).toBeTruthy()
    })

    test('Adicionar PET', async () => {
        await PetsModelTest.create({
            avatar: 'https://m.media-amazon.com/images/I/81Ski+fm4BL.png',
            type: 'Cachorro',
            id: 'DOG-TEST',
            name: 'Caramelo',
            age: 1.2,
            brand: 'Poodle',
            ownerName: 'Luke',
            ownerPhone: '(81)99256-3307',
            sex: 'Male',
        }).then((res) => {
            expect(res).toBeTruthy()
        })
    })

    test('Editar PET', async () => {
        await PetsModelTest.update(
            { id: 'DOG-TEST-EDITED' },
            {
                where: {
                    id: 'DOG-TEST',
                },
            }
        ).then((res) => {
            expect(res).toBeTruthy()
        })
    })

    test('Nao deve ser capaz de remover PET que nao existe', async () => {
        await PetsModelTest.destroy({
            where: {
                id: 'DOG-TEST',
            },
        }).then((res) => {
            expect(res).toBe(0)
        })
    })

    test('Remover PET', async () => {
        await PetsModelTest.destroy({
            where: {
                id: 'DOG-TEST-EDITED',
            },
        }).then((res) => {
            expect(res).toBeGreaterThan(0)
        })
    })
})
