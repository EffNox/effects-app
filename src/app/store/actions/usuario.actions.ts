import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = createAction('[Usuario] Cargar usuario', props<{ id: string }>());

export const CARGAR_USUARIO_SUCCESS = createAction('[Usuario] Cargar usuario SUCCESS', props<{ user: Usuario }>());

export const CARGAR_USUARIO_FAIL = createAction('[Usuario] Cargar usuario FAIL', props<{ pl: any }>());

