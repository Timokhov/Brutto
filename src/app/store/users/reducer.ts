import { UserInfo } from '../../types/UserInfo';
import { UsersGroup } from '../../types/UsersGroup';
import {
  LoadUsersFailAction, LoadUsersGroupsFailAction,
  LoadUsersGroupsSuccessAction,
  LoadUsersSuccessAction,
  UsersAction,
  UsersActionType
} from './actions';

export interface UsersState {
  users: UserInfo[],
  usersIsLoading: boolean,
  loadUsersError: string,
  usersGroups: UsersGroup[],
  userGroupsIsLoading: boolean,
  loadUserGroupsError: string
}

const initialState: UsersState = {
  users: [],
  usersIsLoading: false,
  loadUsersError: '',
  usersGroups: [],
  userGroupsIsLoading: false,
  loadUserGroupsError: ''
};

const onUsersLoadStart = (state: UsersState, action: UsersAction): UsersState => {
  return {
    ...state,
    usersIsLoading: true
  };
};

const onLoadUsersSuccess = (state: UsersState, action: LoadUsersSuccessAction): UsersState => {
  return {
    ...state,
    users: action.users,
    loadUsersError: '',
    usersIsLoading: false
  };
};

const onLoadUsersFail = (state: UsersState, action: LoadUsersFailAction): UsersState => {
  return {
    ...state,
    users: [],
    loadUsersError: action.error,
    usersIsLoading: false
  };
};

const onUsersGroupsLoadStart = (state: UsersState, action: UsersAction): UsersState => {
  return {
    ...state,
    userGroupsIsLoading: true
  };
};

const onLoadUsersGroupsSuccess = (state: UsersState, action: LoadUsersGroupsSuccessAction): UsersState => {
  return {
    ...state,
    usersGroups: action.usersGroups,
    loadUserGroupsError: '',
    userGroupsIsLoading: false
  };
};

const onLoadUsersGroupsFail = (state: UsersState, action: LoadUsersGroupsFailAction): UsersState => {
  return {
    ...state,
    usersGroups: [],
    loadUserGroupsError: action.error,
    usersIsLoading: false
  };
};

const usersReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionType.LOAD_USERS_START:
      return onUsersLoadStart(state, action);
    case UsersActionType.LOAD_USERS_SUCCESS:
      return onLoadUsersSuccess(state, action as LoadUsersSuccessAction);
    case UsersActionType.LOAD_USERS_FAIL:
      return onLoadUsersFail(state, action as LoadUsersFailAction);
    case UsersActionType.LOAD_USERS_GROUPS_START:
      return onUsersGroupsLoadStart(state, action);
    case UsersActionType.LOAD_USERS_GROUPS_SUCCESS:
      return onLoadUsersGroupsSuccess(state, action as LoadUsersGroupsSuccessAction);
    case UsersActionType.LOAD_USERS_GROUPS_FAIL:
      return onLoadUsersGroupsFail(state, action as LoadUsersGroupsFailAction);
    default:
      return state;
  }
};

export default usersReducer;

