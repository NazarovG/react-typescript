import { TCounterActions } from '../types/actions/counter';
import { CounterActions } from '../constants/counter';

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
