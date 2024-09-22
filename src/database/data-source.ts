import { DataSource } from 'typeorm'

const SqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [import.meta.dirname + '../entities/*.entity.ts'],

  // setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  synchronize: process.env.NODE_ENV === 'development',
})

export default SqliteDataSource
