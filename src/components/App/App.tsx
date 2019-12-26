import React from 'react';
import Routes from '@src/routes';
import '../../assets/styles/style.scss';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
};

export default App;
