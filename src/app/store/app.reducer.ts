import * as frRd from './reducers';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState { usuarios: frRd.UsersState; usuario: frRd.UserState; }

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: frRd.usersReducer,
    usuario: frRd.userReducer
};
