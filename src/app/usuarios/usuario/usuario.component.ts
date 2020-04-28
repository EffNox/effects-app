import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as frUserAct from '../../store/actions';
import { Usuario } from '../../models/usuario.model';
import { pluck, filter } from 'rxjs/operators';

@Component({ selector: 'app-usuario', templateUrl: './usuario.component.html', })
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean;
  error: any;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.pipe(pluck('id')).subscribe(id => {
      this.store.dispatch(frUserAct.CARGAR_USUARIO({ id }));
      this.store.select('usuario').subscribe((rs: any) => {
        this.loading = rs.loading;
        this.error = rs.error;
        this.usuario = rs.user
      });
    })
  }

}
