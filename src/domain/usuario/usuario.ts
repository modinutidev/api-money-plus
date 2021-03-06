import { ApiProperty } from '@nestjs/swagger';
import { Pessoa } from 'src/domain/pessoa/pessoa';

export class Usuario {
  @ApiProperty()
  senha: string;

  @ApiProperty()
  ativo: boolean;

  @ApiProperty()
  pessoa: Pessoa;
}
