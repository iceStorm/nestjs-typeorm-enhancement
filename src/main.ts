import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(7501)
}

await bootstrap()

console.log('\nServer running at http://localhost:7501 🚀')
