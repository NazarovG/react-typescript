import { CounterActionTypes, CounterFiltersList } from '@constants/counter';

export const increase = (value: number): TCounterAction => ({
  type: CounterActionTypes.INCREASE,
  value,
});

export const decrease = (value: number): TCounterAction => ({
  type: CounterActionTypes.DECREASE,
  value,
});

export const reset = (): TCounterAction => ({
  type: CounterActionTypes.RESET,
});

export const setVisibilityFilter = (filter: CounterFiltersList): TCounterAction => ({
  type: CounterActionTypes.SET_VISIBILITY_FILTER,
  filter,
});
