import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as frUserAct from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, public _svUsers: UsuarioService) { }
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(frUserAct.CARGAR_USUARIOS),
        switchMap(() =>
            this._svUsers.getUsers().pipe(
                map((rs: any) => frUserAct.CARGAR_USUARIOS_SUCCESS({ users: rs })),
                catchError(er => of(frUserAct.CARGAR_USUARIOS_FAIL({ pl: er })))
            ))
    )
}
