import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity('livros')
export class Livro extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  titulo?: string;

  @ApiProperty()
  @Column()
  autor?: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 4 })
  isbn?: string;

  @ApiProperty()
  @Column()
  editora?: string;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 2 })
  preco?: number;

  @ApiProperty()
  @Column()
  genero?: string;
}
