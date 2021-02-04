import { LoginActions, UserActionType } from "user/store/actions";
import { LoginState } from "user/store/states";


/**
 * The initial state from which the state starts.
 */
const initialState: LoginState = {
  data: null,
  error: null
};

/**
 * The reducer function that is called in each action dispatch against the state.
 * @param state The current state.
 * @param action The action that will affect the state.
 */
export function loginReducer(state: LoginState = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    //#region LOGIN

    case UserActionType.LOGIN: {
      return {
        ...state,
        error:null
      };
    }

    case UserActionType.LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case UserActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        data: action.payload.response
      };
    }
  }}
