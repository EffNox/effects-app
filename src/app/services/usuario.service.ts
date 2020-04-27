import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(public http: HttpClient) { }

  private url = 'https://reqres.in/api';
  getUsers() { return this.http.get(`${this.url}/users?per_page=6`).pipe(pluck('data')); }
  getUserById(id: String) { return this.http.get(`${this.url}/users/${id}`).pipe(pluck('data')); }
}
