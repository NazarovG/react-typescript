import { CounterActions, CounterFiltersList } from '../../constants/counter';

export type TCounterActions = IIncreaseAction | IDecreaseAction | IResetAction | ISetVisibilityFilter;

interface IIncreaseAction {
  type: CounterActions.INCREASE;
  value: number;
}

interface IDecreaseAction {
  type: CounterActions.DECREASE;
  value: number;
}

interface IResetAction {
  type: CounterActions.RESET;
}

interface ISetVisibilityFilter {
  type: CounterActions.SET_VISIBILITY_FILTER;
  filter: CounterFiltersList;
}
