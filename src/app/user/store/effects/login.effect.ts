import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoginUserService } from "user/services";
import { Login, LoginFail, LoginSuccess, UserActionType } from "user/store/actions";


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginUserService
  ) {}


  @Effect()
  search$ = this.actions$.pipe(
    ofType(UserActionType.LOGIN),
    switchMap((action: Login) =>
    this.loginService.post(action.payload).pipe(
      map((response:any) => new LoginSuccess(response)),
      catchError((error) => of(new LoginFail(error)))
    ))
  );



  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(UserActionType.LOGIN_SUCCESS),
    tap((action: LoginSuccess) => {
      console.log("success")
    })
  );

  @Effect({ dispatch: false })
  loginFail$ = this.actions$.pipe(
    ofType(UserActionType.LOGIN_FAIL),
    tap((action: LoginFail) => {
      console.log("fail")
    })
  );
  }
