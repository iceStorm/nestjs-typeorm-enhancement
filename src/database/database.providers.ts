import SqliteDataSource from './data-source.js'

// https://docs.nestjs.com/recipes/sql-typeorm
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => SqliteDataSource.initialize(),
  },
]
