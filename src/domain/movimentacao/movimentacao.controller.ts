import { MovimentacaoDto } from './movimentacao.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { MovimentacaoEntity } from './movimentacao.entity';
import { ApiBody } from '@nestjs/swagger';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  index(): Promise<MovimentacaoEntity[]> {
    return this.movimentacaoService.findAll();
  }

  @Post()
  @ApiBody({ type: MovimentacaoDto })
  create(@Body() movimentacao: MovimentacaoDto): Promise<MovimentacaoEntity> {
    return this.movimentacaoService.create(movimentacao);
  }
}
