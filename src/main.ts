import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API do Cinema')
    .setDescription('Documentação do CRUD de Cinema')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // É esta linha abaixo que cria a URL /api que você está tentando acessar!
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
