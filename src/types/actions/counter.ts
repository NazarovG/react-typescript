import { CounterActions } from '../../constants/counter';

export type TCounterActions = IIncreaseAction | IDecreaseAction | IResetAction;

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
