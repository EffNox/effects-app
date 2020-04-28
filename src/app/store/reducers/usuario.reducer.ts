import { Usuario } from '../../models/usuario.model';
import * as frUser from '../actions'
import { createReducer, on, Action } from '@ngrx/store';
export interface UserState { user: Usuario; loaded: boolean; loading: boolean; error: any; }
const initState: UserState = { user: null, loaded: false, loading: false, error: null }

const reducers = createReducer(initState,
    on(frUser.CARGAR_USUARIO, (_) => ({ ..._, loading: true, error: null, user: null })),
    // on(frUser.CARGAR_USUARIO_SUCCESS, (_, pp) => ({ ..._, loading: false, loaded: true, user: pp.user })),
    on(frUser.CARGAR_USUARIO_SUCCESS, (_, { user }) => ({ ..._, loading: false, loaded: true, user })),
    on(frUser.CARGAR_USUARIO_FAIL, (_, { pl }) => ({ ..._, loading: false, loaded: false, user: null, error: pl })),
);
// const reducers = createReducer(initState,
// on(frUser.CARGAR_USUARIO, state => ({ ...state, loading: true, error: null, user: null })),
// on(frUser.CARGAR_USUARIO_SUCCESS, (state, { user }) => ({ ...state, loading: false, loaded: true, user })),
// on(frUser.CARGAR_USUARIO_FAIL, (state, { pl }) => ({ ...state, loading: false, error: { status: pl.status, message: pl.message, url: pl.url }, user: null })),
// );
export function userReducer(state: UserState, action: Action) {
    return reducers(state, action);
}

