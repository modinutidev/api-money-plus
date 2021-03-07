import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
