import { Injectable } from '@nestjs/common'
import { DataSource, EntityTarget, Repository } from 'typeorm'

// encapsulating the steps for injecting a repository and entity
// https://github.com/typeorm/typeorm/issues/9458
// https://stackoverflow.com/a/74546046
const BaseRepository = <TEntity>(entity: EntityTarget<TEntity>) => {
  @Injectable()
  class BaseRepositoryHost extends Repository<TEntity> {
    constructor(readonly dataSource: DataSource) {
      const repo = dataSource.getRepository(entity)
      super(repo.target, repo.manager, repo.queryRunner)
    }

    // HINT: add other common methods here
  }

  return BaseRepositoryHost
}

export default BaseRepository
