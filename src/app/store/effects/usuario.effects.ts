import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as frUserAct from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, public _svUsers: UsuarioService) { }
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(frUserAct.CARGAR_USUARIO),
        switchMap(action =>
            this._svUsers.getUserById(action[0]).pipe(
                map((rs: any) => frUserAct.CARGAR_USUARIO_SUCCESS({ user: rs })),
                catchError(er => of(frUserAct.CARGAR_USUARIO_FAIL({ pl: er })))
            )
        ));
}
