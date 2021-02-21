import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { Action } from 'redux';
import * as UsersActions from './actions';
import { UserInfo } from '../../types/UserInfo';
import { UsersGroup } from '../../types/UsersGroup';

const users: UserInfo[] = [
  {
    id: '0',
    name: 'Test',
    email: 'test@test.com',
    age: 30,
    group: {
      id: '1',
      name: 'First Group'
    }
  },
  {
    id: '1',
    name: 'Test1',
    email: 'test1@test.com',
    age: 31,
    group: {
      id: '1',
      name: 'First Group'
    }
  },
  {
    id: '2',
    name: 'Test2',
    email: 'test2@test.com',
    age: 32,
    group: {
      id: '3',
      name: 'Third Group'
    }
  },
  {
    id: '3',
    name: 'Test3',
    email: 'test3@test.com',
    age: 33,
    group: {
      id: '1',
      name: 'First Group'
    }
  },
  {
    id: '4',
    name: 'Test4',
    email: 'test4@test.com',
    age: 34,
    group: {
      id: '2',
      name: 'Second Group'
    }
  },
  {
    id: '5',
    name: 'Test5',
    email: 'test5@test.com',
    age: 35,
    group: {
      id: '1',
      name: 'First Group'
    }
  },
  {
    id: '6',
    name: 'Test6',
    email: 'test6@test.com',
    age: 36,
    group: {
      id: '2',
      name: 'Second Group'
    }
  },
  {
    id: '7',
    name: 'Test7',
    email: 'test7@test.com',
    age: 31,
    group: {
      id: '1',
      name: 'First Group'
    }
  },
  {
    id: '8',
    name: 'Test8',
    email: 'test8@test.com',
    age: 32,
    group: {
      id: '2',
      name: 'Second Group'
    }
  }
];

const groups: UsersGroup[] = [
  {
    id: '1',
    name: 'First Group'
  },
  {
    id: '2',
    name: 'Second Group'
  },
  {
    id: '3',
    name: 'Third Group'
  }
];

export const loadUsers = (): ThunkAction<void, RootState, any, Action> => {
  return dispatch => {
    dispatch(UsersActions.loadUsersStart());
    setTimeout(() => {
      dispatch(UsersActions.loadUsersSuccess(users));
    }, 300);
  };
};

export const loadUsersGroups = (): ThunkAction<void, RootState, any, Action> => {
  return dispatch => {
    dispatch(UsersActions.loadUsersGroupsStart());
    setTimeout(() => {
      dispatch(UsersActions.loadUsersGroupsSuccess(groups));
    }, 300);
  };
};
