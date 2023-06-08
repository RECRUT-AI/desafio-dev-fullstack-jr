require('dotenv').config()

import { Sequelize } from 'sequelize'
const POSTGRES_URL: string = process.env.DATABASE_URL as string
export const sequelize = new Sequelize(POSTGRES_URL)
