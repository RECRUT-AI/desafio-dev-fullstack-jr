import { DataTypes } from 'sequelize'
import { sequelize } from './db'

const PetsModel = sequelize.define('PETS', {
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

export default PetsModel
