import { Controller, Get } from '@nestjs/common';

@Controller('pessoa')
export class PessoaController {
  @Get()
  index() {}
}
