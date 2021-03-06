import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { PessoaDto } from './pessoa.dto';
import { Pessoa } from './pessoa.interface';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  index(): Pessoa[] {
    return this.pessoaService.findAll();
  }

  @Post()
  @ApiBody({ type: PessoaDto })
  create(@Body() pessoa: PessoaDto): Pessoa {
    return this.pessoaService.create(pessoa);
  }
}
