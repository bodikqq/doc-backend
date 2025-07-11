import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001', // or whatever port your Next.js runs on
    credentials: true, // if you use cookies or Authorization headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
