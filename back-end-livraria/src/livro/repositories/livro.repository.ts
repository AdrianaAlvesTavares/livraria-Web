import { Repository } from 'typeorm/repository/Repository';
import { Livro } from '../entities/livro.entity';

export interface LivroRepository extends Repository<Livro> {
  this: Repository<Livro>;
}
