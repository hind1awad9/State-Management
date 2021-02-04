import { createFeatureSelector } from '@ngrx/store';
import { UserState } from 'user/store/states';

/**
 * The auth state feature selector.
 */
export const selectUserState = createFeatureSelector<UserState>('user');
