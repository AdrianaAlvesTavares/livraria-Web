import { ApiProperty } from '@nestjs/swagger';
import { Livro } from '../entities/livro.entity';

export class IndexLivroSwagger {
  @ApiProperty({ type: Livro, isArray: true })
  livro: Livro[];
}
