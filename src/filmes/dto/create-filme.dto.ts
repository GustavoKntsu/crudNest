import { IsInt, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  sinopse!: string;

  @IsString()
  @IsNotEmpty()
  classificacao!: string;

  @IsDateString()
  @IsNotEmpty()
  duracao!: string;

  @IsString()
  @IsNotEmpty()
  elenco!: string;

  @IsString()
  @IsNotEmpty()
  genero!: string;

  @IsDateString()
  @IsNotEmpty()
  dataInicialExibicao!: string;

  @IsDateString()
  @IsNotEmpty()
  dataFinalExibicao!: string;

  @IsInt()
  @IsNotEmpty()
  cinemaId!: number;
}
