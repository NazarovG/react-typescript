import { CounterActionTypes, CounterFiltersList } from '@constants/counter';

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

export const counter = (state = initialState, action: TCounterAction): ICounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return { ...state, ...changeCount(state, action.value) };
    case CounterActionTypes.DECREASE:
      return { ...state, ...changeCount(state, action.value) };
    case CounterActionTypes.RESET:
      return initialState;
    case CounterActionTypes.SET_VISIBILITY_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
