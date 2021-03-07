import { MovimentacaoDto } from './movimentacao.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './movimentacao.interface';
import { MovimentacaoEntity } from './movimentacao.entity';
import { ApiBody } from '@nestjs/swagger';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  async index(): Promise<MovimentacaoEntity[]> {
    return await this.movimentacaoService.findAll();
  }

  @Post()
  @ApiBody({ type: MovimentacaoDto })
  async create(
    @Body() movimentacao: MovimentacaoDto,
  ): Promise<MovimentacaoEntity> {
    return await this.movimentacaoService.create(movimentacao);
  }
}
