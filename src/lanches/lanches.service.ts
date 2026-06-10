import { Injectable } from '@nestjs/common';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LanchesService {
  constructor(private prisma: PrismaService) {}

  create(createLancheDto: CreateLancheDto) {
    return this.prisma.lancheCombo.create({
      data: createLancheDto,
    });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany({
      include: {
        pedido: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.lancheCombo.findUnique({
      where: { id },
      include: {
        pedido: true,
      },
    });
  }

  update(id: number, updateLancheDto: UpdateLancheDto) {
    return this.prisma.lancheCombo.update({
      where: { id },
      data: updateLancheDto,
    });
  }

  remove(id: number) {
    return this.prisma.lancheCombo.delete({
      where: { id },
    });
  }
}
