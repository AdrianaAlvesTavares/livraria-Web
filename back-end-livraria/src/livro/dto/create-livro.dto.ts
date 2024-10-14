import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateLivroDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  titulo: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  autor: string;

  @ApiProperty()
  @IsString()
  @MaxLength(4) // Valida o tamanho do ISBN para 4 caracteres
  isbn: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  editora: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  preco: number;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  genero: string;
}
