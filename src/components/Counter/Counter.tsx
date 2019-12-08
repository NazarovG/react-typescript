import React from 'react';
import styles from './styles.module.scss';

export interface IActionProps {
  handleIncrease: (value: number) => void;
  handleDecrease: (value: number) => void;
  handleReset: () => void;
}

export interface IStateProps {
  count: number;
}

type TProps = IStateProps & IActionProps;

const Counter = ({ count, handleIncrease, handleDecrease, handleReset }: TProps) => {
  return (
    <div className={styles.counter}>
      <h1 className={styles.title}>Counter</h1>
      <h2 className={styles.count}>{count}</h2>
      <button type="button" onClick={() => handleIncrease(1)}>
        Increase
      </button>
      <button type="button" onClick={() => handleDecrease(1)}>
        Decrease
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
