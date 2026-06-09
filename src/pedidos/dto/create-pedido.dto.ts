import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsInt({ message: 'A quantidade de inteiras deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A quantidade de inteiras é obrigatória.' })
  qtInteira!: number;

  @IsInt({ message: 'A quantidade de meias deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A quantidade de meias é obrigatória.' })
  qtMeia!: number;

  @IsNumber({}, { message: 'O valor total deve ser um número.' })
  @IsNotEmpty({ message: 'O valor total é obrigatório.' })
  valorTotal!: number;
}