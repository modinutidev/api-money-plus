import { Injectable } from '@nestjs/common';
import { Pessoa } from './pessoa.interface';

@Injectable()
export class PessoaService {
  private pessoas: Pessoa[] = [];

  findAll(): Pessoa[] {
    return this.pessoas;
  }

  create(pessoa: Pessoa): Pessoa {
    this.pessoas.push(pessoa);
    return pessoa;
  }
}
