import React from 'react';
import { CounterFiltersList } from '@constants/counter';
import styles from './styles.module.scss';

export interface IStateProps {
  filter: CounterFiltersList;
  positiveNumbersCount: number;
  negativeNumbersCount: number;
  allNumbersCount: number;
}

export interface IActionProps {
  setFilter: (value: CounterFiltersList) => void;
}

type TProps = IStateProps & IActionProps;

const CounterFilters = ({ filter, positiveNumbersCount, negativeNumbersCount, allNumbersCount, setFilter }: TProps) => {
  return (
    <div className={styles.filters}>
      <label className={styles.filter}>
        <span>Positive</span>
        <input
          type="radio"
          name="counter"
          value={CounterFiltersList.POSITIVE}
          checked={filter === CounterFiltersList.POSITIVE}
          onChange={() => setFilter(CounterFiltersList.POSITIVE)}
        />
        <span>{positiveNumbersCount}</span>
      </label>
      <label className={styles.filter}>
        <span>Negative</span>
        <input
          type="radio"
          name="counter"
          value={CounterFiltersList.NEGATIVE}
          checked={filter === CounterFiltersList.NEGATIVE}
          onChange={() => setFilter(CounterFiltersList.NEGATIVE)}
        />
        <span>{negativeNumbersCount}</span>
      </label>
      <label className={styles.filter}>
        <span>All</span>
        <input
          type="radio"
          name="counter"
          value={CounterFiltersList.ALL}
          checked={filter === CounterFiltersList.ALL}
          onChange={() => setFilter(CounterFiltersList.ALL)}
        />
        <span>{allNumbersCount}</span>
      </label>
    </div>
  );
};

export default CounterFilters;
