import { ApiProperty } from '@nestjs/swagger';

export class Movimentacao {
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  data_vendimento: Date;

  @ApiProperty()
  data_pagamento: Date;

  @ApiProperty()
  valor_vencimento: number;

  @ApiProperty()
  valor_pagamento: number;
}
