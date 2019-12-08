import { TCounterActions } from '../types/actions/counter';
import { ICounterState } from '../types/store/counter';
import { CounterActions } from '../constants/counter';

const initialState: ICounterState = {
  count: 0,
  history: [],
};

const changeCounter = (state: ICounterState, value: number) => {
  const { count, history } = state;
  return {
    count: count + value,
    history: [count + value, ...history],
  };
};

export const counter = (state = initialState, action: TCounterActions): ICounterState => {
  switch (action.type) {
    case CounterActions.INCREASE:
      return changeCounter(state, action.value);
    case CounterActions.DECREASE:
      return changeCounter(state, -action.value);
    case CounterActions.RESET:
      return initialState;
    default:
      return state;
  }
};
