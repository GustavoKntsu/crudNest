import { IsInt, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateIngressoDto {
  @IsNumber({}, { message: 'O valor da inteira deve ser um número.' })
  @IsNotEmpty({ message: 'O valor da inteira é obrigatório.' })
  valorInteira!: number; // <-- Adicionamos a Inteira no lugar do preco

  @IsNumber({}, { message: 'O valor da meia deve ser um número.' })
  @IsNotEmpty({ message: 'O valor da meia é obrigatório.' })
  valorMeia!: number;    // <-- Adicionamos a Meia

  @IsString({ message: 'O lugar/assento deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O lugar é obrigatório.' })
  lugar!: string;

  @IsInt({ message: 'O ID da sessão deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O ID da sessão é obrigatório.' })
  sessaoId!: number;
}