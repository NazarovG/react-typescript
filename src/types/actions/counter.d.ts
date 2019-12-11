type TCounterActions = IIncreaseAction | IDecreaseAction | IResetAction | ISetVisibilityFilter;

interface IIncreaseAction {
  type: import('@constants/counter').CounterActions.INCREASE;
  value: number;
}

interface IDecreaseAction {
  type: import('@constants/counter').CounterActions.DECREASE;
  value: number;
}

interface IResetAction {
  type: import('@constants/counter').CounterActions.RESET;
}

interface ISetVisibilityFilter {
  type: import('@constants/counter').CounterActions.SET_VISIBILITY_FILTER;
  filter: import('@constants/counter').CounterFiltersList;
}
