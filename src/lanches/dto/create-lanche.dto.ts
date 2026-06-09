import { IsInt, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateLancheDto {
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome!: string;

  @IsString({ message: 'A descrição deve ser um texto.' })
  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  descricao!: string;

  @IsNumber({}, { message: 'O valor unitário deve ser um número.' })
  @IsNotEmpty({ message: 'O valor unitário é obrigatório.' })
  valorUnitario!: number;

  @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A quantidade é obrigatória.' })
  qtUnidade!: number;

  @IsNumber({}, { message: 'O subtotal deve ser um número.' })
  @IsNotEmpty({ message: 'O subtotal é obrigatório.' })
  subtotal!: number;

  @IsInt({ message: 'O ID do pedido deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O ID do pedido é obrigatório.' })
  pedidoId!: number;
}