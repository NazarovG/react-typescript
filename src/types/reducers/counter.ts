import { CounterFiltersList } from '../../constants/counter';

export interface ICounterState {
  count: number;
  history: number[];
  filter: CounterFiltersList;
}
