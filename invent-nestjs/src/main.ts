import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { SeedsService } from './seeds/seeds.service';
import { LISTEN_PORT, ORIGIN_CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConf = new DocumentBuilder()
    .setTitle('INVENT')
    .setDescription('Empresa intermediaria de envíos de mercancías')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConf);

  // Ordenar controladores alfabéticamente
  const orderedPaths = {};
  Object.keys(document.paths)
    .sort()
    .forEach((key) => {
      orderedPaths[key] = document.paths[key];
    });
  document.paths = orderedPaths;

  SwaggerModule.setup('api', app, document);

  var corsOptions = {
    origin: ORIGIN_CORS,
  }
  
  app.use(cors(corsOptions))

  // IMPORTANTE COMENTAR PARA NO REINICIAR LA BASE DE DATOS
  const seedsService = app.get(SeedsService);
  await seedsService.seedDataBase();

  await app.listen(LISTEN_PORT);
}
bootstrap();
