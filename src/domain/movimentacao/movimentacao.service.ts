import { Movimentacao } from './movimentacao.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MovimentacaoService {
  movimentacoes: Movimentacao[] = [];

  findAll(): Movimentacao[] {
    return this.movimentacoes;
  }

  create(movimentacao: Movimentacao): Movimentacao {
    this.movimentacoes.push(movimentacao);
    return movimentacao;
  }
}
