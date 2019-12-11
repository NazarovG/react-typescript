declare interface ICounterState {
  count: number;
  history: number[];
  filter: import('@constants/counter').CounterFiltersList;
}
