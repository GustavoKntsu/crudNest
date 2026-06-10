import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCinemaDto {
  @IsString({ message: 'O nome deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  nome!: string;

  @IsString({ message: 'O endereço deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O endereço não pode estar vazio.' })
  endereco!: string;
}
