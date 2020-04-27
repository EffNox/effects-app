import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = createAction('[Usuarios] Cargar usuarios');
export const CARGAR_USUARIOS_SUCCESS = createAction(
    '[Usuarios] Cargar usuarios SUCCESS', props<{ users: Usuario[] }>()
);
export const CARGAR_USUARIOS_FAIL = createAction(
    '[Usuarios] Cargar usuarios FAIL', props<{ pl: any }>()
);
