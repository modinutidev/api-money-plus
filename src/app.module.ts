import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './domain/usuario/usuario.controller';
import { MovimentacaoController } from './domain/movimentacao/movimentacao.controller';
import { PessoaController } from './domain/pessoa/pessoa.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, MovimentacaoController, PessoaController],
  providers: [AppService],
})
export class AppModule {}
