import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CinemasService } from './cinemas.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cinemas') // <-- Isso cria a aba bonitinha no Swagger
@Controller('cinemas')
export class CinemasController {
  constructor(private readonly cinemasService: CinemasService) {}

  @Post()
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemasService.create(createCinemaDto);
  }

  @Get()
  findAll() {
    return this.cinemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cinemasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCinemaDto: UpdateCinemaDto,
  ) {
    return this.cinemasService.update(id, updateCinemaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cinemasService.remove(id);
  }
}
