import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PessoaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  celular: string;

  @Column()
  email: string;
}
