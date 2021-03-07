import { Module } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { MovimentacaoController } from './movimentacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentacaoEntity } from './movimentacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimentacaoEntity])],
  providers: [MovimentacaoService],
  controllers: [MovimentacaoController],
})
export class MovimentacaoModule {}
