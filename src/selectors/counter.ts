import { IStoreState } from '../types/store';

export const getCount = (state: IStoreState) => state.counter.count;

export const getHistory = (state: IStoreState) => state.counter.history;
