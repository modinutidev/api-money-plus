import { ApiProperty } from '@nestjs/swagger';

export class Pessoa {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  celular: string;

  @ApiProperty()
  email: string;
}
