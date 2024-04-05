import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import 'dotenv/config'

let port = 3800;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true
    })
  )

  console.warn(`Listen Transaction Agent Port ${port}`)
  await app.listen(port);
}


bootstrap();



// http://223.130.139.43:6500/