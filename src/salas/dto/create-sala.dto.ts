import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateSalaDto {
  @IsInt({ message: 'O número da sala deve ser um valor inteiro.' })
  @IsNotEmpty()
  numero!: number;

  @IsInt({ message: 'A capacidade deve ser um valor numérico inteiro.' })
  @IsNotEmpty()
  capacidade!: number;

  @IsString({ message: 'O mapa de poltronas deve ser texto.' })
  @IsNotEmpty()
  poltronas!: string; // Lembra-te que transformámos a matriz multidimensional numa String!

  @IsInt({ message: 'O ID do cinema deve ser um número inteiro.' })
  @IsNotEmpty()
  cinemaId!: number;
}