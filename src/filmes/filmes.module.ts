import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importar o Prisma

@Module({
  imports: [PrismaModule], // <-- Adicionar aos imports
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
