import { Controller, Get } from '@nestjs/common';

@Controller('movimentacao')
export class MovimentacaoController {
  @Get()
  index() {}
}
