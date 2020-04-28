import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as frUserAct from '../actions'
import { map, catchError, concatMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, public _svUsers: UsuarioService) { }

    cargarUsuarios$ = createEffect(() => this.actions$.pipe(
        ofType(frUserAct.CARGAR_USUARIO),
        concatMap(action =>
            this._svUsers.getUserById(action.id).pipe(
                map((user: any) => frUserAct.CARGAR_USUARIO_SUCCESS({ user })),
                catchError(pl => of(frUserAct.CARGAR_USUARIO_FAIL({ pl })))
            )
        )
    ));
    /*  @Effect()
     cargarUsuarios$ = this.actions$.pipe(
         ofType(frUserAct.CARGAR_USUARIO),
         concatMap(action =>
             this._svUsers.getUserById(action.id).pipe(
                 map((rs: any) => frUserAct.CARGAR_USUARIO_SUCCESS({ user: rs })),
                 catchError(er => of(frUserAct.CARGAR_USUARIO_FAIL({ pl: er })))
             )
         )); */
}
