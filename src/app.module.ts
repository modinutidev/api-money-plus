import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaController } from './domain/pessoa/pessoa.controller';
import { PessoaService } from './domain/pessoa/pessoa.service';
import { PessoaModule } from './domain/pessoa/pessoa.module';
import { MovimentacaoModule } from './domain/movimentacao/movimentacao.module';

@Module({
  imports: [PessoaModule, MovimentacaoModule],
  controllers: [AppController, PessoaController],
  providers: [AppService, PessoaService],
})
export class AppModule {}
