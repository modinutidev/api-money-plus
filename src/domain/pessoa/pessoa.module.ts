import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}
