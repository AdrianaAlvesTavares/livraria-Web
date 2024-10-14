import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IndexLivroSwagger } from './swagger/index-livro.swagger';
import { CreateLivroSwagger } from './swagger/create-livro.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { ShowLivroSwagger } from './swagger/show-livro.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UpdateLivroSwagger } from './swagger/update-livro.swaager';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @ApiOperation({ summary: ' Criar um livro' })
  @ApiResponse({
    status: 201,
    description: 'Livro criado com sucesso',
    type: CreateLivroSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livroService.createLivro(createLivroDto);
  }

  @ApiOperation({ summary: 'Listar todos os livros' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada com sucesso',
    type: IndexLivroSwagger,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.livroService.findAllLivros();
  }

  @ApiOperation({ summary: 'Buscar livro por ID' })
  @ApiResponse({
    status: 200,
    description: 'Dados de um livro retornado com sucesso',
    type: ShowLivroSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Livro não foi encontrado',
    type: NotFoundSwagger,
  })
  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.livroService.findOneOrFail(id);
  }

  @ApiOperation({ summary: 'Atualizar livro ' })
  @ApiResponse({
    status: 200,
    description: 'Livro atualizado com sucesso',
    type: UpdateLivroSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
    type: BadRequestSwagger,
  })
  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateLivroDto: UpdateLivroDto) {
    return this.livroService.update(+id, updateLivroDto);
  }

  @ApiOperation({ summary: 'Deletar Livro por Id' })
  @ApiResponse({ status: 204, description: 'Livro Deletado com sucesso' })
  @ApiResponse({
    status: 404,
    description: 'Livro não foi encontrado',
  })
  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.livroService.deleteById(id);
  }
}
