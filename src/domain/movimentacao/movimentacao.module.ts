import { Module } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { MovimentacaoController } from './movimentacao.controller';

@Module({
  providers: [MovimentacaoService],
  controllers: [MovimentacaoController]
})
export class MovimentacaoModule {}
