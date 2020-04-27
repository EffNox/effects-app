import { Usuario } from '../../models/usuario.model';
import * as frUser from '../actions'
import { createReducer, on, Action } from '@ngrx/store';
export interface UserState { user: Usuario; loaded: boolean; loading: boolean; error: any; }
const initState: UserState = { user: null, loaded: false, loading: false, error: null }

const reducers = createReducer(initState,
    on(frUser.CARGAR_USUARIO, (_) => ({ ..._, loading: true, error: null, user: null })),
    on(frUser.CARGAR_USUARIO_SUCCESS, (_, props) => ({ ..._, loading: false, loaded: true, user: props.user })),
    on(frUser.CARGAR_USUARIO_FAIL, (_, props) => ({ ..._, loading: false, loaded: false, error: { status: props.pl.status, message: props.pl.message, url: props.pl.url }, user: null })),
);
export function userReducer(state = initState, action: Action) {
    return reducers(state, action);
}

