import { CoreEntity } from 'src/core/core.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovimentacaoEntity extends CoreEntity {
  @Column()
  descricao: string;

  @Column()
  data_vencimento: Date;

  @Column()
  data_pagamento: Date;

  @Column()
  valor_vendimento: number;

  @Column()
  valor_pagamento: number;
}
