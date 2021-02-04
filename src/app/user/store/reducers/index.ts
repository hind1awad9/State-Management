import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from 'user/store/reducers/login.reducer';
import { UserState } from 'user/store/states';

/**
 * The User-Module store reducers.
 */
export const reducers: ActionReducerMap<UserState> = {
  user: loginReducer
};

