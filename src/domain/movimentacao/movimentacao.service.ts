import { Movimentacao } from './movimentacao.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimentacaoEntity } from './movimentacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(MovimentacaoEntity)
    private movimentacaoRepository: Repository<MovimentacaoEntity>,
  ) {}

  async findAll(): Promise<MovimentacaoEntity[]> {
    return await this.movimentacaoRepository.find();
  }

  async create(movimentacao: Movimentacao): Promise<MovimentacaoEntity> {
    return await this.movimentacaoRepository.save(movimentacao);
  }
}
