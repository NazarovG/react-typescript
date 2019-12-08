import React from 'react';
import Routes from '../../routes';
import 'normalize.css';
import '../../assets/styles/_global.scss';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
};

export default App;
