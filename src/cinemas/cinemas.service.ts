import { Injectable } from '@nestjs/common';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CinemasService {
  // Injetando o banco de dados aqui no construtor
  constructor(private prisma: PrismaService) {}

  create(createCinemaDto: CreateCinemaDto) {
    return this.prisma.cinema.create({
      data: createCinemaDto,
    });
  }

  findAll() {
    return this.prisma.cinema.findMany();
  }

  findOne(id: number) {
    return this.prisma.cinema.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return this.prisma.cinema.update({
      where: { id },
      data: updateCinemaDto,
    });
  }

  remove(id: number) {
    return this.prisma.cinema.delete({
      where: { id },
    });
  }
}
