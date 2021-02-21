import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import * as AuthActions from './actions';
import { AvailableUrls } from '../../utils/constants';
import * as HistoryService from '../../services/history/history.service';

export const authenticate = (username: string, password: string): ThunkAction<void, RootState, any, Action> => {
  return dispatch => {
    dispatch(AuthActions.authStart());
    setTimeout(() => {
      dispatch(AuthActions.authSuccess({
        id: '123',
        name: username,
        email: 'email@email.com',
        age: 25,
        isAdmin: true
      }));
      HistoryService.push(AvailableUrls.USERS);
    }, 500);
  };
};

export const logout = (): ThunkAction<void, RootState, any, Action> => {
  return dispatch => {
    dispatch(AuthActions.logoutStart());
    setTimeout(() => {
      dispatch(AuthActions.logoutSuccess());
      HistoryService.push(AvailableUrls.AUTHENTICATION);
    }, 500);
  };
};
