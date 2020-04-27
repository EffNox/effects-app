import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as frUserAct from '../../store/actions';
import { filter, pluck } from 'rxjs/operators';

@Component({ selector: 'app-lista', templateUrl: './lista.component.html', })
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.dispatch(frUserAct.CARGAR_USUARIOS())
    this.store.select('usuarios').pipe(/* filter(v => v.users.length != 0), */).subscribe((rs: any) => {
      this.loading = rs.loading;
      this.error = rs.error;
      this.usuarios = rs.users
    })
  }

}
