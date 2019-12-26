type TCounterAction = IIncreaseAction | IDecreaseAction | IResetAction | ISetVisibilityFilter;

interface IIncreaseAction {
  type: import('@constants/counter').CounterActionTypes.INCREASE;
  value: number;
}

interface IDecreaseAction {
  type: import('@constants/counter').CounterActionTypes.DECREASE;
  value: number;
}

interface IResetAction {
  type: import('@constants/counter').CounterActionTypes.RESET;
}

interface ISetVisibilityFilter {
  type: import('@constants/counter').CounterActionTypes.SET_VISIBILITY_FILTER;
  filter: import('@constants/counter').CounterFiltersList;
}
