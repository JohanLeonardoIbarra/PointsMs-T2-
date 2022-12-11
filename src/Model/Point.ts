import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity: number;

  @Column()
  user!: string;

  constructor() {
    this.quantity = 0;
  }
}
