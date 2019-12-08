import React from 'react';
import styles from './styles.module.scss';

export interface IStateProps {
  history: number[];
}

type TProps = IStateProps;

const CounterHistory = ({ history }: TProps) => {
  return (
    <div className={styles.history}>
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterHistory;
