import { knex as setupKnex } from 'knex'

export const config = {
  client: 'sqlite3',
  connection: {
    filename: './tmp/database.db',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
