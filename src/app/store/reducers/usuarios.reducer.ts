import { Usuario } from '../../models/usuario.model';
import * as frUsers from '../actions'
import { createReducer, on, Action } from '@ngrx/store';

export interface UsersState { users: Usuario[]; loaded: boolean; loading: boolean; error: any; }
const initState: UsersState = { users: [], loaded: false, loading: false, error: null }

export const reducers = createReducer(initState,
    on(frUsers.CARGAR_USUARIOS, (_) => ({ ..._, loading: true, error: null })),
    on(frUsers.CARGAR_USUARIOS_SUCCESS, (_, props) => ({ ..._, loading: false, loaded: true, users: props.users })),
    on(frUsers.CARGAR_USUARIOS_FAIL, (_, props) => ({ ..._, loading: false, loaded: false, error: { status: props.pl.status, message: props.pl.message, url: props.pl.url } })),
);

export function usersReducer(state = initState, action: Action) { return reducers(state, action); }

