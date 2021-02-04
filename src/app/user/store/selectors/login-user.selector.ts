import { createSelector } from '@ngrx/store';
import { selectUserState } from 'user/store/selectors/feature.selector';
import { UserState } from 'user/store/states/user.state';
import { LoginState } from '../states';


/* Selectors */

/**
 * Gets the session state.
 */
const selectLoginUserState = createSelector(selectUserState, (state: UserState) => state.user);

export const getLoginUser = createSelector(selectLoginUserState, (state: LoginState) => state.data)
