import { CounterActions, CounterFiltersList } from '@constants/counter';

export const increase = (value: number): TCounterActions => ({
  type: CounterActions.INCREASE,
  value,
});

export const decrease = (value: number): TCounterActions => ({
  type: CounterActions.DECREASE,
  value,
});

export const reset = (): TCounterActions => ({
  type: CounterActions.RESET,
});

export const setVisibilityFilter = (filter: CounterFiltersList): TCounterActions => ({
  type: CounterActions.SET_VISIBILITY_FILTER,
  filter,
});
