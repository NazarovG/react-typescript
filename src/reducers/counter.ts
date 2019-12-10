import { TCounterActions } from '../types/actions/counter';
import { ICounterState } from '../types/reducers/counter';
import { CounterActions, CounterFiltersList } from '../constants/counter';

const initialState: ICounterState = {
  count: 0,
  history: [],
  filter: CounterFiltersList.ALL,
};

const changeCount = (state: ICounterState, value: number) => {
  const { count, history } = state;
  return {
    count: count + value,
    history: [count + value, ...history],
  };
};

export const counter = (state = initialState, action: TCounterActions): ICounterState => {
  switch (action.type) {
    case CounterActions.INCREASE:
      return { ...state, ...changeCount(state, action.value) };
    case CounterActions.DECREASE:
      return { ...state, ...changeCount(state, action.value) };
    case CounterActions.RESET:
      return initialState;
    case CounterActions.SET_VISIBILITY_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
