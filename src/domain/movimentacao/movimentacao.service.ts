import { MovimentacaoDto } from './movimentacao.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimentacaoEntity } from './movimentacao.entity';

@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(MovimentacaoEntity)
    private movimentacaoRepository: Repository<MovimentacaoEntity>,
  ) {}

  async findAll(): Promise<MovimentacaoEntity[]> {
    return await this.movimentacaoRepository.find();
  }

  async create(movimentacao: MovimentacaoDto): Promise<MovimentacaoEntity> {
    return await this.movimentacaoRepository.save(movimentacao);
  }
}
