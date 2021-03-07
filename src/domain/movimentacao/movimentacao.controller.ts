import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './movimentacao.interface';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  index(): Movimentacao[] {
    return this.movimentacaoService.findAll();
  }

  @Post()
  create(@Body() movimentacao: Movimentacao): Movimentacao {
    return this.movimentacaoService.create(movimentacao);
  }
}
