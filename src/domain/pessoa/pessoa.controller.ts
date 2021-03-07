import { Body, Controller, Get, Post } from '@nestjs/common';
import { PessoaEntity } from './pessoa.entity';
import { ApiBody } from '@nestjs/swagger';
import { PessoaDto } from './pessoa.dto';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  async index(): Promise<PessoaEntity[]> {
    return await this.pessoaService.findAll();
  }

  @Post()
  @ApiBody({ type: PessoaDto })
  async create(@Body() pessoa: PessoaDto): Promise<PessoaEntity> {
    return await this.pessoaService.create(pessoa);
  }
}
