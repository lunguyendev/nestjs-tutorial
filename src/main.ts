import { NestFactory } from '@nestjs/core';
import { ItemsModule } from './items/items.module';
import dotenv from 'dotenv';

// dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ItemsModule);
  await app.listen(7000);
}
bootstrap();
