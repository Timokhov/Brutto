import { Action } from 'redux';
import { UserInfo } from '../../types/UserInfo';
import { UsersGroup } from '../../types/UsersGroup';

export enum UsersActionType {
  LOAD_USERS_START = 'LOAD_USERS_START',
  LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
  LOAD_USERS_FAIL = 'LOAD_USERS_FAIL',

  LOAD_USERS_GROUPS_START = 'LOAD_USERS_GROUPS_START',
  LOAD_USERS_GROUPS_SUCCESS = 'LOAD_USERS_GROUPS_SUCCESS',
  LOAD_USERS_GROUPS_FAIL = 'LOAD_USERS_GROUPS_FAIL'
}

export interface UsersAction extends Action<UsersActionType> {
}

export interface LoadUsersSuccessAction extends UsersAction {
  users: UserInfo[]
}

export interface LoadUsersFailAction extends UsersAction {
  error: string
}

export interface LoadUsersGroupsSuccessAction extends UsersAction {
  usersGroups: UsersGroup[]
}

export interface LoadUsersGroupsFailAction extends UsersAction {
  error: string
}

export const loadUsersStart = (): UsersAction => {
  return {
    type: UsersActionType.LOAD_USERS_START
  };
};

export const loadUsersSuccess = (users: UserInfo[]): LoadUsersSuccessAction => {
  return {
    type: UsersActionType.LOAD_USERS_SUCCESS,
    users: users
  };
};

export const loadUsersFail = (error: string): LoadUsersFailAction => {
  return {
    type: UsersActionType.LOAD_USERS_FAIL,
    error: error
  };
};

export const loadUsersGroupsStart = (): UsersAction => {
  return {
    type: UsersActionType.LOAD_USERS_GROUPS_START
  };
};

export const loadUsersGroupsSuccess = (usersGroups: UsersGroup[]): LoadUsersGroupsSuccessAction => {
  return {
    type: UsersActionType.LOAD_USERS_GROUPS_SUCCESS,
    usersGroups: usersGroups
  };
};

export const loadUsersGroupsFail = (error: string): LoadUsersGroupsFailAction => {
  return {
    type: UsersActionType.LOAD_USERS_GROUPS_FAIL,
    error: error
  };
};
