import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LanchesService } from './lanches.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lanches e Combos')
@Controller('lanches')
export class LanchesController {
  constructor(private readonly lanchesService: LanchesService) {}

  @Post()
  create(@Body() createLancheDto: CreateLancheDto) {
    return this.lanchesService.create(createLancheDto);
  }

  @Get()
  findAll() {
    return this.lanchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lanchesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLancheDto: UpdateLancheDto) {
    return this.lanchesService.update(id, updateLancheDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lanchesService.remove(id);
  }
}