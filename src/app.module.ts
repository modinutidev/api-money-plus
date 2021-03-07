import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PessoaModule } from './domain/pessoa/pessoa.module';
import { MovimentacaoModule } from './domain/movimentacao/movimentacao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsuarioModule } from './domain/usuario/usuario.module';

@Module({
  imports: [
    PessoaModule,
    UsuarioModule,
    MovimentacaoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
