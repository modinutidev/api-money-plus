import { Pessoa } from 'src/domain/pessoa/pessoa.interface';

export interface Usuario {
  pessoa: Pessoa;
  senha: string;
  ativo: boolean;
}
