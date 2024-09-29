import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module.js'
import SqliteDataSource from './database/data-source.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(7501)
}

await bootstrap()
console.log('\nServer running at http://localhost:7501 🚀')

// const testDbConnection = await SqliteDataSource.query('SELECT * FROM animal')
// console.log('Database connection test result:', testDbConnection)
