import { ApiProperty } from '@nestjs/swagger';

export class PessoaDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  celular: string;

  @ApiProperty()
  email: string;
}
