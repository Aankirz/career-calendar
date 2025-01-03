import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Scraper Service is running on http://localhost:${port}`);
}
bootstrap();
