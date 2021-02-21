import { createStore, combineReducers, Reducer, CombinedState, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer, { AuthState } from './auth/reducer';
import usersReducer, { UsersState } from './users/reducer';

export interface RootState {
  authState: AuthState,
  usersState: UsersState
}

const rootReducer: Reducer<CombinedState<RootState>> = combineReducers(
  {
    authState: authReducer,
    usersState: usersReducer
  }
);

export const store: Store = createStore(rootReducer, applyMiddleware(thunk));
