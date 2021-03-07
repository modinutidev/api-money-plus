import { ApiProperty } from '@nestjs/swagger';

export class MovimentacaoDto {
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  data_vencimento: Date;

  @ApiProperty()
  data_pagamento: Date;

  @ApiProperty()
  valor_vendimento: number;

  @ApiProperty()
  valor_pagamento: number;
}
