import { combineReducers } from 'redux';
import { counter } from './counter';
import { IStoreState } from '../types/store';

export const rootReducer = combineReducers<IStoreState>({
  counter,
});
