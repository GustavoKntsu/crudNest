import { IsInt, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateSessaoDto {
  @IsDateString({}, { message: 'A hora de exibição deve ser uma data/hora válida em formato ISO.' })
  @IsNotEmpty({ message: 'A hora de exibição é obrigatória.' })
  horacrioExibicao!: string; 

  @IsInt({ message: 'O ID do cinema deve ser um número inteiro.' })
  @IsNotEmpty()
  cinemaId!: number;

  @IsInt({ message: 'O ID da sala deve ser um número inteiro.' })
  @IsNotEmpty()
  salaId!: number;

  @IsInt({ message: 'O ID do filme deve ser um número inteiro.' })
  @IsNotEmpty()
  filmeId!: number;
}