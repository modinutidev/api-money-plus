import { PessoaEntity } from './pessoa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.interface';
import { Repository } from 'typeorm';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoaEntity)
    private pessoaRepository: Repository<PessoaEntity>,
  ) {}

  async findAll(): Promise<PessoaEntity[]> {
    return await this.pessoaRepository.find();
  }

  async create(pessoa: Pessoa): Promise<PessoaEntity> {
    return await this.pessoaRepository.save(pessoa);
  }
}
