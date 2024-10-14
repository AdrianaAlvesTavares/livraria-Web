import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../../models/Livros';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  private url = 'http://localhost:3000/livro'

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }
}
