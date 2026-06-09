import { Module } from '@nestjs/common';
import { CinemasService } from './cinemas.service';
import { CinemasController } from './cinemas.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importação adicionada

@Module({
  imports: [PrismaModule], // Adicionado no imports
  controllers: [CinemasController],
  providers: [CinemasService],
})
export class CinemasModule {}