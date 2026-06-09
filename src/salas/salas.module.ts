import { Module } from '@nestjs/common';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importação do Prisma

@Module({
  imports: [PrismaModule], // <-- Adicionado aos imports
  controllers: [SalasController],
  providers: [SalasService],
})
export class SalasModule {}