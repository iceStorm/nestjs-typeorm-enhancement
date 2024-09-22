import SqliteDataSource from '~/database/data-source.js'
import { PhotoEntity } from '~/entities/photo.entity.js'

// Data Mapper is not type-safe
export const PhotoRepository = SqliteDataSource.getRepository(PhotoEntity).extend({
  async getByName(name: string) {
    // `this` is `any` type
    return this.findOne({ where: { name } })
  },
})

// photo is `any` type
const photo = await PhotoRepository.getByName('photo1')
console.log(photo)
