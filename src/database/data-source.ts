import { DataSource } from 'typeorm'
import { Animal } from '~/entities/animal.entity.js'
import { PhotoEntity } from '~/entities/photo.entity.js'
import { UserEntity } from '~/entities/user.entity.js'

const SqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  // entities: [import.meta.dirname + '../entities/*.entity.ts'],
  entities: [UserEntity, Animal, PhotoEntity],

  // setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  synchronize: true,
})

export default SqliteDataSource
