import { createStore, combineReducers, Reducer, CombinedState, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer, { AuthState } from './auth/reducer';

export interface RootState {
  authState: AuthState
}

const rootReducer: Reducer<CombinedState<RootState>> = combineReducers(
  {
    authState: authReducer
  }
);

export const store: Store = createStore(rootReducer, applyMiddleware(thunk));
