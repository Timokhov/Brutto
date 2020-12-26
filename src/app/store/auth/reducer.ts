import { UserInfo } from '../../types/UserInfo';
import { Nullable } from '../../types/Nullable';
import { AuthAction, AuthActionType, AuthFailAction, AuthSuccessAction, LogoutFailAction } from './actions';

export interface AuthState {
  userInfo: Nullable<UserInfo>,
  authInProgress: boolean,
  authError: string,
  logoutInProgress: boolean,
  logoutError: string
}

const initialState: AuthState = {
  userInfo: null,
  authInProgress: false,
  authError: '',
  logoutInProgress: false,
  logoutError: ''
};

const onAuthStart = (state: AuthState, action: AuthAction): AuthState => {
  return {
    ...state,
    authInProgress: true
  };
};

const onAuthSuccess = (state: AuthState, action: AuthSuccessAction): AuthState => {
  return {
    ...state,
    userInfo: action.userInfo,
    authInProgress: false,
    authError: ''
  };
};

const onAuthFail = (state: AuthState, action: AuthFailAction): AuthState => {
  return {
    ...state,
    userInfo: null,
    authInProgress: false,
    authError: action.error
  };
};

const onLogoutStart = (state: AuthState, action: AuthAction): AuthState => {
  return {
    ...state,
    logoutInProgress: true
  };
};

const onLogoutSuccess = (state: AuthState, action: AuthAction): AuthState => {
  return {
    ...state,
    userInfo: null,
    logoutInProgress: false,
    logoutError: ''
  };
};

const onLogoutFail = (state: AuthState, action: LogoutFailAction): AuthState => {
  return {
    ...state,
    userInfo: null,
    logoutInProgress: false,
    logoutError: action.error
  };
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.AUTH_START:
      return onAuthStart(state, action);
    case AuthActionType.AUTH_SUCCESS:
      return onAuthSuccess(state, action as AuthSuccessAction);
    case AuthActionType.AUTH_FAIL:
      return onAuthFail(state, action as AuthFailAction);
    case AuthActionType.LOGOUT_START:
      return onLogoutStart(state, action);
    case AuthActionType.LOGOUT_SUCCESS:
      return onLogoutSuccess(state, action);
    case AuthActionType.LOGOUT_FAIL:
      return onLogoutFail(state, action as AuthFailAction);
    default:
      return state;
  }
};

export default authReducer;
