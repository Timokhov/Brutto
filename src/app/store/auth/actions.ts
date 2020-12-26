import { Action } from 'redux';
import { UserInfo } from '../../types/UserInfo';

export enum AuthActionType {
  AUTH_START = 'AUTH_START',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAIL = 'AUTH_FAIL',

  LOGOUT_START = 'LOGOUT_START',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL'
}

export interface AuthAction extends Action<AuthActionType> {
}

export interface AuthSuccessAction extends AuthAction {
  userInfo: UserInfo
}

export interface AuthFailAction extends AuthAction {
  error: string
}

export interface LogoutFailAction extends AuthAction {
  error: string
}

export const authStart = (): AuthAction => {
  return {
    type: AuthActionType.AUTH_START
  };
};

export const authSuccess = (userInfo: UserInfo): AuthSuccessAction => {
  return {
    type: AuthActionType.AUTH_SUCCESS,
    userInfo: userInfo
  };
};

export const authFail = (error: string): AuthFailAction => {
  return {
    type: AuthActionType.AUTH_FAIL,
    error: error
  };
};

export const logoutStart = (): AuthAction => {
  return {
    type: AuthActionType.LOGOUT_START
  };
};

export const logoutSuccess = (): AuthAction => {
  return {
    type: AuthActionType.LOGOUT_SUCCESS
  };
};

export const logoutFail = (error: string): LogoutFailAction => {
  return {
    type: AuthActionType.LOGOUT_FAIL,
    error: error
  };
};
