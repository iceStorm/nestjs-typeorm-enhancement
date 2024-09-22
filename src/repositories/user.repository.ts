import BaseRepository from '~/base/base.repository.js'
import { User, UserEntity } from '~/entities/user.entity.js'

export default class UserRepository extends BaseRepository(User) {
  findByName(firstName: string, lastName: string) {
    // `this` is derived from BaseRepository
    return this.createQueryBuilder('user')
      .where('user.firstName = :firstName', { firstName })
      .andWhere('user.lastName = :lastName', { lastName })
      .getMany()
  }

  // https://typeorm.io/custom-repository#using-custom-repositories-in-transactions
  tryTransaction() {
    // dataSource is a dependency of BaseRepository | auto injected by the NestJS DI system
    return this.dataSource.transaction(async (manager) => {
      const user = new User()
      user.firstName = 'John'
      user.lastName = 'Doe'
      user.isActive = true

      await manager.save(user)

      return user
    })
  }
}

// BaseRepository also accepts an EntitySchema
export class UserRepoRepoWithSchema extends BaseRepository(UserEntity) {
  getByStatus(isActive: boolean) {
    return this.findOne({ where: { isActive } })
  }
}
