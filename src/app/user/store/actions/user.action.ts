import { Action } from '@ngrx/store';
import { user } from 'user/models';

export enum UserActionType {
  LOGIN = '[User] [Login] Login',
  LOGIN_FAIL = '[User] [Login] Login Fail',
  LOGIN_SUCCESS = '[User] [Login] Login Success',

}


/**
 * Represents a store login action.
 */
export class Login implements Action {
  /**
   * The type of the action.
   */
  readonly type = UserActionType.LOGIN;

  /**
   * Fires a new login action.
   * @param payload the credentials required to get user logged in.
   */
  constructor(public payload: { number: number; password: string }) {}
}

/**
 * Represents a store login-fail action.
 */
export class LoginFail implements Action {
  /**
   * The type of the action.
   */
  readonly type = UserActionType.LOGIN_FAIL;

  /**
   * Fires a new login-fail action.
   * @param payload The error sent from the remote server with the response.
   */
  constructor(public payload: any) {}
}

/**
 * Represents a store login-success action.
 */
export class LoginSuccess implements Action {
  /**
   * The type of the action.
   */
  readonly type = UserActionType.LOGIN_SUCCESS;

  /**
   * Fires a new login-success action.
   * @param payload An object contains the response returned from the remote server
   * after login and a flag rememberUser indicates whether the user's token will be saved
   * in the local-storage for a time or will be removed when the session is ended.
   */
  constructor(public payload: { response: user;}) {}
}

export type LoginActions =
 | Login
 | LoginFail
 | LoginSuccess
