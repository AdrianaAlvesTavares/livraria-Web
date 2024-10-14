/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Livro } from './entities/livro.entity';
import { LivroRepository } from './repositories/livro.repository';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro)
    private livroRepository: LivroRepository,
  ) {}

  async createLivro(data: CreateLivroDto) {
    return await this.livroRepository.save(this.livroRepository.create(data));
  }

  async findAllLivros() {
    return await this.livroRepository.find();
  }

  async findOneOrFail(id) {
    try {
      return await this.livroRepository.findOneBy({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async deleteById(id: number) {
    await this.findOneOrFail(id);
    await this.livroRepository.delete(id);
  }

  async update(id: number, data: UpdateLivroDto) {
    const livro = await this.findOneOrFail(id);

    this.livroRepository.merge(livro, data);
    return await this.livroRepository.save(livro);
  }
}
