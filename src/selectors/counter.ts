import { createSelector } from 'reselect';
import { IStoreState } from '../types/store';
import { CounterFiltersList } from '../constants/counter';

const getHistory = (state: IStoreState) => state.counter.history;

export const getCount = (state: IStoreState) => state.counter.count;

export const getFilter = (state: IStoreState) => state.counter.filter;

export const getPositiveNumbersCount = createSelector([getHistory], (numbers: number[]) =>
  numbers.reduce((prev: number, current: number) => (current > 0 ? prev + 1 : prev), 0),
);

export const getNegativeNumbersCount = createSelector([getHistory], (numbers: number[]) =>
  numbers.reduce((prev: number, current: number) => (current < 0 ? prev + 1 : prev), 0),
);

export const getAllNumbersCount = createSelector([getHistory], (numbers: number[]) => numbers.length);

export const getVisibleNumbers = createSelector([getFilter, getHistory], (filter, numbers) => {
  switch (filter) {
    case CounterFiltersList.ALL:
      return numbers;
    case CounterFiltersList.POSITIVE:
      return numbers.filter((n: number) => n > 0);
    case CounterFiltersList.NEGATIVE:
      return numbers.filter((n: number) => n < 0);
    default:
      return numbers;
  }
});
