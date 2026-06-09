import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({
      // Como o DTO agora é idêntico ao Prisma, o "data" vai ficar verde!
      data: createPedidoDto, 
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        ingressos: true, // No plural, como manda o esquema!
        lanches: true,   // Já deixamos os lanches mapeados também!
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id },
      include: {
        ingressos: true,
        lanches: true,
      },
    });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({
      where: { id },
      data: updatePedidoDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}