const Knex = require('knex')
const baseConfig = require('./BaseDatabase')
require('dotenv').config()

const databaseName = process.env.DB_NAME || ''

async function main() {
    console.log('Creating database...')
    console.log('Database name: ', process.env)

  const initialConnection = {
    ...baseConfig.connection,
  }

  delete initialConnection.database

  const knex = Knex({
    ...baseConfig,
    connection: initialConnection,
  })

  await knex.raw('CREATE DATABASE IF NOT EXISTS ??', databaseName)

  knex.destroy()
}

main()
  .catch((err) =>
    console.error({
        message: 'Error creating database',
        error: err,
    }
  ))
  .then(() => process.exit())
