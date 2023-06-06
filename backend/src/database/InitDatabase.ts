import BaseModel from './models/BaseModel'

export default () => {
  const knexconfig = require('./BaseDatabase')

  const knex = require('knex')(knexconfig)

  BaseModel.knex(knex)

  return knex
}
