import { DataTypes } from 'sequelize'
import { sequelize } from './db'

const UserModel = sequelize.define('USERS', {
    email: {
        type: DataTypes.STRING(200),
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
})

export default UserModel
