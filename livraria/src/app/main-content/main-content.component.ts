import { LivrariaService } from './../services/livraria.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/Livros';
import { LivrariaModule } from '../services/livraria.module';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LivrariaModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  providers: [LivrariaService]
})
export class MainContentComponent implements OnInit {

  livros: Livro[] = [];
  constructor(private livrosService: LivrariaService) {}

  ngOnInit() {
    this.livrosService.getLivros()
      .subscribe(data => {
        this.livros = data;
      });
  };
}
